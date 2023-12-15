import Swal from 'sweetalert2';
import useAuthStore from '../../utils/store';
import { getAuth, signOut } from 'firebase/auth';
import * as S from './styles'
import Sidebar from '../../components/Sidebar/Sidebar';

export const Dashboard = () => {
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
        <Sidebar/>
    </div>
  );
};
