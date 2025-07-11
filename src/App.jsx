import { useContext, useEffect } from "react";

import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

// Pages
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import SingleProduct from "./pages/SingleProduct";
import Basket from "./pages/Basket";
import SingUp from "./pages/SingUp";
import Login from "./pages/Login";

// Layout
import MainLayout from "./layout/MainLayout";

// Context
import { GlobalContext } from "./context/GlobalContext";

// Components
import { ProtectedRouter } from "./components/ProtectedRouter";

function App() {
  const { user } = useContext(GlobalContext);
  const { theme } = useContext(GlobalContext);

  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRouter user={user}>
          <MainLayout />
        </ProtectedRouter>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/singleProduct/:id",
          element: <SingleProduct />,
        },
        {
          path: "/basket",
          element: <Basket />,
        },
      ],
    },
    {
      path: "/login",
      element: user ? <Navigate to="/" /> : <Login />,
    },
    {
      path: "/singup",
      element: user ? <Navigate to="/" /> : <SingUp />,
    },
  ]);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div data-theme={theme}>
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
