import React from 'react';
import Navbar from './componentes/Navbar';
import {BrowserRouter,} from 'react-router-dom';
import Sobre from './componentes/Sobre/Sobre';



const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Sobre />
    </BrowserRouter>
  )
}
export default App;