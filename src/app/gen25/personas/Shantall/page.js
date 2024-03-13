"use client";
import Image from "next/image";
export default function Home() {
  return (
    <>
      <div className="chi"></div>
      <div className="content">
        <a className="pp"> -D </a>
        <h1>
          <span className="pp"> Gen 25'</span>
        </h1>
        <div className="cont">
          <Image src="./Shantall.png" alt="chi" className="card pfp"/>
          <div className="grid2">
            <h1>NShantall Peña</h1>
            <h3 className="titulos">Descripción:</h3>
            <p>Hola! Me considero una persona amante del arte, de mente creativa y alegre que le apasiona el diseño y la expresión artística. Esto me ha llevado a tener un interés genuino por la sub-área de diseño de software y la creación de experiencias visuales únicas.  En mi tiempo libre disfruto de estar leyendo un libro o viendo alguna serie o película.</p>
            <br></br>
            <div className="an">
            <div>
            <h3 className="titulos">Color Favorito:</h3>
            <p className="color">Verde</p>
            <h3 className="titulos">Animal Favorito:</h3>
            <p>Gato</p>
            <h3 className="titulos">Comida Favorita:</h3>
            <p>Salchipapas</p>
            <h3 className="titulos">Cumpleaños:</h3>
            <p>10 de Noviembre</p>
            <h3 className="titulos">Sub-Area Favorita:</h3>
            <p>Diseño</p>
            <h3 className="titulos">Instagram:</h3>
            <p className="links"><a href="https://www.instagram.com/sxhhpc_">@sxhhpc_</a></p>
            <a href="/gen25" className="bak">Volver</a>
            </div>
            <Image src="./gato123.jpg" alt="chi" className="animal"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
