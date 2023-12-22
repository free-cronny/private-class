// Importações omitidas para brevidade
import * as S from './styles';
import * as G from '../../styles/styles';

import Button from '../../components/Button/Button';
import Sidebar from "../../components/Sidebar/Sidebar";
import Avatar1 from '../../assets/images/pessoaAvatar.jpg';
import Avatar2 from '../../assets/images/pessoaAvatar02.jpg';
import Avatar3 from '../../assets/images/pessoaAvatar03.jpg';

import { PiNewspaperClippingFill } from "react-icons/pi";

export const Home = () => {
  return (
    <G.Container style={{ display: 'flex' }}>
      <Sidebar />
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
          <S.WelcomeTitle><PiNewspaperClippingFill style={{ marginRight: 10 }} />Bem-vindo à KYOPS!</S.WelcomeTitle>
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

      </S.ContainerHome>
    </G.Container>
  );
};
