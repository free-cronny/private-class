import { ButtonComponent } from "../../components/Button"

// import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'; Implemente a logica de login a partir daqui

import { firebaseApp } from '../../utils/firebase'; // Já foi importado as configurações do firebase aqui ( dados )



import { InputComponent } from "../../components/input"
import BackgroundImageRight from '../../assets/images/backgroundLogin.png'

import * as S from './styles'


export const LoginPage = () => {

    console.log(firebaseApp)


    return (
        <S.Container>
            <S.ContainerLeft>
                <h1>Bem Vindo</h1>            
                <InputComponent type="Email" placeholder="Insira seu Email"/>
                <InputComponent type="Password" placeholder="Insira sua Senha"/>
                <div style={{display: 'flex', justifyContent: 'space-around', width: '60%'}}>
                    <ButtonComponent title="Login" backgroundColor="red"/>
                    <ButtonComponent title="Cadastre-se" backgroundColor="#949090"/>
                </div>
            </S.ContainerLeft>
            <div>
                <img src={BackgroundImageRight} alt="imagem de fundo da tela de login" />
            </div>
               

        </S.Container>
    )
}