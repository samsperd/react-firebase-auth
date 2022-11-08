import './App.css';
import { Routes, Route } from "react-router-dom"
import Signin from './components/Signin';
import Signup from './components/Signup'
import Account from './components/Account';
import { AuthContextProvider } from './context/AuthContext';
import ProtectedRoutes from './components/ProtectedRoutes';

function App() {
  return (
    <AuthContextProvider>
      <div>
          <h1 className="text-3xl font-bold text-center">
            Firebase Auth & Context
          </h1>
          <Routes>
            <Route path='/' element={<Signin />}></Route>
            <Route path='/signup' element={<Signup />}></Route>
            <Route path='/account' element={<ProtectedRoutes><Account /></ProtectedRoutes>}></Route>
          </Routes>
      </div>
    </AuthContextProvider>
  );
}

export default App;
