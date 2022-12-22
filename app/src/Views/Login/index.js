import React, { useEffect, useState } from "react";
import axios from "axios";

import NavbarInicial from "../../Components/Public/NavbarInicial";
import Footer from "../../Components/Public/Footer";
import LoginLogo from "../../Assets/Img/LoginLogo.png";
import StockImg from "../../Assets/Img/caixaSAC.png";

import "./styles.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  async function fetchUsers(email) {
    const url = `http://localhost:8080/users`;
    const res = await axios.get(url);
    const { data } = res;

    data.forEach((user) => {
      if (user.email === email) {
        localStorage.setItem(
          "User",
          JSON.stringify({
            email: email,
            loggedIn: true,
          })
        );
        navigate("/home");
      }
    });
  }

  const [email, setEmail] = useState("");

  return (
    <div className="Login">
      <NavbarInicial />
      <div className="Container">
        <div className="ImgContent">
          <img src={StockImg} className="StockImage" />
        </div>
        <div className="ContainerForm">
          <div className="BoxForm">
            <img src={LoginLogo} className="LoginLogo" />
            <div className="FormBox">
              <div className="FormItem">
                <label for="Email" className="Labels">
                  Email
                </label>
                <input
                  id="Email"
                  type="email"
                  className="form-control"
                  placeholder="Digite o seu email"
                  onBlur={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="FormItem">
                <label for="Senha" className="Labels">
                  Senha
                </label>
                <input
                  id="Senha"
                  type="password"
                  className="form-control"
                  placeholder="Digite a sua senha"
                />
              </div>
            </div>
            <button className="DefaultButton" onClick={() => fetchUsers(email)}>
              Login
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
