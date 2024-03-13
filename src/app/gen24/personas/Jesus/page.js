"use client";
import Image from "next/image";
export default function Home() {
  return (
    <>
      <div className="chi"></div>
      <div className="content">
        <a className="pp"> -D </a>
        <h1>
          <span className="pp"> Gen 24'</span>
        </h1>
        <div className="cont">
          <Image src="./Jesus.png" alt="chi" className="card pfp"/>
          <div className="grid2">
            <h1>Jesús Piñango</h1>
            <h3 className="titulos">Descripción:</h3>
            <p>Soy una persona, súper dedicada, orgullosa de mi proceso, además soy el chico más feliz, aunque talvez no sea el mejor en mi especialidad, siempre veo lo bueno de todo y de todos</p>
            <br></br>
            <div className="an">
            <div>
            <h3 className="titulos">Color Favorito:</h3>
            <p className="color">Turquesa</p>
            <h3 className="titulos">Animal Favorito:</h3>
            <p>Medusa</p>
            <h3 className="titulos">Comida Favorita:</h3>
            <p>Lasgna</p>
            <h3 className="titulos">Cumpleaños:</h3>
            <p>8 de diciembre</p>
            <h3 className="titulos">Sub-Area Favorita:</h3>
            <p>Soporte Ti</p>
            <a href="/gen24" className="bak">Volver</a>
            </div>
            <Image src="./medusa.jpg" alt="chi" className="animal"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
