import { Routes,Route } from 'react-router-dom';
import './App.css';
import Datas from './componentes/datas';
import Buscador from './componentes/formulario';
import Revision from './componentes/revision';
import Menu from './componentes/menu';

function App() {
  return (
    <div className='cont-all'>
    <h1 className='h1'>CHGALLMWTSX</h1>
    <Menu/>
   <div className='cont'>

    <Routes>
      <Route path='/' element={<Buscador/>}/>
      <Route path='/review' element={<Revision/>}/>
      
   
    </Routes>
   
    </div>
    </div>
  );
}

export default App;
