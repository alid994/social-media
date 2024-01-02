import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Navigate
} from 'react-router-dom'
import './App.css';
import Dashboard from './pages/dashboard/Dashboard';
import Login from './pages/login/login';
import Register from './pages/register/Register';
import NavBar from './components/navBar/NavBar'
import LeftBar from './components/leftBar/LeftBar'
import RightBar from './components/rightBar/RightBar'
import Profile from './pages/profile/Profile'

function App() {

  const currentUser = false;

  const Layout = () => {
    return (
      <div>
        <NavBar />
        <div className='d-flex'>
          <LeftBar />
          <Outlet />
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
        </ProtectedRoute>),
      children: [
        {
          path: '/',
          element: <Dashboard />
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

