// client/src/App.jsx
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Playground from './components/Playground';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Setting from './components/Setting';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar /><Home /><Footer /></>,
    },
    {
      path: "/playground",
      element:<><Navbar /><Playground /></>,
    },{
      path: "/setting",
      element:<><Navbar /><Setting /><Footer /></>,
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
