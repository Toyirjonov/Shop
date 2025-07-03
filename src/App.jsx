import { createBrowserRouter, RouterProvider } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

import MainLayout from "./layout/MainLayout";
import SingleProduct from "./pages/SingleProduct";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
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
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
