import React from "react";
import SwimlaneImage from "./SwimlaneImage";
import { SwimlaneItemContainer } from "./styles/index.styles";
import Navbar from "./Navbar";
import { connect } from "react-redux";
import { pageTwoData } from "../mockData/Page2";
import { pageThreeData } from "../mockData/Page3";
import missingPhoto from "../images/placeholder_for_missing_posters.png";

class Swimlane extends React.Component {
  isBottom(el) {
    return el.getBoundingClientRect().bottom <= window.innerHeight;
  }

  componentDidMount() {
    document.addEventListener("scroll", this.trackScrolling);
  }

  componentWillUnmount() {
    document.removeEventListener("scroll", this.trackScrolling);
  }

  trackScrolling = () => {
    const wrappedElement = document.getElementById("container");
    if (this.isBottom(wrappedElement) && this.props.pageData.length === 20) {
      pageTwoData.page.contentItems.content =
        pageTwoData.page.contentItems.content.map((obj) => {
          if (obj.posterImage === "poster4") obj.posterImage = missingPhoto;
          return obj;
        });
      this.props.updateSwimlaneData(pageTwoData.page.contentItems.content);
    }
    if (this.isBottom(wrappedElement) && this.props.pageData.length === 40) {
      pageThreeData.page.contentItems.content =
        pageThreeData.page.contentItems.content.map((obj) => {
          if (obj.posterImage === "posterthatismissing.jpg")
            obj.posterImage = missingPhoto;
          return obj;
        });
      this.props.updateSwimlaneData(pageThreeData.page.contentItems.content);
    }
  };
  showSwimlaneData = () => {
    let data = this.props.pageData.map((data) => {
      return <SwimlaneImage title={data.name} image={data.posterImage} />;
    });
    return data;
  };
  render() {
    return (
      <div id="container">
        <Navbar genre={this.props.genre} />
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
