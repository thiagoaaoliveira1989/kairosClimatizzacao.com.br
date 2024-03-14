import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import "../src/styles/index.scss";
import { UserProvider } from "./providers/UserContext.tsx";
import "react-toastify/dist/ReactToastify.css";
import { ContactFormProvider } from "./providers/ContactFormContext.tsx";
import { IndividualClientProvider } from "./providers/IndividualClientContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ContactFormProvider>
          <IndividualClientProvider>
            <App />
          </IndividualClientProvider>
        </ContactFormProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
