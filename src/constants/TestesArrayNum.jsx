import React, { useState } from 'react';
import sqlite3 from 'sqlite3';

const CriarTabelaNumeros = () => {
  const [quantidadeNumeros, setQuantidadeNumeros] = useState('');
  const [nomeTabela, setNomeTabela] = useState('');

  const criarTabela = () => {
    const db = new sqlite3.Database('./banco.db');

    db.run(`
      CREATE TABLE IF NOT EXISTS ${nomeTabela} (
        id INTEGER PRIMARY KEY,
        numero INTEGER
      );
    `);

    for (let i = 1; i <= quantidadeNumeros; i++) {
      db.run(`
        INSERT INTO ${nomeTabela} (numero)
        VALUES (?);
      `, [i]);
    }

    db.close();
  };

  return (
    <div>
      <h2>Criar tabela de números</h2>
      <label>
        Quantidade de números:
        <input type="number" value={quantidadeNumeros} onChange={(e) => setQuantidadeNumeros(e.target.value)} />
      </label>
      <br />
      <label>
        Nome da tabela:
        <input type="text" value={nomeTabela} onChange={(e) => setNomeTabela(e.target.value)} />
      </label>
      <br />
      <button onClick={criarTabela}>Criar tabela</button>
    </div>
  );
};

export default CriarTabelaNumeros;

//Nesse exemplo, criamos um componente React que contém dois inputs: um para a quantidade de números e outro para o nome da tabela. Também criamos um botão que, quando clicado, chama a função criarTabela para criar a tabela de números no SQL.

//A função criarTabela usa os valores dos inputs para criar a tabela de números no SQL. Ela cria uma tabela com o nome especificado pelo usuário e insere a quantidade de números especificada pelo usuário.

//Lembre-se de que essa é apenas uma exemplo de como criar uma tabela de números no SQL no React. Você pode adaptar essa função para atender às suas necessidades específicas.