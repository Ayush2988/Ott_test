import { render, screen } from "@testing-library/react";
import Swimlane from "../src/Components/index";
import store from "../src/store";
import { Provider } from "react-redux";
import rootReducer from "./rootReducer";
import { mount } from "enzyme";

test("renders Swimlane component", (initialState = {}) => {
  const wrapper = mount(<Swimlane />);
  const linkElement = wrapper.getByText("Romantic Comedy");
  expect(linkElement).toBeInTheDocument();
});
