import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { captureTrackingParams } from "./utils/trackingParams";
import App from "./App.tsx";
import "./index.css";

// Captura parâmetros de rastreamento (UTMs, gclid etc.) ao carregar a aplicação.
captureTrackingParams();


createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);
