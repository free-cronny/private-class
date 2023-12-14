import { LoginPage } from "./pages/Login/LoginPage"
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { Route, Routes, BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>      
      <Routes>
          <Route path="/" element={<LoginPage/>}/>
          <Route path="/dashboard"  element={<Dashboard/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
