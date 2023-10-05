import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home";
import Faq from "../pages/Faq";

const RouterHandler = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,

      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "faq",
          element: <Faq />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default RouterHandler;
