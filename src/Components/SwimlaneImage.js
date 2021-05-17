import { PosterImage, PosterContainer,PosterTitle } from "./styles/index.styles";

function SwimlaneImage(props) {
  return (
    <PosterContainer>
      <PosterImage title={props.title} alt={props.title} src={props.image} />
      <PosterTitle>{props.title}</PosterTitle>
    </PosterContainer>
  );
}

export default SwimlaneImage;
