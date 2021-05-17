import nav_bar from "../images/nav_bar.png";
import {
  GenereText,
  NavBarImage,
  NavBarContainer,
} from "./styles/index.styles";

function Navbar(props) {
  return (
    <NavBarContainer>
      <GenereText>{props.genre}</GenereText>
      <NavBarImage src={nav_bar} alt="Nav Bar"></NavBarImage>
    </NavBarContainer>
  );
}

export default Navbar;
