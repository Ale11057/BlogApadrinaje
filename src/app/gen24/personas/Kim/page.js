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
      height={500} src="./kim.png" alt="chi" className="card pfp"/>
          <div className="grid2">
            <h1>Kimberly Arias</h1>
            <h3 className="titulos">Descripción:</h3>
            <p>Me gusta mucho jugar Valorant, estar con mis amiguitos y dormir. Me encanta programación aunque no sea buenita:)</p>
            <div className="an">
            <div>
            <h3 className="titulos">Color Favorito:</h3>
            <p className="color">Rojo</p>
            <h3 className="titulos">Animal Favorito:</h3>
            <p>Gatos</p>
            <h3 className="titulos">Comida Favorita:</h3>
            <p>Macarrones</p>
            <h3 className="titulos">Cumpleaños:</h3>
            <p>10 de Abril</p>
            <h3 className="titulos">Sub-Area Favorita:</h3>
            <p>Programación</p>
            <h3 className="titulos">Instagram:</h3>
            <p className="links"><a href="https://www.instagram.com/yunokim_104">@yunokim_104</a></p>
            <a href="/gen24" className="bak">Volver</a>
            </div>
            <Image width={500}
      height={500} src="./cato.jpg" alt="chi" className="animal"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
