import * as S from "./styles";
import Sidebar from "../../components/Sidebar/Sidebar";
import useAuthStore from "../../utils/store";
import { Card } from "../../components/Card/Card";

export const Dashboard = () => {
  const { isAuthenticated } = useAuthStore();

  console.log(isAuthenticated);

  if (!isAuthenticated) {
    return <p>Você deve estar logado para visualizar essa página</p>;
  }

  const pessoas = [
    {
      nome: "Cawan Henrique",
      description: "Aluno",
    },
    {
      nome: "Igor",
      description: "Professor",
    },{
      nome: "Igor",
      description: "Professor",
    },{
      nome: "Igor",
      description: "Professor",
    },{
      nome: "Igor",
      description: "Professor",
    },{
      nome: "Igor",
      description: "Professor",
    },{
      nome: "Igor",
      description: "Professor",
    },{
      nome: "Igor",
      description: "Professor",
    },{
      nome: "Igor",
      description: "Professor",
    },{
      nome: "Igor",
      description: "Professor",
    },{
      nome: "Igor",
      description: "Professor",
    },{
      nome: "Igor",
      description: "Professor",
    },{
      nome: "Igor",
      description: "Professor",
    },{
      nome: "Igor",
      description: "Professor",
    },{
      nome: "Igor",
      description: "Professor",
    },{
      nome: "Igor",
      description: "Professor",
    },{
      nome: "Igor",
      description: "Professor",
    },{
      nome: "Igor",
      description: "Professor",
    },{
      nome: "Igor",
      description: "Professor",
    },{
      nome: "Igor",
      description: "Professor",
    },{
      nome: "Igor",
      description: "Professor",
    },{
      nome: "Igor",
      description: "Professor",
    },
  ];
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div>
        <S.DevelopmentCard>
          <S.CardText>Tela em Desenvolvimento</S.CardText>
        </S.DevelopmentCard>
        <S.ContainerCards>
          {pessoas.map((pessoa) => {
            return (
              <Card
                key={pessoa.nome}
                studentName={pessoa.nome}
                description={pessoa.description}
              />
            );
          })}
        </S.ContainerCards>
      </div>
    </div>
  );
};
