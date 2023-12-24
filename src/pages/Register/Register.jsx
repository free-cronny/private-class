import * as S from "./styles";

import {
    getAuth,
    createUserWithEmailAndPassword,
} from "firebase/auth";

import { useState } from "react";

import { firebaseApp } from "../../utils/firebase"; // Importação do Firebase

import { getDatabase, ref, set } from "firebase/database";

import ButtonComponent from "../../components/Button/Button";
import InputComponent from "../../components/Input/Input";
import SelectComponent from '../../components/Select/Select'
import Loading from "../../components/Loading/loading";
import useAuthStore from "../../utils/store";
import Swal from "sweetalert2";
import { Navigate } from 'react-router-dom';


export const Register = () => {

    const [nickname, setNickname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [selectedTypeUser, setSelectedTypeUser] = useState(true);

    const [loading, setLoading] = useState(false)
    const { isAuthenticated, setAuthenticated } = useAuthStore();

    const options = [
        { value: true, label: 'Estudante' },
        { value: false, label: 'Professor' },
    ];

    const auth = getAuth();

    const createUsers = async () => {
        try {
            setLoading(true);
            const userVerified = await createUserWithEmailAndPassword(auth, email, password);
            Swal.fire({
                icon: "success",
                title: "Usuário cadastrado com sucesso!",
                showConfirmButton: false,
                timer: 1500
            });
            // Adiciona informações adicionais no Realtime Database
            const db = getDatabase();
            const userRef = ref(db, `users/${userVerified.user.uid}`);
            set(userRef, {
                id: 0,
                email: userVerified.user.email,
                name: nickname,
                isStudent: selectedTypeUser,
                messages: []
            });
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


    if (isAuthenticated) {
        return <Navigate to="/home" />;
    }


    return (
        <S.Container>
            <S.ContainerLeft>

                <S.ContainerLogin>
                    <h1>Cadastre-se</h1>
                    <InputComponent
                        onChange={(event) => {
                            setEmail(event.target.value);
                        }}
                        type="Email"
                        placeholder="Digite seu Email"
                    />
                    <InputComponent
                        onChange={(event) => setNickname(event.target.value)} // Adicione isso
                        type="text" // Use o tipo "text" para o campo de nickname
                        placeholder="Digite seu nome de Usuário"
                    />
                    <InputComponent
                        onChange={(event) => {
                            setPassword(event.target.value)
                        }}
                        type="Password"
                        placeholder="Digite sua Senha"
                    />

                    <SelectComponent
                        onChange={(e) => setSelectedTypeUser(e.target.value)}
                        type="select"
                        placeholder="Selecione uma opção"
                        value={selectedTypeUser}
                        options={options}
                    />
                    
                    <S.ButtonsLog>
                        <ButtonComponent
                            Text={loading ? (<Loading />) : "Cadastrar-se"}
                            PaddingButton="0.55rem 1.55rem"
                            BackgroundColor="#706E64"
                            MarginButton="15px 0 0 0"
                            BackgroundHover="#D7B231"
                            onClick={createUsers}

                        />
                    </S.ButtonsLog>
                    <a href="/">Já possui uma conta? Clique aqui.</a>
                </S.ContainerLogin>
            </S.ContainerLeft>
        </S.Container>

    )

}

export default Register;