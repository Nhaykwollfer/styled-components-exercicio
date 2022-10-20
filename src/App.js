import React from "react";
import CardVideo from "./Componentes/CardVideo";
import { MeuCard, MeuFooter, MeuReader, MinhaMain, MinhaNav } from "./Componentes/Styled";
import "./styles.css";

export default function App() {
  const card1 = {
    titulo: "Oi eu sou o Goku!",
    imagemDoVideo: "https://www.pngplay.com/wp-content/uploads/12/Goku-Background-PNG.png",
    textoAlternativo: "descrição da imagem"
  };

  const card2 = {
    titulo: "O Miserável é um Gênio!",
    imagemDoVideo: "https://i.ytimg.com/vi/_gUTBbetRvM/maxresdefault.jpg",
    textoAlternativo: "descrição da imagem"
  }

  return (
    <div>
      <div className="tela-inteira">
        <MeuReader>
          <h1>LabeTube</h1>
          <input type="text" placeholder="Busca" id="campoDeBusca" />
        </MeuReader>

        <MinhaMain>
          <MinhaNav className="menu-vertical">
            <ul>
              <li className="botoes-meunu-vertical">Início</li>
              <li className="botoes-meunu-vertical">Em alta</li>
              <li className="botoes-meunu-vertical">Inscrições</li>
              <hr />
              <li className="botoes-meunu-vertical">Originais</li>
              <li className="botoes-meunu-vertical">Histórico</li>
            </ul>
          </MinhaNav>

          <MeuCard className="painel-de-videos">
            <CardVideo
              image1={card1.imagemDoVideo}
              titulo={card1.titulo}
              textoAlternativo={card1.textoAlternativo}
            />

            <CardVideo
              image1={card2.imagemDoVideo}
              titulo={card2.titulo}
              textoAlternativo={card1.textoAlternativo}
            />

          </MeuCard>
        </MinhaMain>

        <MeuFooter>
          <h4>Projeto Elaborado por Léo!</h4>
        </MeuFooter>
      </div>
    </div>
  );
}
