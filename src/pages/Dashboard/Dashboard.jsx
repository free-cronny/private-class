import * as S from './styles'
import Sidebar from '../../components/Sidebar/Sidebar';
import useAuthStore from '../../utils/store'

export const Dashboard = () => {

  const { isAuthenticated } = useAuthStore();

  if(!isAuthenticated){
    return <p>Você deve estar logado para visualizar essa página</p>;
  }
  return (
      <div style={{display: 'flex'}}>
        <Sidebar/>
        <div>
        <S.DevelopmentCard>
            <S.CardText>Tela em Desenvolvimento</S.CardText>
        </S.DevelopmentCard>
        </div>
      </div>
  );
};
