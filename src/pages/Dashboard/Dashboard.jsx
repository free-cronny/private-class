import Swal from 'sweetalert2';
import useAuthStore from '../../utils/store';
import { getAuth, signOut } from 'firebase/auth';

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
      <h1>Olá mundo</h1>
      <h2>{email}</h2>
      <h3>{isAuthenticated.email} : {isAuthenticated.isVerified ? 'Usuario Verificado' : 'Não verificado'}</h3>
      <button onClick={handleLogout}>Deslogar</button>
      {/* Restante do seu código */}
    </div>
  );
};
