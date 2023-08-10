import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.css'
import Navbar from './components/navbar/Navbar';
import Footer from "./components/footer/Footer";
import { Home } from './pages/Home';
import { Detail } from './pages/Detail';
import { Genre } from './pages/Genre';
import { Type } from './pages/Type';
import { Contact } from './pages/Contact';
import { Cart } from './pages/Cart';
import { CartProvider } from './state/Cart.context';
import { CartForm } from './pages/CartForm';


const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Navbar />}>
      <Route path='/' element={<Home /> }/>
      <Route path='/item/:id' element={<Detail />} />
      <Route path='/genre/:id' element={<Genre />} />
      <Route path='/type/:id' element={<Type />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/cartform' element={<CartForm />} />
    </Route>,    
    <Route element={<Footer />}>
      <Route path='/' element={<Home /> }/>
    </Route>
  )  
);

function App() {
  return (
    <>
      <div>     
      <CartProvider>
        <RouterProvider router={routes} />        
      </CartProvider>   
      
      </div>
      <Footer />
    </>
  );
}


export default App
