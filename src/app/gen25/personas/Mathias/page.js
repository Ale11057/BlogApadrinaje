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
          <Image width={500}
      height={500} src="./Mathias.png" alt="chi" className="card pfp"/>
          <div className="grid2">
            <h1>Mathías Núñez</h1>
            <h3 className="titulos">Descripción:</h3>
            <p>Me apasiona la programación, es una forma en la que puedo crear cosas algo que nadie haya hecho de la misma forma, y me permite aprovechar muchas de las ideas que tengo. Soy muy meticuloso y detallista, no me conformo con lo mínimo y siempre trato de ofrecer lo mejor de mí.</p>
            <br></br>
            <div className="an">
            <div>
            <h3 className="titulos">Color Favorito:</h3>
            <p className="color">Morado</p>
            <h3 className="titulos">Animal Favorito:</h3>
            <p>Gato / Paloma</p>
            <h3 className="titulos">Comida Favorita:</h3>
            <p>Ensalada (de lo que sea)</p>
            <h3 className="titulos">Cumpleaños:</h3>
            <p>18 de Enero</p>
            <h3 className="titulos">Sub-Area Favorita:</h3>
            <p>Programacion Web</p>
            <h3 className="titulos">Instagram:</h3>
            <p className="links"><a href="https://www.instagram.com/mathi_nunez_">@mathi_nunez_</a></p>
            <a href="/gen25" className="bak">Volver</a>
            </div>
            <Image width={500}
      height={500} src="./dove.jpg" alt="chi" className="animal"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
