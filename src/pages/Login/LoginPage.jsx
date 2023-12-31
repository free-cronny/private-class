/* eslint-disable no-unused-vars */
import ButtonComponent from "../../components/Button/Button";
import { useState } from "react";
// import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'; Implemente a logica de login a partir daqui

// eslint-disable-next-line no-unused-vars
import { firebaseApp } from "../../utils/firebase"; // Importação do Firebase

import { getDatabase, ref, set } from "firebase/database";

import { Navigate } from 'react-router-dom';

import {
  getAuth,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";

import SelectComponent from '../../components/Select/Select'
import InputComponent from "../../components/Input/Input";
import Loading from "../../components/Loading/loading";
import Register from "../../pages/Register/Register";
import { Link } from 'react-router-dom';

import BackgroundImageRight from "../../assets/images/backgroundimagelogin.jpg";


import * as S from "./styles"; // Importação dos estilos locais (S.NOME)

import useAuthStore from "../../utils/store"; // Store ( variaveis globais )
import Swal from "sweetalert2";


export const LoginPage = () => {


  const [email, setEmail] = useState(""); // Manipulação de [variavel, função para mudar]
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);




  const [loading, setLoading] = useState(false)
  const { isAuthenticated, setAuthenticated } = useAuthStore(); // Puxando de dentro da store a variavel de isAuthenticated(booleano)

  if (isAuthenticated) {
    return <Navigate to="/home" />;
  }

  const auth = getAuth();


  const irPage = () =>{
    window.location.href = '/register'
  }

  const handleForgotPassword = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        Swal.fire("Enviamos uma mensagem de recuperação em seu Email!");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Algo deu errado!",
          footer: `${errorCode}, ${errorMessage}`
        });
      });
  };


  const loginUser = async () => {
    try {
      Swal.fire({
        icon: "success",
        title: "Usuário logado com sucesso!",
        showConfirmButton: false,
        timer: 1500
      });
      setLoading(true);
      const userLogin = await signInWithEmailAndPassword(auth, email, password);
      setAuthenticated(true);
      const user = userLogin.user;
      console.log(user);
      setEmail(email);

      setRedirect(true);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Algo deu errado!",
        footer: `${errorCode, errorMessage}`
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <S.Container>
      <S.ContainerLeft>

        <S.ContainerLogin>

          <h1>Bem - Vindo</h1>
          <InputComponent
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            type="Email"
            placeholder="Digite seu Email"
          />
          <InputComponent
            onChange={(event) => {
              setPassword(event.target.value)
            }}
            type="Password"
            placeholder="Digite sua Senha"
          />
          <p style={{ color: 'blue', cursor: 'pointer' }} onClick={handleForgotPassword}>Esqueceu sua senha?</p>
          <S.ButtonsLog>
            <ButtonComponent
              Text={loading ? (<Loading />) : "LOGIN"}
              PaddingButton="0.65rem 1.65rem"
              BackgroundColor="#090A63"
              MarginButton="45px 0 0 0"
              BackgroundHover="#3F4093"
              onClick={loginUser}
            />
              <ButtonComponent
                Text={loading ? (<Loading />) : "Cadastrar-se"}
                PaddingButton="0.55rem 1.55rem"
                BackgroundColor="#706E64"
                MarginButton="15px 0 0 0"
                BackgroundHover="#D7B231"
                onClick={irPage}
              />
          </S.ButtonsLog>
        </S.ContainerLogin>
      </S.ContainerLeft>
      <S.ContainerRight>
        <img
          src={BackgroundImageRight}
          alt="imagem de fundo da tela de login"
        />
      </S.ContainerRight>
    </S.Container>
  );
};
