import { useState} from 'react';
import api from "../../constants/api.js";
import './campanha.css';
import Navbar from '../../components/navbar/navbar.jsx';


function Campanha() {

  const [nomeTabela, setNomeTabela] = useState('');
  const [valor, setValor] = useState('');
  const [quantidadeNumeros, setQuantidadeNumeros] = useState('');
  
    

  async function ExecuteAccount() {
    try {
      const response = await api.post("/rifas/add", {
        nomeTabela,
        valor,
        quantidadeNumeros
        
      });

      if (response.data) {
        setNomeTabela(response.data);
      
        //console.log(response.data);
      }

    } catch (error) {
      if (error.response?.data.error)
        Alert.alert(error.response.data.error);
      else
        Alert.alert("Ocorreu um erro. Tente novamente mais tarede");
    }
  }

  
    return <>
      <Navbar />
  <div className='container'>


<h1>Campanha</h1>
<form className='tabelaInput' >
  <label>Nome da Campanha:</label>
  <input type="text" value={nomeTabela} onChange={(e) => setNomeTabela(e.target.value)} />

  <label>Valor:</label>
  <input type="number" value={valor} onChange={(e) => setValor(e.target.value)} />
                  
          
  <label>Quantidade de Números:</label>
  <input type="number" value={quantidadeNumeros} onChange={(e) => setQuantidadeNumeros(e.target.value)} />
  
  
  <button onClick={ExecuteAccount}>Criar Rifa</button>
  
</form>

  
</div>

</>
}



export default Campanha;