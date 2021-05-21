import React from "react";
import "./App.css";
import { Suspense } from "react";
import {Loader} from "../src/Components/styles/index.styles"

const Swimlane = React.lazy(() => import("./Components/index.js"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loader>Loading...</Loader>}>
        <Swimlane />
      </Suspense>
    </div>
  );
}

export default App;
