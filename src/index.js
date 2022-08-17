import React from 'react';
import ReactDOM from "react-dom/client";
import App from './App';
import {Provider as LanguageProvider} from './Context/Language'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </React.StrictMode>,
 
);
