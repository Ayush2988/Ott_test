import styled from "styled-components";

export const SwimlaneItemContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: auto;
  flex-wrap: wrap;
  margin: auto;
  padding: 0 2%;
`;
export const PosterImage = styled.img`
  src: ${(props) => props.src};
  height: auto;
  width: 10vw;
  &:hover{
    width: 12vw;
    border:2px solid black;
  }
  @media only screen and (max-width: 1024px) {
    width: 25vw;
  }

`;
export const PosterContainer = styled.div`
  width: 13vw;
  height: 45vh;
  margin-right: 1vw;
  @media only screen and (max-width: 1024px) {
    height: 36vh;
    width: 25vw;
  }
`;
export const PosterTitle = styled.div`
  font-size: 1.3em;
  font-family: regular;
  margin-top: 1.5vh;
  color: #999999;
  font-weight: 500;
  text-align: center;
  width: 13vw;
  @media only screen and (max-width: 1024px) {
    font-size: 1.1em;
    font-weight: 600;
    width: auto;
  }
`;
export const GenereText = styled.div`
  position: absolute;
  top: 3vh;
  left: 5vw;
  font-family: regular;
  font-size: 25px;
  display: flex;
  justify-content: flex-start;
  align-items:center;
  @media only screen and (max-width: 1024px) {
    top: 3vh;
    left: 3vw;
    font-size: 20px;
  }
`;
export const NavBarContainer = styled.div`
  position: fixed;
  height: 20vh;
  width: 100%;
  @media only screen and (max-width: 1024px) {
    height: auto;
  }
`;
export const NavBarImage = styled.img`
  width: 100%;
  height: auto;
  height: 20vh;
  @media only screen and (max-width: 1024px) {
    height: 14vh;
  }
`;
export const SearchField = styled.input`
  border: none;
  margin-left: 60vw;
  border-bottom: 5px solid #999999;
  color: #999999;
  background-color: black;
  font-family: Regular;
  outline: none;
  @media only screen and (max-width: 1024px) {
    margin-left: 15vw;
    width: 25vw;
  }
`;
export const SearchImage = styled.img`
  src: ${(props) => props.src};
  height: 20px;
  width: auto;
  margin-top: 8px;
`;

export const Loader = styled.div`
display:flex;
justify-content:center;
align-items:center;
height:100%;
`
