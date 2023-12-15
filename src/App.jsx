import { LoginPage } from "./pages/Login/LoginPage"
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import useAuthStore from "./utils/store";
function App() {
  
  const { isAuthenticated } = useAuthStore(); // retorna informações se existir como TRUE
  
  return (
    <BrowserRouter>      
      <Routes>
          <Route path="/" element={<LoginPage/>}/>
          <Route path="/dashboard" element={isAuthenticated ? <Dashboard/> : <LoginPage/>}/> 
          {/*Se existem informações de usuario => dashboard : loginpage */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
