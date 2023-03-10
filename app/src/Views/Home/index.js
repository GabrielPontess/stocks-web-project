import React, { useEffect, useState } from "react";

import SideBar from "../../Components/Public/SideBar";
import Card from "../../Components/Home/Card";

import Estoques from "../../Assets/Img/boxes.png";
import Tabelas from "../../Assets/Img/frequency.png";
import Logout from "../../Assets/Img/log-out.png";

import "./styles.css";
import { Navigate } from "react-router-dom";

const Home = () => {
  let user = { loggedIn: false };

  if (JSON.parse(localStorage.getItem("User"))) {
    user = JSON.parse(localStorage.getItem("User"));
  } else {
    user.loggedIn = false;
  }

  return (
    <>
      {user.loggedIn === true ? (
        <>
          <div className="Home">
            <SideBar />
            <div className="HomeContent">
              <div className="card">
                <div className="card-header">
                  <h1>Home</h1>
                </div>
                <div className="card-body">
                  <h4>
                    Bem-Vindo a Versão Beta do Stocks! Veja as funcionalidades
                    disponíveis em nosso sistema
                  </h4>
                  <br />
                  <div className="row CardsContainer">
                    <Card
                      Img={Estoques}
                      Title={"Criação de Estoques"}
                      Body={
                        "Responsável pela criação e edição de novos estoques."
                      }
                    />
                    <Card
                      Img={Tabelas}
                      Title={"Visualização dos Estoques"}
                      Body={
                        "Visualização dos seus estoques criados com a possibilidade de gerenciamento dinâmico dos seus produtos."
                      }
                    />
                    <Card
                      Img={Logout}
                      Title={"Saída do Sistema"}
                      Body={"Logout do usuário no sistema."}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};

export default Home;

/*
const Home = () => {
  const estaLogado = localStorage.getItem("User");
  return <>{estaLogado ? "" : ""}</>;
};
*/
