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
      height={500} src="./Anthony.png" alt="chi" className="card pfp"/>
          <div className="grid2">
            <h1>Anthony Benavides</h1>
            <h3 className="titulos">Descripción:</h3>
            <p>Como desarrollador web, me gusta los entornos desafiantes que impulsen mi crecimiento personal. Disfruto guiar a los demás y ayudarles en el aprendizaje. Intento mejorar cada día practicando e investigando por cuenta propia. Me gustaría trabajar en la programación para el desarrollo de aplicaciones o en el área de soporte, donde me fascina explorar el complejo mundo tecnológico y ayudar a otros a comprenderlo mejor.</p>
            <br></br>
            <div className="an">
            <div>
            <h3 className="titulos">Color Favorito:</h3>
            <p className="color">Verde</p>
            <h3 className="titulos">Animal Favorito:</h3>
            <p>Capibara</p>
            <h3 className="titulos">Comida Favorita:</h3>
            <p>Pizza 🍕</p>
            <h3 className="titulos">Cumpleaños:</h3>
            <p>4 de Agosto</p>
            <h3 className="titulos">Sub-Area Favorita:</h3>
            <p>Programación y Soporte TI</p>
            <h3 className="titulos">Instagram:</h3>
            <p className="links"><a href="https://www.instagram.com/anthony.zamora.71465">@anthony.zamora.71465</a></p>
            <a href="/gen25" className="bak">Volver</a>
            </div>
            <Image width={500}
      height={500} src="./capibara.jpg" alt="chi" className="animal"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
