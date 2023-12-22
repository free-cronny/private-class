/* eslint-disable no-unused-vars */
// Importações omitidas para brevidade
import * as S from './styles';
import * as G from '../../styles/styles';

import Button from '../../components/Button/Button';
import Sidebar from "../../components/Sidebar/Sidebar";
import Avatar1 from '../../assets/images/pessoaAvatar.jpg';
import Avatar2 from '../../assets/images/pessoaAvatar02.jpg';
import Avatar3 from '../../assets/images/pessoaAvatar03.jpg';

import { FiMenu } from 'react-icons/fi'

import { PiNewspaperClippingFill } from "react-icons/pi";

import { useState, useEffect } from 'react';
import useAuthStore from "../../utils/store";
import { getDatabase, onValue, ref } from 'firebase/database';
import { useMediaQuery } from '@mui/material';

export const Home = () => {

  const [userEmails, setUserEmails] = useState([]);
    const { isAuthenticated } = useAuthStore();
    const isOnDesktop = useMediaQuery('(min-width:600px)');
    const [sidebarOpen, setSidebarOpen] = useState(true);

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

useEffect(() => {
  if (isOnDesktop === false) {
      setSidebarOpen(false);
  }
}, [isOnDesktop]);

console.log(isAuthenticated)

if (!isAuthenticated) {
    return <p>Você deve estar logado para visualizar essa página</p>;
}
  return (
    <G.Container style={{ display: 'flex' }}>
      {sidebarOpen && <Sidebar />}

      {isOnDesktop === false && (
                <div onClick={() => setSidebarOpen(!sidebarOpen)} style={{ height: 30 }}>
                    <FiMenu style={{ width: 30, height: 30 }} />
                </div>
            )}
      <S.ContainerHome style={{ display: 'flex', justifyContent: 'center', width: '100%', height: '100%' }}>
        {/* Card 1 - Home */}
        <S.WelcomeCard>
          <S.WelcomeTitle><PiNewspaperClippingFill style={{ marginRight: 10 }} />Home</S.WelcomeTitle>
          <S.PhotosAvatar>
            <img src={Avatar1} alt="" />
            <img src={Avatar2} alt="" />
            <img src={Avatar3} alt="" />
          </S.PhotosAvatar>
          <S.WelcomeMessage>
            <p>Aproveite para conhecer um pouco mais e interagir com outros usuários em nossa plataforma?</p>
            <Button Text="Conheça" BackgroundColor="transparent" Border="1px solid #fff" />
          </S.WelcomeMessage>
        </S.WelcomeCard>

        {/* Card 2 - Conversas */}
        <S.WelcomeCard>
          <S.WelcomeTitle><PiNewspaperClippingFill style={{ marginRight: 10 }} />Conversas</S.WelcomeTitle>
          <S.PhotosAvatar>
            <img src={Avatar1} alt="" />
            <img src={Avatar2} alt="" />
            <img src={Avatar3} alt="" />
          </S.PhotosAvatar>
          <S.WelcomeMessage>
            <p>Você possui um total de 0 conversas</p>
            <Button Text="Interagir" BackgroundColor="transparent" Border="1px solid #fff" />
          </S.WelcomeMessage>
        </S.WelcomeCard>

        {/* Card 3 - Bem-vindo à KYOPS! */}
        <S.WelcomeCard>
          <S.WelcomeTitle><PiNewspaperClippingFill style={{ marginRight: 10 }} />Sair!</S.WelcomeTitle>
          <S.PhotosAvatar>
            <img src={Avatar1} alt="" />
            <img src={Avatar2} alt="" />
            <img src={Avatar3} alt="" />
          </S.PhotosAvatar>
          <S.WelcomeMessage>
            <p>Deixar a plataforma</p>
            <Button Text="Conheça" BackgroundColor="transparent" Border="1px solid #fff" />
          </S.WelcomeMessage>
        </S.WelcomeCard>

        <S.WelcomeCard>
          <S.WelcomeTitle><PiNewspaperClippingFill style={{ marginRight: 10 }} />Acesse seu perfil</S.WelcomeTitle>
          <img src={Avatar1} alt="" />
          <S.ModernMessage>Clique aqui para acessar seu perfil</S.ModernMessage>
          <Button Text="Acessar" BackgroundColor="transparent" Border="1px solid #fff" />
        </S.WelcomeCard>


      </S.ContainerHome>
    </G.Container>
  );
};
