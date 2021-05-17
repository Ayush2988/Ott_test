import nav_bar from "../images/nav_bar.png";
import {
  GenereText,
  NavBarImage,
  NavBarContainer,
  SearchField,
  SearchImage,
} from "./styles/index.styles";
import { connect } from "react-redux";
import search from "../images/search.png";

function Navbar(props) {
  const filterSwimlaneContent = (e) => {
    let filteredData = [];

    //filter the data if anything is entered in the search box
    if (e.target.value.length > 0) {
      filteredData = props.fullPageData.filter((eachObj) => {
        if (
          eachObj.name.toLowerCase().indexOf(e.target.value.toLowerCase()) >= 0
        )
          return eachObj;
      });
      props.updateSwimlaneData(filteredData);
    }

    //if search box is empty set pagedata to initial data,making use of fullpagedata as it has all the data whereas props pageData is filtered based on search and will have only searched content
    else props.updateSwimlaneData(props.fullPageData);
  };
  return (
    <NavBarContainer>
      <GenereText>
        <span>{props.genre}</span>
        <SearchField
          type="search"
          aria-label="Search"
          onChange={(e) => filterSwimlaneContent(e)}
        ></SearchField>
        <SearchImage
          src={search}
          alt="Search"
          title="Search Image"
        ></SearchImage>
      </GenereText>
      <NavBarImage src={nav_bar} alt="Nav Bar"></NavBarImage>
    </NavBarContainer>
  );
}

const mapStateToProps = (state) => {
  return {
    pageData: state.pageData,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateSwimlaneData: (payload) =>
      dispatch({ type: "FILTER_SWIMLANE_DATA", payload }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
