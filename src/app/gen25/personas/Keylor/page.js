"use client";
import Image from "next/image";
const UnoptimizedImage = (props) => {
  return <Image {...props} unoptimized />
}


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
          <UnoptimizedImage width={500}
      height={500} src="./Keylor.png" alt="chi" className="card pfp"/>
          <div className="grid2">
            <h1>Keylor Vargas</h1>
            <h3 className="titulos">Descripción:</h3>
            <p>De ante mano, es un placer que pertenezcas a esta tan bonita que es info, soy una persona que trata de ayudar lo más posible y puedes contar conmigo para lo que sea, sea académico como personal, puedes encontrar un amigo en mí</p>
            <br></br>
            <div className="an">
            <div>
            <h3 className="titulos">Color Favorito:</h3>
            <p className="color">Rojo</p>
            <h3 className="titulos">Animal Favorito:</h3>
            <p>Perro(Golden)</p>
            <h3 className="titulos">Comida Favorita:</h3>
            <p>La pizza</p>
            <h3 className="titulos">Cumpleaños:</h3>
            <p>16 de noviembre</p>
            <h3 className="titulos">Sub-Area Favorita:</h3>
            <p>Programación web</p>
            <h3 className="titulos">Instagram:</h3>
            <p className="links"><a href="https://www.instagram.com/Keylor.py">@Keylor.py</a></p>
            <a href="/gen25" className="bak">Volver</a>
            </div>
            <UnoptimizedImage width={500}
      height={500} src="./golden.jpg" alt="chi" className="animal"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
