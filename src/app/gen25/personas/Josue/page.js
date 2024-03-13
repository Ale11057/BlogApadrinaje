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
          <Image src="./David.png" alt="chi" className="card pfp"/>
          <div className="grid2">
            <h1>Josué David Calderon </h1>
            <h3 className="titulos">Descripción:</h3>
            <p>Intro/extrovertido, fiel creyente de Dios,  dedicado y contento de estudiar desarrollo. Esperando ser lo que me dedique a futuro,  me gusta mucho salir y estar, simplemente estar </p>
            <div className="an">
            <div>
            <h3 className="titulos">Color Favorito:</h3>
            <p className="color">Blanco</p>
            <h3 className="titulos">Animal Favorito:</h3>
            <p>Husky siberiano</p>
            <h3 className="titulos">Comida Favorita:</h3>
            <p>Ramen</p>
            <h3 className="titulos">Cumpleaños:</h3>
            <p>6 de Diciembre</p>
            <h3 className="titulos">Sub-Area Favorita:</h3>
            <p>Progra</p>
            <h3 className="titulos">Instagram:</h3>
            <p className="links"><a href="https://www.instagram.com/urenas.js">@urenas.js</a></p>
            <a href="/gen25" className="bak">Volver</a>
            </div>
            <Image src="./Husky.jpg" alt="chi" className="animal"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
