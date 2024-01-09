
import './App.css';
import CartPage from './Pages/CartPage';
import Checkout from './Pages/Checkout';
import LoginPage from './Pages/LoginPage';
import SignupPage from './Pages/SignupPage';
import Navbar from './features/navbar/Navbar';



import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Product from './features/product/components/Product';
import ProductDetailsPage from './Pages/ProductDetailsPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: (<Link to="/"><Navbar/><Product/></Link>)
  },
  {
    path: "signup",
    element: (<Link to="/signup"><Navbar/><SignupPage/></Link>),
  },
  {
    path: "login",
    element: (<Link to="/login"><Navbar/><LoginPage/></Link>),
  },
  {
    path: "cart",
    element: (<Link to="/cart"><Navbar/><CartPage/></Link>),
  },
  {
    path: "checkout",
    element: (<Link to="/checkout"><Navbar/><Checkout/></Link>),
  },
  {
    path: "productDetails",
    element: (<Link to="/productDetails"><Navbar/><ProductDetailsPage/></Link>),
  },
]);

function App() {
  return (
    <div>
      {/* <Navbar/> */}
     {/* <Product/> */}
     {/* <LoginPage/> */}
     {/* <SignupPage/> */}
     <RouterProvider router={router} />
    </div>
  );
}

export default App;
