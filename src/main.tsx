import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "@/App";

// Self-hosted variable fonts (weight axis only) — no third-party CDN.
import "@fontsource-variable/nunito/wght.css";
import "@fontsource-variable/inter/wght.css";
import "@fontsource-variable/jetbrains-mono/wght.css";
import "@/styles/index.css";

const rootEl = document.getElementById("root");
if (!rootEl) throw new Error("Root element #root not found");

createRoot(rootEl).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
