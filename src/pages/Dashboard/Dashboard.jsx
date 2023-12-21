import * as S from "./styles";
import Sidebar from "../../components/Sidebar/Sidebar";
import useAuthStore from "../../utils/store";
import { Card } from "../../components/Card/Card";
import { useEffect, useState } from "react";

import { FiMenu } from 'react-icons/fi'

import { useMediaQuery } from "@mui/material"; // Importação do MediaQuery, biblioteca

export const Dashboard = () => {
  const isOnDesktop = useMediaQuery('(min-width:600px)') // Armazena em uma variavel o tamanho minimo é retornado um: Boolean
  
  useEffect(() => {
    if(isOnDesktop == false) {
      setSidebarOpen(false)
    }
  }, [isOnDesktop]) // Função que ela executa quando a tela é montada ou quando o item passado no array é atualizado

  const { isAuthenticated } = useAuthStore(); // Estado do isAuthenticated(dados do usuário logado)
  

  const [sidebarOpen, setSidebarOpen] = useState(true) //estado da sidebar



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
    },{
      nome: "Igor",
      description: "Professor",
    }
  ];

  return (
    <S.Container style={{ display: "flex", height: '80vh' }}>
      {sidebarOpen && <Sidebar /> /* Exibe o componente de sidebar se for True*/}

      {isOnDesktop == false && (
        <div onClick={() => setSidebarOpen(!sidebarOpen)} style={{height: 30}}>
          <FiMenu style={{ width: 30, height: 30 }} />
        </div>
      )}

      <div>
        <S.ContainerCards>
          
          {pessoas.map((pessoa, index) => {
            return (
              <Card
                key={index}
                studentName={pessoa.nome}
                description={pessoa.description}
              />
            );
          })}
        </S.ContainerCards>
      </div>
    </S.Container>
  );
};
