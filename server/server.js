const express = require('express');
const app = express();
const axios = require("axios");
var cors = require('cors');


// cross origin middleware
app.use(cors())

//////////////////////////////////
////////     QUERY    ///////////
////////////////////////////////

app.get("/api/items", async (req, res) => {
  // query 
  const query = req.query.search
  
  //variable que guarda el URL
  let i = `https://api.mercadolibre.com/sites/MLA/search?q=${query}`;

  // GET
  axios
  .get(i)
  .then((resp) => {
    let items = resp.data.results.slice(0, 4);
    let cat = resp.data.filters;

    // se guarda en esta variable
    let resultadoFinal = {
      author: {
        name: "Lautaro",
        lastname: "Caceres" 
      },
      categories: [],
      items: [] 
    };  

    // le paso el camino hacia path_from_root y desde el componente category lo filtro, como hago en detalle
    if(cat.length > 0) cat[0].values[0].path_from_root.map(x =>  resultadoFinal.categories.push(x));

    items.map(x => {
      let item = {
        id: x.id,
        title: x.title,
        price: {
          currency: x.currency_id,
          amount: x.price,
          // los decimales ya estan incluidos en el amount
        },
        picture: x.thumbnail,
        condition: x.condition,
        free_shipping: x.shipping.free_shipping,
        address: x.address
      };

      // se pushea adentro del array con push()
      resultadoFinal.items.push(item);
    })
    
    // se envia el resultado
    res.status(200).send(resultadoFinal);

  }).catch(err => {
    // error
    res.status(400).send(err)
  })

})


///////////////////////////////////
////////   DESCRIPCION  //////////
////////////////////////////////



app.get("/api/items/:id", async (req, res) => {
  // reqs
  const requestItem = async (id) => { let item = `https://api.mercadolibre.com/items/${id}`; return axios.get(item); }
  const requestDescripcion = async (id) => { let descripcion = `https://api.mercadolibre.com/items/${id}/description`; return axios.get(descripcion); }

  // pide los parametros
  const resp = await requestItem(req.params.id);
  const respDescription = await requestDescripcion(req.params.id);

  // guarda la variable en un obj como se pide en el pdf
  let resultadoFinal = {
    author: {
      name: "Lautaro",
      lastname: "Caceres" 
    }
    , item: {} 
  };

  if (resp.data && respDescription.data) {

    let itemI = resp.data;
    let descripcion = respDescription.data;
    let item = {

      id: itemI.id,
      title: itemI.title,
      category_id: itemI.category_id,
      price: {

        currency: itemI.currency_id,
        amount: itemI.price,        
        // los decimales ya estan incluidos en el amount
      },
      picture: itemI.pictures[0].url,
      condition: itemI.condition === "new" ? "Nuevo" : "Usado",
      free_shipping: itemI.shipping.free_shipping,
      address: itemI.address,
      sold_quantity: itemI.sold_quantity,
      description: descripcion.plain_text
    };

    // setea el objeto con lo q se pidio de item
    resultadoFinal.item = ({item})

    // se envia el objeto
    res.status(200).send(resultadoFinal);
  } else {
    res.status(400).send(err);
  }


})


// inicio del servidor en el puerto 5000/api
app.listen(5000, () => console.log("server running on port: 5000"))