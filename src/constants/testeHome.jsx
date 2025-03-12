import { useState, useEffect } from 'react';
import axios from 'axios';
import api from '../../constants/api.js';
import './styles.css'

function Home() {


  const [rifas, setRifas] = useState([]);
  const [novaRifa, setNovaRifa] = useState({ name: '', descricao: '', price: 0, quantidadenumeros: 0 });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const resposta = await api.post('/rifas', novaRifa);
      setRifas([...rifas, resposta.data]);
      setNovaRifa({ name: '', descricao: '', price: 0, quantidadenumeros: 0 });
    } catch (erro) {
      console.error(erro);
    }
  };

  useEffect(() => {
    axios.get('/rifas')
      .then((resposta) => {
        setRifas(resposta.data);
      })
      .catch((erro) => {
        console.error(erro);
      });
  }, []);
  

  return <>
  <div className='container'>
      <h1>Administração de Rifas</h1>
      <form onSubmit={handleSubmit}>
        <label>Nome da Rifa:</label>
        <input type="text" value={novaRifa.name} onChange={(event) => setNovaRifa({ ...novaRifa, name: event.target.value })} />
        
        <label>Descrição da Rifa:</label>
        <input type="text" value={novaRifa.descricao} onChange={(event) => setNovaRifa({ ...novaRifa, descricao: event.target.value })} />
        
        <label>Preço da Rifa:</label>
        <input type="number"  value={novaRifa.price} onChange={(event) => setNovaRifa({ ...novaRifa, price: parseFloat(event.target.value) })} />        
        <label>Quantidade de Números:</label>
        <input type="number"  value={novaRifa.quantidadenumeros} onChange={(event) => setNovaRifa({ ...novaRifa, quantidadenumeros: parseInt(event.target.value) })} />
        
        <button type="submit">Criar Rifa</button>
      </form>

      <table className="table table-hover">
            <thead>
            <tr>
                <th scope="col">name</th>
                <th scope="col">descricao</th>
                <th scope="col">price</th>
                <th scope="col">quantidadenumeros/Hora</th>
                
                
            </tr>
            </thead>
            
            
        </table>
      
     
    </div>
  </>
}

export default Home;