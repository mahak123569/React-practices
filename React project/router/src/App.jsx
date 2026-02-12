import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Dashboard from './Components/Dashboard';
import Navbar from './Components/Navbar';
import Paramcomp from './Components/Paramcomp';
import Courses from './Components/Courses';
import Mocktest from './Components/Mocktest';
import Reports from './Components/Reports';
import Notfound from './Components/Notfound';

const router = createBrowserRouter([
  {
    path: '/',
    element:
      <div>
        <Navbar />
        <Home />
      </div>
   
  },
  {
    path: '/about',
    element:
      <div>
        <Navbar />
        <About />
      </div>
   
  },
  {
    path: '/dashboard',
    element: 
      <div>
        <Navbar />
        <Dashboard />
      </div>
   ,
    children: [
      {
        path: 'courses',
        element: <Courses />,
      },
      {
        path: 'mock-tests',
        element: <Mocktest />,
      },
      {
        path: 'reports',
        element: <Reports />,
      },
    ],
  },
  {
    path:"/student/:id",
    element: 
      <div>
        <Navbar />
        <Paramcomp />
      </div>
    ,
  },
  {
    path:'*',
    element:<Notfound />
  }
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
