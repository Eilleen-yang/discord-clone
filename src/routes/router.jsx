import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MainContents from "../pages/MainContents";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "channels/@me",
        element: <MainContents />,
      },
      {
        path: "channels/:serverId",
        element: <MainContents />,
      },
    ],
  },
]);
export default router;
