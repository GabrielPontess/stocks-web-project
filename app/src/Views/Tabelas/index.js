import React, { useEffect, useState } from "react";

import SideBar from "../../Components/Public/SideBar";

import "./styles.css";

const Tabelas = () => {
  const [nome, setNome] = useState("");
  const [tipo, setTipo] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [data, setData] = useState("");
  const [estoques, setEstoques] = useState([]);

  function criarEstoque(nome, tipo, qtd, data) {
    const nEst = {
      nome: nome,
      tipo: tipo,
      qtd: qtd,
      data: data,
    };
    setEstoques([...estoques, nEst]);
    setNome("");
    setTipo("");
    setData("");
    setQuantidade("");
    alert("Stock adicionado!");
    console.log(localStorage.getItem("stock"));
    if (
      localStorage.getItem("stock") !== null &&
      localStorage.getItem("stock") !== undefined
    ) {
      const i = JSON.parse(localStorage.getItem("stock"));
      console.log(i);
      localStorage.setItem("stock", JSON.stringify([...i, nEst]));
    } else if (
      localStorage.getItem("stock") == null ||
      localStorage.getItem("stock") == undefined
    ) {
      localStorage.setItem("stock", JSON.stringify([nEst]));
    }
  }
  let itens = JSON.parse(localStorage.getItem("stock"));

  useEffect(() => {
    if (
      localStorage.getItem("stock") === null ||
      localStorage.getItem("stock") === undefined
    ) {
      localStorage.setItem("stock", JSON.stringify([]));
    }
  }, []);
  return (
    <div className="Tabelas">
      <SideBar />
      <div className="TabelasContent">
        <div className="card">
          <div className="card-header">
            <h1>Tabelas</h1>
          </div>
          <div className="card-body">
            <h4>
              Bem-Vindo a Versão Beta do Stocks! Veja as funcionalidades
              disponíveis em nosso sistema
            </h4>
            <br />
            <div className="row">
              <div className="col-2">
                <button
                  className="btn btn-success"
                  onClick={() => criarEstoque(nome, tipo, quantidade, data)}
                >
                  Criar um novo Stock
                </button>
              </div>
            </div>
            <br />
            <div className="row">
              <div className="content">
                <table className="table table-bordered table-striped">
                  <thead>
                    <th>Nome</th>
                    <th>Tipo</th>
                    <th>Qtd. Produtos</th>
                    <th>Data de Criação</th>
                  </thead>
                  <tr>
                    <td>
                      <input
                        type="text"
                        onChange={(e) => setNome(e.target.value)}
                        value={nome}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        onChange={(e) => setTipo(e.target.value)}
                        value={tipo}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        onChange={(e) => setQuantidade(e.target.value)}
                        value={quantidade}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        onChange={(e) => setData(e.target.value)}
                        value={data}
                      />
                    </td>
                  </tr>
                  {estoques.map((estoque) => (
                    <tr>
                      <td>{estoque.nome}</td>
                      <td>{estoque.tipo}</td>
                      <td>{estoque.qtd}</td>
                      <td>{estoque.data}</td>
                    </tr>
                  ))}
                  {itens.map((item) => {
                    <tr>
                      <td>{item.nome}</td>
                      <td>{item.tipo}</td>
                      <td>{item.qtd}</td>
                      <td>{item.data}</td>
                    </tr>;
                  })}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabelas;
