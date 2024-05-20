import React from "react";
import ReactDOM from "react-dom/client"
import App from "./App";

ReactDOM.createRoot(document.getElementById("root"))
    .render(
        // Development tarafında çalışılacak olan ve componentlerin yeni sürümlerini haberdar eden yapı
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );