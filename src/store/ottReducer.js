import { pageOneData } from "../mockData/Page1";

const initialState = {
  pageData: [...pageOneData.page.contentItems.content],
  genre: pageOneData.page.title,
};
const ottReducer = (state = initialState, action) => {
  console.log("action",action.payload)
  switch (action.type) {
    case "UPDATE_SWIMLANE_DATA":
      return {
        ...state,
        pageData: [...state.pageData, ...action.payload],
      };

    default:
      return state;
  }
};
export default ottReducer;
