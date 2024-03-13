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
          <Image src="./Kenneth.png" alt="chi" className="card pfp"/>
          <div className="grid2">
            <h1>Kenneth Ramírez</h1>
            <h3 className="titulos">Descripción:</h3>
            <p>Soy serio, pero soy de los que se ríen y hacen chistes cuando no tiene que :)</p>
            <br></br>
            <div className="an">
            <div>
            <h3 className="titulos">Color Favorito:</h3>
            <p className="color">Negro</p>
            <h3 className="titulos">Animal Favorito:</h3>
            <p>Lechuza</p>
            <h3 className="titulos">Comida Favorita:</h3>
            <p>Lasaña de pollo</p>
            <h3 className="titulos">Cumpleaños:</h3>
            <p>03 de Septiembre</p>
            <h3 className="titulos">Sub-Area Favorita:</h3>
            <p>Programación</p>
            <a href="/gen24" className="bak">Volver</a>
            </div>
            <Image src="./Lechuza.jpg" alt="chi" className="animal"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
