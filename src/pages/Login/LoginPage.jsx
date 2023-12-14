import { ButtonComponent } from "../../components/Button";

// import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'; Implemente a logica de login a partir daqui

import { firebaseApp } from "../../utils/firebase"; // Já foi importado as configurações do firebase aqui ( dados )

import { InputComponent } from "../../components/input";
import BackgroundImageRight from "../../assets/images/backgroundimagelogin.jpg";

import * as S from "./styles";

export const LoginPage = () => {
  console.log(firebaseApp);

  return (
    <S.Container>
      <S.ContainerLeft>
        <S.ContainerLogin>
        <h1>Bem Vindo</h1>
        <InputComponent type="Email" placeholder="Digite seu Email" />
        <InputComponent type="Password" placeholder="Digite sua Senha" />
        <a href="#">Esqueceu sua senha?</a>
        <S.ButtonsLog>
          <ButtonComponent
            text="LOGIN"
            paddingButton="0.65rem 1.65rem"
            backgroundColor="#090A63"
            marginButton="45px 0 0 0"
            backgroundHover="#3F4093"
          />
          <ButtonComponent
            text="Cadastrar-se"
            paddingButton="0.55rem 1.55rem"
            backgroundColor="#706E64"
            marginButton="15px 0 0 0"
            backgroundHover="#D7B231"
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
