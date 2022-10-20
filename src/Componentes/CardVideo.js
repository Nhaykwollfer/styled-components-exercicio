import { MeuCardVid } from "./Styled";

function CardVideo(props) {
  function reproduzVideo(props) {
    alert("O vídeo está sendo reproduzido");
  }
  return (
    <MeuCardVid className="box-pagina-principal" onClick={reproduzVideo}>
      <img src={props.image1} alt={props.textoAlternativo} />
      <h4>{props.titulo}</h4>
    </MeuCardVid>
  );
}

export default CardVideo;
