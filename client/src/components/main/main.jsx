// utilities
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
// Axios import
import axios from "axios"
// MODULED SCSS STYLES
import mainStyles from "../styles/mainStyles.module.scss"
// Child
import ItemList from './product/itemList/itemList'


const Main = () => {
  
  // traigo la data de busqueda desde el buscador + ?q= + data
  const location = useLocation();
  const searchData = location.search;
  // seteo los productos
  const [Products, setProducts] = useState([]);
  // corto array en 4 objetos
  const productsSlice = Products.slice(0,4);
  // seteo categorias
  const [categories, setCategories] = useState([])
 

// se ejecuta cada q ejecuta searchData
useEffect(() => {
  axios
  .get(`http://localhost:5000/api/items${searchData}` )
  .then(res =>{
    //promesa asi que se tiene que setear la respuesta
    const items = res.data.items
    const categories = res.data.categories
    // const author = res.data.author
    
    setProducts(items)
    setCategories(categories)
    // setAuthor(author)
    })
  .catch(err => err)
}, [searchData]);

return (
    
      <div className={mainStyles.container}>
        <div className={mainStyles.base}>
          {/*mando categorias y productos */}
            {Products == 0 ? <p className={mainStyles.noProductFound}> Ningún elemento coincide con el criterio de búsqueda</p> : <ItemList prods={productsSlice} categorias={ categories } /> }
        </div>
      </div>
  )
}

export default Main