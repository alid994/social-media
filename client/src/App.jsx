import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Navigate
} from 'react-router-dom'
import './App.css';
import './style.scss'
import Home from './pages/home/Home';
import Login from './pages/login/login';
import Register from './pages/register/Register';
import NavBar from './components/navBar/NavBar'
import LeftBar from './components/leftBar/LeftBar'
import RightBar from './components/rightBar/RightBar'
import Profile from './pages/profile/Profile'
import Footter from './components/footer/footter';
import { useContext } from 'react';
import { AuthContext } from './context/authContext';
import { DarkModeContext } from './context/darkModeContext';

function App() {

  const { currentUser } = useContext(AuthContext);

  const { darkMode } = useContext(DarkModeContext);

  const Layout = () => {
    return (
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <NavBar />
        <div className='d-flex'>
          <LeftBar />
          <div style={{ flex: 6 }}>
            <Outlet />
          </div>
          <RightBar />
        </div>
      </div>
    )
  }

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to='/login' />
    }

    return children
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <ProtectedRoute>
          <Layout />
          <Footter />
        </ProtectedRoute>),
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/profile/:id',
          element: <Profile />
        }
      ]
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/register',
      element: <Register />
    }
  ])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

