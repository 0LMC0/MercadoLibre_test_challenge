// utilities
import { Link } from 'react-router-dom'
// MODULE STYLES
import itemStyles from "../../../../styles/itemList/item/item.module.scss";
// free_shipping img import
import ic_shipping from "../../../../../assets/img/shipping/ic_shipping.png"



const Item = ( {prod} ) => {

  return (
      <>
        <Link to={`/items/${prod.id}`}>
                <div className={itemStyles.container}>
                <div className={itemStyles.item}>
                    <img className={itemStyles.heroImg} src={prod.picture} alt="ImageNotFound" />
                    <div className={itemStyles.infoItem}>
                        <div className={itemStyles.pricing}>
                            <h2>${prod.price.amount}</h2>
                            <p>{prod.free_shipping && <img src={ic_shipping} alt="Free shipping" /> }</p>
                        </div>
                        <p className={itemStyles.nameItem}>{prod.title}</p>
                    </div>
                    <p className={itemStyles.city}> {prod.address.city_name}</p>
                </div>
                <hr />
            </div>
        </Link>
      </>
    );
  };

  export default Item;
