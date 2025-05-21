import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Channel from "../_components/Channel";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "channels/@me",
        element: <Channel />,
      },
      {
        path: "channels/:serverId",
        element: <Channel />,
      },
    ],
  },
]);
export default router;
