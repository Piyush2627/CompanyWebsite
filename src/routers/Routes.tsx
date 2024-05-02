//router import
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../components/pages/HomePage";
//Layout imports
//import copmonent
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
]);
function Routes() {
  return <RouterProvider router={router} />;
}

export default Routes;
