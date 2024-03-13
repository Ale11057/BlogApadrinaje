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
      height={500} src="./Luis.png" alt="chi" className="card pfp"/>
          <div className="grid2">
            <h1>Luis Adrián Chinchilla</h1>
            <h3 className="titulos">Descripción:</h3>
            <p>Soy Luis, me gusta el futbol, leer y programar, ademas me encanta el diseño pero sobre todo codear, una meta a largo plazo es manejar distintos lenguajes de programación y poder concentrarme en la creción de apps y videojuegos , mi lenguaje favorito hasta el momento es Python y quiero dedicarme en mi futuro a desempeñarme en varias areas que abarca esta especialidad. :)</p>
            <br></br>
            <div className="an">
            <div>
            <h3 className="titulos">Color Favorito:</h3>
            <p className="color">Azul</p>
            <h3 className="titulos">Animal Favorito:</h3>
            <p>Gato</p>
            <h3 className="titulos">Comida Favorita:</h3>
            <p>Pescado y papas fritas </p>
            <h3 className="titulos">Cumpleaños:</h3>
            <p>03 de Agosto</p>
            <h3 className="titulos">Sub-Area Favorita:</h3>
            <p>Programación</p>
            <h3 className="titulos">Instagram:</h3>
            <p className="links"><a href="https://www.instagram.com/luis.adrian360">@luis.adrian360</a></p>
            <a href="/gen25" className="bak">Volver</a>
            </div>
            <UnoptimizedImage width={500}
      height={500} src="./gato100.jpg" alt="chi" className="animal"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
