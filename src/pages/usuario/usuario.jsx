import { useState} from 'react';
import api from "../../constants/api.js";

import Navbar from '../../components/navbar/navbar.jsx';


function Usuario() {

 
  
    return <>
      <Navbar />
  <div className='container'>


<h1>Usuario</h1>
<form className='tabelaInput' >
  <label>Nome:</label>
  <input type="text"  />

  <label>Rota:</label>
  <input type="text"  />
                  
          
  <label>Senha:</label>
  <input type="password" />
  
  
  <button >Criar Usuario</button>

</form>

  
</div>

</>
}



export default Usuario;