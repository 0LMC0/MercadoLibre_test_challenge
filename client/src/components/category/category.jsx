import React from 'react'
// MODULED STYLES
import categoryStyles from "../styles/categoryStyles.module.scss"

const Category = ( { categorias } ) => {

    
  return (
             <>
             <ul className={categoryStyles.container}>
             { categorias.map((category,i) => (              
               <li className={categoryStyles.listItem} key={i} >
                 <p className={categoryStyles.arrow}> &gt; </p>  
                 <p className={categoryStyles.categoryName}>{ category.name }</p>
                 </li> 
             ))}
              </ul>
            </>
  )
}

export default Category