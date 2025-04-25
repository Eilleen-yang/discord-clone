import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ServerRoomList from "../_components/Channel";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "server",
        element: <ServerRoomList />,
      },
    ],
  },
]);
export default router;
