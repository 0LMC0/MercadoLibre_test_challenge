// Utilities
import { useState } from 'react'
import { createSearchParams, Link, useNavigate } from 'react-router-dom';
// Imgs import
import Logo_ML from "../../assets/img/logos/Logo_ML.png";
import ic_Search from "../../assets/img/search/ic_Search.png"
// Styles
import headerStyles from "../styles/headerStyles.module.scss"

const Header = () => {
  const navigate = useNavigate();
  const [q, setq] = useState('');

  const goToMain = () =>
    navigate({
      pathname: '/items',
      search: createSearchParams({q}).toString()
    });

    
  const handleSubmit = (e) => {
    setq(e.target.value)
    goToMain();
  }

  return(
    <>
    <header className={headerStyles.headerML}>
      <Link to={'/'}>
        <img src={ Logo_ML } alt="imageNotFound" />
      </Link>
            <div className={headerStyles.searchML}>
               <input 
               className={headerStyles.inputML}
               type="text"
               value={q}
               placeholder="Nunca dejes de buscar"
               onChange = {handleSubmit}/>
               <button className={headerStyles.searchButton} ><img src={ ic_Search } alt="imageNotFound" /></button>
            </div>
     </header>
     
     </>
  );
  
}





  



   


export default Header