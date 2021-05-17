import styled from "styled-components";

export const SwimlaneItemContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: auto;
  flex-wrap: wrap;
  margin: auto;
`;
export const PosterImage = styled.img`
  src: ${(props) => props.src};
  height: auto;
  width: 10vw;
  @media only screen and (max-width: 1024px) {
    width:25vw;
  }
`;
export const PosterContainer = styled.div`
  width: auto;
  height:43vh;
  margin-right:2vw;
  @media only screen and (max-width: 1024px) {
    height:33vh;
    width:25vw;
  }
`;
export const PosterTitle = styled.div`
  font-size: 1.3em;
  font-family: regular;
  margin-top: 1.5vh;
  color: #999999;
  font-weight: 500;
  text-align: left;
  width:10vw;
  @media only screen and (max-width: 1024px) {
    font-size: 1.1em;
    font-weight: 600;
    width:auto;
}
`;
export const GenereText = styled.div`
  position: absolute;
  top: 15vh;
  left: 5vw;
  font-family: regular;
  font-size: 25px;
  @media only screen and (max-width: 1024px) {
    top: 3vh;
    left: 3vw;
  }
`;
export const NavBarContainer = styled.div`
  position: relative;
  height: 30vh;
  width: auto;
  @media only screen and (max-width: 1024px) {
    height: auto;
  }
`;
export const NavBarImage = styled.img`
  width: 100%;
  height: auto;
`;
