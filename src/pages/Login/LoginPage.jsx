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
            Text="LOGIN"
            PaddingButton="0.65rem 1.65rem"
            BackgroundColor="#090A63"
            MarginButton="45px 0 0 0"
            BackgroundHover="#3F4093"
          />
          <ButtonComponent
            Text="Cadastrar-se"
            PaddingButton="0.55rem 1.55rem"
            BackgroundColor="#706E64"
            MarginButton="15px 0 0 0"
            BackgroundHover="#D7B231"
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
