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
          <Image width={500}
            height={500} src="./Santy.png" alt="chi" className="card pfp"/>
          <div className="grid2">
            <h1>Santiago Campos</h1>
            <h3 className="titulos">Descricion:</h3>
            <p>Mi pasión es el diseño y con ello, poder transformar ideas en experiencias visuales impactantes que ayuden a las marcas y negocios a elevar su valor en el mercado. ¿En qué me gustaría trabajar? Como diseñador gráfico, sin embargo, sé que me aburriría de diseñar, por eso optaré por una ingeniería que me mantenga activo y proactivo.</p>
            <br></br>
            <div className="an">
            <div>
            <h3 className="titulos">Color Favorito:</h3>
            <p><span className="color">Rojo</span> y <span className="color2">Verde Sage</span>, mi clóset está lleno de verde</p>
            <h3 className="titulos">Animal Favorito:</h3>
            <p>Los lobos</p>
            <h3 className="titulos">Comida Favorita:</h3>
            <p>Lobitos</p>
            <h3 className="titulos">Cumpleaños:</h3>
            <p>04 de abril, un Aries</p>
            <h3 className="titulos">Sub-Area Favorita:</h3>
            <p>Programación y Diseño de Software</p>
            <a href="/gen24" className="bak">Volver</a>
            </div>
            <Image width={500}
      height={500} src="./lobo.jpg" alt="chi" className="animal"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
