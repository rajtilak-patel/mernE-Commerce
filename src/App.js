
import './App.css';
import LoginPage from './Pages/LoginPage';
import SignupPage from './Pages/SignupPage';
import Navbar from './features/navbar/Navbar';
import Product from './features/product-list/Product';


import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (<Link to="/"><Navbar/><Product/></Link>)
  },
  {
    path: "signup",
    element: (<Link to="/signup"><SignupPage/></Link>),
  },
  {
    path: "login",
    element: (<Link to="/login"><LoginPage/></Link>),
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
