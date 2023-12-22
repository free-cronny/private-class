// Importações omitidas para brevidade
import * as S from './styles'
import * as G from '../../styles/styles'
import Sidebar from "../../components/Sidebar/Sidebar";

export const Home = () => {
  return (
    <G.Container style={{ display: 'flex' }}>
      <Sidebar />
      <S.WelcomeCard>
        <S.WelcomeTitle>Bem-vindo à sua aplicação!</S.WelcomeTitle>
        <S.WelcomeMessage>
          Aproveite todas as funcionalidades incríveis que oferecemos.
        </S.WelcomeMessage>
        {/* Adicione mais conteúdo ou ações de boas-vindas conforme necessário */}
      </S.WelcomeCard>
    </G.Container>
  );
};
