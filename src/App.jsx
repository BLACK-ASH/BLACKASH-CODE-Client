// client/src/App.jsx
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Playground from './components/Playground';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Setting from './components/Setting';
import LearnToCode from './components/LearnToCode';
import Login from './components/Login';
import WebBuilder from './components/WebBuilder';
import CodingProblems from './components/CodingProblems';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar /><Home /><Footer /></>,
    },
    {
      path: "/playground",
      element:<><Navbar /><Playground /><Footer /></>,
    },{
      path: "/setting",
      element:<><Navbar /><Setting /><Footer /></>,
    },
    {
      path: "/login",
      element:<><Navbar /><Login /><Footer /></>,
    },
    {
      path: "/web-builder",
      element:<><Navbar /><WebBuilder /><Footer /></>,
    },
    {
      path: "/coding-problems",
      element:<><Navbar /><CodingProblems /><Footer /></>,
    },
    {
      path: "/learn-to-code",
      element:<><Navbar /><LearnToCode /><Footer /></>,
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
