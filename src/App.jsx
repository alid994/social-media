import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Dashboard from './pages/dashboard/Dashboard';
import Login from './pages/login/login';
import Register from './pages/register/Register';

function App() {

  const Layout = () => {
    return (
      <div>

      </div>
    )
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Dashboard />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;

