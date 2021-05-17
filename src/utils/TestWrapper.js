import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import React from "react";
import configureStore from "../store";

export default function TestWrapper(ui, initialState = {}) {
  return render(<Provider store={configureStore(initialState)}>{ui}</Provider>);
}
