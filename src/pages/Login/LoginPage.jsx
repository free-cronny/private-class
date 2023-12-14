import { ButtonComponent } from "../../components/Button";
import { useState } from "react";
// import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'; Implemente a logica de login a partir daqui

import { firebaseApp } from "../../utils/firebase"; // Já foi importado as configurações do firebase aqui ( dados )

import { InputComponent } from "../../components/input";
import BackgroundImageRight from "../../assets/images/backgroundimagelogin.jpg";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import * as S from "./styles";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth();

  const createUsers = () => {


    createUserWithEmailAndPassword(auth, email, password)
      .then((userVerified) => {
        const user = userVerified.user;
        console.log("criado");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("erro");
      });
  };

  const loginUser = () => {

    signInWithEmailAndPassword(auth, email, password)
      .then((userLogin) => {
        window.location.href = './dashboard'
        const user = userLogin.user;
        console.log('logou')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
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
              console.log(email);
            }}
            type="Email"
            placeholder="Digite seu Email"
          />
          <InputComponent
            onChange={(event) => {
                setPassword(event.target.value)
                console.log(password)
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
