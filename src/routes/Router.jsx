import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../layout/Main";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,

      children: [{}],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
