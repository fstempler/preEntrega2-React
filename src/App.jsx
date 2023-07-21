import { useState } from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.css'
import Navbar from './components/navbar/Navbar';
import { Home } from './pages/Home';
import { Detail } from './pages/Detail';
import { Genre } from './pages/Genre';

const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='/' element={<Home />} />
    <Route path='/item/:id' element={<Detail />} />
    <Route path='/genre/:id' element={<div>genre</div>} />
    </>    
  )
);

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <Navbar/>
      <RouterProvider router={routes} />
      </div>      
    </>
  );
}


export default App
