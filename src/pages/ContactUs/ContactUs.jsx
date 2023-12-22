/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from 'react';
import * as S from './styles';
import Sidebar from '../../components/Sidebar/Sidebar';
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import { useMediaQuery } from "@mui/material";
import { FiMenu } from 'react-icons/fi'
import useAuthStore from "../../utils/store";
import { getDatabase, ref, onValue } from "firebase/database";
import { TextArea } from '../../styles/styles';



const ContactUs = () => {

    const [userEmails, setUserEmails] = useState([]);
    const { isAuthenticated } = useAuthStore();
    const isOnDesktop = useMediaQuery('(min-width:600px)');
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [message, setMessage] = useState('');

    const handleChange = (event) => {
        setMessage(event.target.value)
    }

    useEffect(() => {
        if (isOnDesktop === false) {
            setSidebarOpen(false);
        }
    }, [isOnDesktop]);

    const sendMessage = () => {

        const phoneNumber = '13991585506'

        const encodedMessage = encodeURIComponent(message);

        const whatsappLink = `https://wa.me/${phoneNumber}/?text=${encodedMessage}`;

        window.location.href = whatsappLink;
    }

    useEffect(() => {
        if (isAuthenticated) {
            const usersRef = ref(getDatabase(), 'users');
            onValue(usersRef, (snapshot) => {
                try {
                    if (snapshot.exists()) {
                        const usersData = snapshot.val();
                        // Verifique se há dados e mapeie os emails
                        const emails = Object.values(usersData).map((user) => user);
                        setUserEmails(emails);
                    } else {
                        // Caso não haja dados
                        setUserEmails([]);
                    }
                } catch (error) {
                    console.error("Erro ao processar dados do Realtime Database:", error);
                    // Trate o erro conforme necessário
                }
            }, (error) => {
                console.error("Erro ao buscar dados do Realtime Database:", error);
                // Trate o erro conforme necessário
            });
        }
    }, [isAuthenticated]);

    console.log(isAuthenticated)

    if (!isAuthenticated) {
        return <p>Você deve estar logado para visualizar essa página</p>;
    }

    return (



        <S.Container>
            {sidebarOpen && <Sidebar />}

            {isOnDesktop === false && (
                <div onClick={() => setSidebarOpen(!sidebarOpen)} style={{ height: 30 }}>
                    <FiMenu style={{ width: 30, height: 30 }} />
                </div>
            )}
            <S.ContainerWaMessage>
                <S.ContainerDif>
                    <h1>Contate-nos</h1>
                <S.InputsContainer>
                    <S.InputsWa>
                        <label>Nome:</label>
                        <Input
                            type='name'
                            placeholder='Digite seu nome'
                        />
                    </S.InputsWa>
                    <S.InputsWa>
                        <label>Email:</label>
                        <Input
                            type='email'
                            placeholder='Digite seu email'
                        />
                    </S.InputsWa>
                </S.InputsContainer>
                <S.InputMessage>
                    <label  htmlFor="message">Mensagem:</label>
                    <TextArea
                        type="textarea"
                        id="message"
                        value={message}
                        onChange={handleChange}
                        Transition='height: 0.3s'
                        height='12.25rem'
                        placeholder='Digite sua mensagem aqui'
                    />
                </S.InputMessage>
                <Button onClick={sendMessage} Text='Enviar'></Button>
                </S.ContainerDif>
            </S.ContainerWaMessage>
        </S.Container>


    )

}

export default ContactUs;