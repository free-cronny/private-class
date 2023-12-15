/* eslint-disable no-unused-vars */
import ButtonComponent from "../../components/Button";
import { useState } from "react";
// import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'; Implemente a logica de login a partir daqui

// eslint-disable-next-line no-unused-vars
import { firebaseApp } from "../../utils/firebase"; // Importação do Firebase

import { Navigate  } from 'react-router-dom';

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import InputComponent  from "../../components/input";


import BackgroundImageRight from "../../assets/images/backgroundimagelogin.jpg";



import * as S from "./styles"; // Importação dos estilos locais (S.NOME)

import useAuthStore from "../../utils/store"; // Store ( variaveis globais )

export const LoginPage = () => {



  const [email, setEmail] = useState(""); // Manipulação de [variavel, função para mudar]
  const [password, setPassword] = useState("");

  const { isAuthenticated, setAuthenticated } = useAuthStore(); // Puxando de dentro da store a variavel de isAuthenticated(booleano)

  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  const auth = getAuth();

  console.log(isAuthenticated)
  

  const createUsers = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userVerified) => {
        //Implementar um swalfire
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const loginUser = () => {

    signInWithEmailAndPassword(auth, email, password)
      .then((userLogin) => {
        setAuthenticated(true)
        const user = userLogin.user;
        console.log(user)
        setEmail(email);
       
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
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
          <a href="#">Esqueceu sua senha?</a>
          <S.ButtonsLog>
            <ButtonComponent
              Text="LOGIN"
              PaddingButton="0.65rem 1.65rem"
              BackgroundColor="#090A63"
              MarginButton="45px 0 0 0"
              BackgroundHover="#3F4093"
              onClick={loginUser}
            />
            <ButtonComponent
              Text="Cadastrar-se"
              PaddingButton="0.55rem 1.55rem"
              BackgroundColor="#706E64"
              MarginButton="15px 0 0 0"
              BackgroundHover="#D7B231"
              onClick={createUsers}
            />
          </S.ButtonsLog>
        </S.ContainerLogin>
      </S.ContainerLeft>
      <div>
        <img
          src={BackgroundImageRight}
          alt="imagem de fundo da tela de login"
        />
      </div>
    </S.Container>
  );
};
