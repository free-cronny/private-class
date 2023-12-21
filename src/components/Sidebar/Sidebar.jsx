import { getAuth, signOut } from "firebase/auth";
import { FiHome, FiUsers, FiUser, FiLogOut } from 'react-icons/fi'; // Importe os ícones necessários
import { BsChatDotsFill } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import useAuthStore from "../../utils/store";
import * as S from './styles'
import Swal from "sweetalert2";

const Sidebar = () => {
  const { setAuthenticated } = useAuthStore();

  const handleLogout = () => {
    setAuthenticated(false);
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Usuário deslogado com sucesso!",
          showConfirmButton: false,
          timer: 1500
        });
      })
      .catch((error) => {
        console.log(error);
      });
    window.location.href = "/";
  };

  const routes = [
    {
      id: 0,
      name: 'Dashboard',
      route: '/dashboard',
      icon: <FiHome />
    },
    {
      id: 1,
      name: 'Alunos',
      route: '/alunos',
      icon: <FiUsers />
    },
    {
      id: 2,
      name: 'Professores',
      route: '/professores',
      icon: <FiUser />
    },
    {
      id: 3,
      name: 'Mensagens',
      route: '/mensagens',
      icon: <BsChatDotsFill />
    },
    {
      id: 4,
      name: 'Fale Conosco',
      route: '/contato',
      icon: <MdOutlineEmail/>
    },
    {
      id: 5,
      name: 'Sair',
      route: '/',
      icon: <FiLogOut />,
      onClick: handleLogout
    }
    // Adicione mais rotas conforme necessário
  ];

  return (
    <div>
      <S.SidebarWrapper>
        <S.SidebarHeader>
          Kyops
        </S.SidebarHeader>
        <S.SidebarMenu>
          {routes.map((route) => (
            <S.SidebarMenuItem key={route.id}>
              <a href={route.route} onClick={route.onClick}>
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
