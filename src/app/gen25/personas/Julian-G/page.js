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
      height={500} src="./JulianG.png" alt="chi" className="card pfp"/>
          <div className="grid2">
            <h1>Julián García</h1>
            <h3 className="titulos">Descripción:</h3>
            <p>Disfruto del trabajo en equipo, no solo como una forma de alcanzar metas, sino como una aventura compartida y en la cual todos crecemos poco a poco. Soy un gran fanático de la aviación y un fiel creyente de que el cielo es solo el comienzo cuando se trabaja duro y con pasión en algo que amas y disfrutas.</p>
            <br></br>
            <div className="an">
            <div>
            <h3 className="titulos">Color Favorito:</h3>
            <p className="color">Negro</p>
            <h3 className="titulos">Animal Favorito:</h3>
            <p>Halcón</p>
            <h3 className="titulos">Comida Favorita:</h3>
            <p>Lasagna</p>
            <h3 className="titulos">Cumpleaños:</h3>
            <p>20 de Diciembre</p>
            <h3 className="titulos">Sub-Area Favorita:</h3>
            <p>Programación</p>
            <h3 className="titulos">Instagram:</h3>
            <p className="links"><a href="https://www.instagram.com/juliangv.jgv">@juliangv.jgv</a></p>
            <a href="/gen25" className="bak">Volver</a>
            </div>
            <UnoptimizedImage width={500}
      height={500} src="./halcon.jpg" alt="chi" className="animal"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
