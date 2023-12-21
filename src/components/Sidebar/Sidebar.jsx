import { useState, useEffect } from "react"; // Importe o useState
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import {
  FiHome,
  FiUsers,
  FiLogOut,
} from "react-icons/fi"; // Importe os ícones necessários
import { BsChatDotsFill } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import useAuthStore from "../../utils/store";
import * as S from "./styles";
import Swal from "sweetalert2";


import { getDatabase, ref, get } from "firebase/database";

const Sidebar = () => {
  const { user, setAuthenticated } = useAuthStore();

  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setAuthenticated(Boolean(user));
    });

    return () => unsubscribe();
  }, [auth, setAuthenticated]);

  useEffect(() => {
    const uidDoUsuario = user.uid;
    fetchUserData(uidDoUsuario);
  }, [])

  const handleLogout = () => {
    setAuthenticated(false);
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Usuário deslogado com sucesso!",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log(error);
      });
    window.location.href = "/";
  };

  const getCurrentRoute = () => {
    // Obtém a URL atual
    const currentURL = window.location.href;
  
    // Divide a URL pela barra "/"
    const urlParts = currentURL.split('3');
  
    // Remove as partes vazias resultantes da divisão
    const cleanURLParts = urlParts.filter(part => part.trim() !== '');
  
    // Pega a última parte da URL, que deve ser a rota após a última barra "/"
    const currentRoute = cleanURLParts[cleanURLParts.length - 1];
  
    return currentRoute;
  };

  const [activeRoute, setActiveRoute] = useState(getCurrentRoute()); // Estado para controlar a rota ativa
  const [userLoggedInfo, setUserLoggedInfo] = useState(null)
  
  useEffect(() => {
    const handleRouteChange = () => {
      // Atualiza o estado com a rota atual
      setActiveRoute(getCurrentRoute());
    };

    // Adiciona um ouvinte de evento para detectar mudanças na URL
    window.addEventListener('popstate', handleRouteChange);

    // Remove o ouvinte de evento quando o componente é desmontado
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []); 

  const routes = [
    {
      id: 0,
      name: "Home",
      route: "/Home",
      icon: <FiHome />,
    },
    {
      id: 1,
      name: "Usuarios",
      route: "/usuarios",
      icon: <FiUsers />,
    },
    {
      id: 2,
      name: "Mensagens",
      route: "/mensagens",
      icon: <BsChatDotsFill />,
    },
    {
      id: 3,
      name: "Fale Conosco",
      route: "/contato",
      icon: <MdOutlineEmail />,
    },
    {
      id: 4,
      name: "Sair",
      route: "/",
      icon: <FiLogOut />,
      onClick: handleLogout,
    },
    // Adicione mais rotas conforme necessário
  ];

  const fetchUserData = async (uid) => {
    const db = getDatabase();
    const userRef = ref(db, `users/${uid}`);
  
    try {
      const snapshot = await get(userRef);
  
      if (snapshot.exists()) {
        const userData = snapshot.val();
        setUserLoggedInfo(userData)
        console.log("Informações do usuário:", userData);
        return userData;
      } else {
        console.log("Usuário não encontrado");
        return null;
      }
    } catch (error) {
      console.error("Erro ao buscar informações do usuário:", error);
      // Trate o erro conforme necessário
      return null;
    }
  };


  

  return (
    <div>
      <S.SidebarWrapper>
        <S.SidebarHeader>
         <p>Kyops</p> 
         <span style={{marginTop: 15}}>Bem vindo(a): {user && userLoggedInfo ? userLoggedInfo.name : 'Usuário'}</span>
        </S.SidebarHeader>
        <S.SidebarMenu>
          {routes.map((route) => (
            <S.SidebarMenuItem
              key={route.id}
              className={route.route === activeRoute ? "active" : ""}
            >
              <a
                href={route.route}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveRoute(route.route);
                  route.onClick && route.onClick();
                }}
                style={{ borderBottom: route.route === activeRoute ? "3px solid #fff" : "none" }}
              >
                {route.icon} {route.name}
              </a>
            </S.SidebarMenuItem>
          ))}
        </S.SidebarMenu>
      </S.SidebarWrapper>
    </div>
  );
};

export default Sidebar;
