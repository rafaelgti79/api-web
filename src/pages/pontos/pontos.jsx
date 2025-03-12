import { useState} from 'react';
import api from "../../constants/api.js";

import Navbar from '../../components/navbar/navbar.jsx';


function Pontos() {

 
  
    return <>
      <Navbar />
  <div className='container'>


<h1>Rotas</h1>
<form className='tabelaInput' >
  <label>Nome da Rota:</label>
  <input type="text"  />
                  
          
  <label>Endereço:</label>
  <input type="text" />
  
  
  <button >Criar Rota</button>
  
</form>

  
</div>

</>
}



export default Pontos;