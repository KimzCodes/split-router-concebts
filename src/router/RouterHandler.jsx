import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../layout/Root";

const RouterHandler = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,

      children: [{}],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default RouterHandler;
