import { useEffect, useState } from "react";
import * as S from "./styles";
import Sidebar from "../../components/Sidebar/Sidebar";
import useAuthStore from "../../utils/store";
import { Card } from "../../components/Card/Card";
import { FiMenu } from 'react-icons/fi'
import { useMediaQuery } from "@mui/material";
import { getDatabase, ref, onValue } from "firebase/database";

export const Home = () => {
  const isOnDesktop = useMediaQuery('(min-width:600px)');
  const { isAuthenticated } = useAuthStore();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [userEmails, setUserEmails] = useState([]);

  useEffect(() => {
    if (isOnDesktop === false) {
      setSidebarOpen(false);
    }
  }, [isOnDesktop]);

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
    <S.Container style={{ display: "flex", height: '80vh' }}>
      {sidebarOpen && <Sidebar />}

      {isOnDesktop === false && (
        <div onClick={() => setSidebarOpen(!sidebarOpen)} style={{ height: 30 }}>
          <FiMenu style={{ width: 30, height: 30 }} />
        </div>
      )}

      <div>
        <S.ContainerCards>
          {userEmails.map((user, index) => (
            <Card
              key={index}
              studentName={user.name}
              description={user.isStudent == true ? "Aluno(a)" : "Professor(a)"}
              background={user.isStudent == true ? '#fff' : '#161688'}
              colorTexts={user.isStudent == true ? '#000' : '#fff'}
            />
          ))}
        </S.ContainerCards>
      </div>
    </S.Container>
  );
};
