import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Contact  from './pages/Contact';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import VerifyEmail from './pages/VerifyEmail';
import MyNavbar from './components/Navbar';
import { Routes, Route } from "react-router-dom";
import ErrorBoundary from './ErrorBoundary';
import ForgotPassword from './pages/ForgotPassword';
import UpdatePassword from './pages/UpdatePassword';

function App() {
  {/*This is the top-level component that wraps all the routes. It's used to define the routing configuration for the application. */}
  return (
   
    
       <div>
     <ErrorBoundary>
        <MyNavbar />
      </ErrorBoundary>

     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout  />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/verify-email" element={<VerifyEmail />} />
          <Route path="forgot-password"element={<ForgotPassword />}/> 
          <Route path="update-password/:id" element={<UpdatePassword />}/>  
        </Routes>
      
      </div>
    
   
  );
}

export default App

/*In the App component, the ErrorBoundary component is used to wrap several components, including the MyNavbar component and the Routes component. This means that if any of these components (or their children) throw an error, the ErrorBoundary component will catch the error and display the fallback UI instead of crashing the entire application. */
