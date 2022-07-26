import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Detail from "./detail/detail"
// child
import itemDetailContainer from "../styles/itemDetailContainer.module.scss";



const ItemDetailContainer = () => {

  const [Producto, setProducto] = useState({})
  const [Precio, setPrecio] = useState([])
  const { Id } =useParams()
  
  useEffect(() => {

    axios
    .get(`http://localhost:5000/api/items/${Id}` )
    //promesa asi que se tiene que setear la respuesta
    .then(res =>{
      const item = res.data.item.item
      setProducto(item)
      setPrecio(item.price)
    })
    .catch(err => err)
            
        }, [Id]);

    return (
    <>
      <div className={itemDetailContainer.container}>
        {<Detail Producto={ Producto } precio={ Precio } />}
      </div>
    </>
  )
}

export default ItemDetailContainer