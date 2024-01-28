
import './App.css';
import CartPage from './Pages/CartPage';
import Checkout from './Pages/Checkout';
import LoginPage from './Pages/LoginPage';
import SignupPage from './Pages/SignupPage';
import Navbar from './features/navbar/Navbar';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Product from './features/product/components/Product';
import ProductDetailsPage from './Pages/ProductDetailsPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: (<div><Navbar/><Product/></div>)
  },
  {
    path: "signup",
    element: (<div><Navbar/><SignupPage/></div>),
  },
  {
    path: "login",
    element: (<div><Navbar/><LoginPage/></div>),
  },
  {
    path: "cart",
    element: (<div><Navbar/><CartPage/></div>),
  },
  {
    path: "checkout",
    element: (<div><Navbar/><Checkout/></div>),
  },
  {
    path: "productDetails",
    element: (<div><Navbar/><ProductDetailsPage/></div>),
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
