// Child
import Item from './item/item'
// MODULED SCSS STYLES
import itemListStyles from "../../../styles/itemList/itemList.module.scss";
import Category from '../../../category/category';


const ItemList = ( { prods, categorias } ) => {
  return (
    <>
          <div className={itemListStyles.categoriasSection}>
          <Category categorias={ categorias } />
          </div>
        <div className={itemListStyles.container}>

      {prods.map((prods, index) => {
        return (
          <Item key={index} prod={prods} />
        );
      })}
      </div>
    </>
  )
}

export default ItemList