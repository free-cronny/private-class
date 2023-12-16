import { getAuth, signOut } from "firebase/auth";

import logout from '../../assets/images/logout.svg'
import useAuthStore from "../../utils/store";
import * as S from './styles'
import Swal from "sweetalert2";

const Sidebar = () => {
    const { setAuthenticated } = useAuthStore()

    const handleLogout = () => {
    
        setAuthenticated(false);
        const auth = getAuth();
        signOut(auth).then(() => {
          Swal.fire({
            icon: "success",
            title: "Usuário deslogado com sucesso!",
            showConfirmButton: false,
            timer: 1500
          });
        }).catch((error) => {
          console.log(error);
        });
        window.location.href="/"
      };
  
    return (
      <div>
         <S.SidebarWrapper>
            <S.SidebarHeader>
              Dashboard
              </S.SidebarHeader>
            <S.SidebarMenu>
            <S.SidebarMenuItem>
                <a href="/dashboard">Dashboard</a>
            </S.SidebarMenuItem>
            <S.SidebarMenuItem>
                <a href="/alunos">Alunos</a>
            </S.SidebarMenuItem>
              <S.SidebarMenuItem>
                <S.LogoutButton onClick={handleLogout}>
                  <p>Sair</p>
                  <img src={logout} alt="Botão de Logout"/>
                </S.LogoutButton>
              </S.SidebarMenuItem>
            </S.SidebarMenu>
        </S.SidebarWrapper>
      </div>
    );
  };
  
  export default Sidebar;