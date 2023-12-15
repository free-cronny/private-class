import useAuthStore from "../../utils/store";
import * as S from './styles'

const Sidebar = () => {
    const {  isAuthenticated, email, setAuthenticated } = useAuthStore()

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
            <S.SidebarHeader>Dashboard</S.SidebarHeader>
            <S.SidebarMenu>
            <S.SidebarMenuItem>
                <a href="/dashboard">Dashboard</a>
            </S.SidebarMenuItem>
            <S.SidebarMenuItem>
                <a href="/alunos">Alunos</a>
            </S.SidebarMenuItem>
            {/* Adicione mais itens conforme necessário */}
            </S.SidebarMenu>
            <button onClick={handleLogout}>Deslogar</button>
        </S.SidebarWrapper>
      </div>
    );
  };
  
  export default Sidebar;