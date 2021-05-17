import { pageOneData } from "../mockData/Page1";

const initialState = {
  pageData: [],
  genre: pageOneData.page.title,
};
const ottReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_SWIMLANE_DATA":
      return {
        ...state,
        pageData: [...state.pageData, ...action.payload],
      };
      //for updating the filtered data
      case "FILTER_SWIMLANE_DATA":
        return {
          ...state,
          pageData: [...action.payload],
        };
    default:
      return state;
  }
};
export default ottReducer;
