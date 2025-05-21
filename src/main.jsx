import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router.jsx";
import { OverlayProvider } from "@toss/use-overlay";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <OverlayProvider>
      <RouterProvider router={router} />
    </OverlayProvider>
  </StrictMode>
);
