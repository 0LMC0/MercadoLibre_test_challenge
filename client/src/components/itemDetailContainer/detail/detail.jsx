// MODULED SCSS STYLES
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Category from "../../category/category";
import detailStyles from "../../styles/detailStyles.module.scss";


const Detail = ( {Producto, precio} ) => {

  const [Categorias, setCategorias] = useState([])

  console.log(Categorias)
 
  useEffect(() => {
    
    axios
    .get(`https://api.mercadolibre.com/categories/${Producto.category_id}`)
    .then(res => { setCategorias(res.data.path_from_root);})
  
  }, [Producto])
  

  return (
    <>

   <div className={detailStyles.cont} >
      <Category categorias={ Categorias } />
      <div className={detailStyles.prodDetail}>

      <div className={detailStyles.base} key={Producto.id}>
        <img className={detailStyles.heroImg} src={Producto.picture} alt="" />
        <div className={detailStyles.infoDetail}>
          <p>{Producto.condition} - {Producto.sold_quantity} Vendidos</p>
          <h4>{Producto.title}</h4>
          {/* el precio lo pase asi por que poniendo {Producto.price.amount} no me lo toma, estoy buscando la solucion de por que, ya que en main si me lo toma(y aca si lo consologueo tambien me aparece) */}
          <h2>${precio.amount}</h2>
          <button>Comprar</button>
        </div>
      </div>
        <div className={detailStyles.description}>
          <h3>Descripcion del producto</h3>
          <small>{Producto.description}</small>
        </div>
      </div>
   </div>
    </>
  )
}

export default Detail