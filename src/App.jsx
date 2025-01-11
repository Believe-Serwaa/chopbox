import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Homepage from "./pages/HomePage";
import LoginForm from "./pages/LoginForm";
import SignupForm from "./pages/SignupForm";
import ProductsPage from "./pages/ProductsPage";
import HeroSection from "./components/HeroSection";

function App() {
  const router = createBrowserRouter([

    {
      path: "/",
      element: <Homepage/>,
    },

    {
      path: "/products",
      element: <ProductsPage/>,
    },

    {
      path: "/hero",
      element: <HeroSection/>,
    },
    
    {
      path: "/about",
      element: <AboutUs/>,
    },

    {
      path: "/contact",
      element: <ContactUs/>,
    },

    {
      path: "/login",
      element: <LoginForm/>,
    },

    {
      path: "/signup",
      element: <SignupForm/>,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
