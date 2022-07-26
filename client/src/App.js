// RRD
import { BrowserRouter as Ruta, Route, Routes} from 'react-router-dom'
// Componentes
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer';
import Main from "./components/main/main";
import Header from './components/header/header';

// Estilos 
import "./globalStyles.scss";






function App() {
  return (
    <div>
        <Ruta>
          <Header />
              <Routes>                
                <Route exact path='/items' element={<Main/>}/>
                <Route exact path='/items/:Id' element={<ItemDetailContainer />}/>
              </Routes> 
        </Ruta>
    </div>
  );
}

export default App;
