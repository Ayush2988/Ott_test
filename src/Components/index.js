import React from "react";
import SwimlaneImage from "./SwimlaneImage";
import { SwimlaneItemContainer } from "./styles/index.styles";
import Navbar from "./Navbar";
import { connect } from "react-redux";
import { pageOneData } from "../mockData/Page1";
import { pageTwoData } from "../mockData/Page2";
import { pageThreeData } from "../mockData/Page3";
import missingPhoto from "../images/placeholder_for_missing_posters.png";

class Swimlane extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fullPageData: [], //having a copy of the entire page data so that when data is filtered in Navbar component we have an obj
      //with full data avaliable to reinitialize the props pageData when the input field is changed to empty
    };
  }
  isBottom(el) {
    //checking if the user has reached bottom of page
    return el.getBoundingClientRect().bottom <= window.innerHeight;
  }

  componentDidMount() {
    //make API call for data of 1st page and then set in the state and dispatch an event to update store
    this.setState({ fullPageData: [...pageOneData.page.contentItems.content] });
    this.props.updateSwimlaneData(pageOneData.page.contentItems.content);
    document.addEventListener("scroll", this.trackScrolling);
  }

  componentWillUnmount() {
    document.removeEventListener("scroll", this.trackScrolling);
  }

  trackScrolling = () => {
    const wrappedElement = document.getElementById("container");
    //api call  based on page content for 2nd page
    if (this.isBottom(wrappedElement) && this.props.pageData.length === 20) {
      //make api call for 2nd page data and if any image is not avaliable set the default image
      pageTwoData.page.contentItems.content =
        pageTwoData.page.contentItems.content.map((obj) => {
          if (obj.posterImage === "poster4") obj.posterImage = missingPhoto;
          return obj;
        });
      this.props.updateSwimlaneData(pageTwoData.page.contentItems.content);
      this.setState({
        fullPageData: [
          ...this.state.fullPageData,
          ...pageTwoData.page.contentItems.content,
        ],
      });
    }
    if (this.isBottom(wrappedElement) && this.props.pageData.length === 40) {
      //make api call for 3rd page data and if any image is not avaliable set the default image
      pageThreeData.page.contentItems.content =
        pageThreeData.page.contentItems.content.map((obj) => {
          if (obj.posterImage === "posterthatismissing.jpg")
            obj.posterImage = missingPhoto;
          return obj;
        });
      this.props.updateSwimlaneData(pageThreeData.page.contentItems.content);
      this.setState({
        fullPageData: [
          ...this.state.fullPageData,
          ...pageThreeData.page.contentItems.content,
        ],
      });
    }
  };
  showSwimlaneData = () => {
    let data = this.props.pageData.map((data, i) => {
      return (
        <SwimlaneImage title={data.name} image={data.posterImage} key={i} />
      );
    });
    if (this.props.pageData.length > 0) return data;
    else return ["No data avaliable for searched content"];
  };
  render() {
    return (
      <div id="container">
        <Navbar
          genre={this.props.genre}
          fullPageData={this.state.fullPageData}
        />
        <SwimlaneItemContainer>{this.showSwimlaneData()}</SwimlaneItemContainer>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    pageData: state.pageData,
    genre: state.genre,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateSwimlaneData: (payload) =>
      dispatch({ type: "UPDATE_SWIMLANE_DATA", payload }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Swimlane);
