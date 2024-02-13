import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.scss'
import Button from '@mui/material/Button';
import Root from './routes/Root';
import Register from './pages/Register';
import Login from './pages/Login';
import NotFound from './NotFound'
import Home from './pages/Home'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <NotFound />,
      children: [
        {
          path: "",
          element: <Login />
        },
        {
          path: "register",
          element: <Register />,
        },
        {
          path: "home",
          element: <Home />,
        },
        
      ],
    },
    ]);
  

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
