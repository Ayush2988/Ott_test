import React from "react";
import "./App.css";
import { Suspense, lazy } from "react";

const Swimlane = React.lazy(() => import("./Components/index.js"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Swimlane />
      </Suspense>
    </div>
  );
}

export default App;
