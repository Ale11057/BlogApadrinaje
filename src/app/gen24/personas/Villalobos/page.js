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
          <span className="pp"> Gen 24'</span>
        </h1>
        <div className="cont">
          <UnoptimizedImage width={500}
      height={500} src="./Villalobos.png" alt="chi" className="card pfp"/>
          <div className="grid2">
            <h1>Kevin Villalobos García</h1>
            <h3 className="titulos">Descripción:</h3>
            <p>Me considero una persona que le gusta hacer las cosas bien, me gusta escuchar a las demás personas y además apoyarlas y aconsejarlas  </p>
            <br></br>
            <div className="an">
            <div>
            <h3 className="titulos">Color Favorito:</h3>
            <p className="color"><span className="color1">Negro</span>, <span className="color2">azul</span>, <span className="color3">beige</span> </p>
            <h3 className="titulos">Animal Favorito:</h3>
            <p>Jaguar</p>
            <h3 className="titulos">Comida Favorita:</h3>
            <p>Lasaña, pizza, chifrijo</p>
            <h3 className="titulos">Cumpleaños:</h3>
            <p>03 de Agosto</p>
            <h3 className="titulos">Sub-Area Favorita:</h3>
            <p>Diseño software</p>
            <h3 className="titulos">Instagram:</h3>
            <p className="links"><a href="https://www.instagram.com/_kevigar_">@_kevigar_</a></p>
            <a href="/gen24" className="bak">Volver</a>
            </div>
            <UnoptimizedImage width={500}
      height={500} src="./Jaguar.jpeg" alt="chi" className="animal"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
