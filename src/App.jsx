import { LoginPage } from "./pages/Login/LoginPage"
import { Home } from "./pages/Home/Home"
import {NotFound} from "./pages/NotFound/NotFound"
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import {ContactUs} from "./pages/ContactUs/ContactUs"
import useAuthStore from "./utils/store";
function App() {
  
  const { isAuthenticated } = useAuthStore(); // retorna informações se existir como TRUE
  
  return (
    <BrowserRouter>      
      <Routes>
          <Route path="/" element={<LoginPage/>}/>
          <Route path="/contactus" element={isAuthenticated ?<ContactUs/> : <LoginPage/>}/>
          <Route path="/home" element={isAuthenticated ? <Home/> : <LoginPage/>}/>
          {/*Se existem informações de usuario => home : loginpage */}
          <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
