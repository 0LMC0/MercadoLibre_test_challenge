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
  const [search, setSearch] = useState("");

  console.log(search)

  const goToMain = () =>
    navigate({
      pathname: '/items',
      search: createSearchParams({search}).toString()
    });

  const handleChange = (e) =>{
    setSearch(e.target.value)
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    goToMain();
  }

  return(
    <>
    <header className={headerStyles.headerML}>
      <Link to={'/'}>
        <img src={ Logo_ML } alt="imageNotFound" />
      </Link>
            <form onSubmit={ handleSubmit } className={headerStyles.searchML}>
               <input 
               className={headerStyles.inputML}
               type="text"
               value={ search }
               placeholder="Nunca dejes de buscar"
               onChange = {handleChange}/>
               <button type='submit' className={headerStyles.searchButton} ><img src={ ic_Search } alt="imageNotFound" /></button>
            </form>
     </header>
     
     </>
  );
  
}





  



   


export default Header