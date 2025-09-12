import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/globals.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "@/app/store.ts";

import { inject } from "@vercel/analytics";

if (import.meta.env.PROD) {
  inject();
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
