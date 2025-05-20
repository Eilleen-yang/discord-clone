import "./App.css";
import "./reset.css";
import Layout from "./Layout/Layout";
import { OverlayProvider } from "@toss/use-overlay";

function App() {
  return (
    <OverlayProvider>
      <Layout />
    </OverlayProvider>
  );
}

export default App;
