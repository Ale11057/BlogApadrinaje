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
      height={500} src="./Gomez.png" alt="chi" className="card pfp"/>
          <div className="grid2">
            <h1>Santiago Gomez</h1>
            <h3 className="titulos">Descripción:</h3>
            <p>Soy Santiago G, Gómez para los amigos y santiro para los close friends, soy humilde y me gusta vacilar a pesar de que por dentro soy centrado y visionario</p>
            <br></br>
            <div className="an">
            <div>
            <h3 className="titulos">Color Favorito:</h3>
            <p className="color"><span className="color1">negro</span>, <span className="color2">verde musgo</span> </p>
            <h3 className="titulos">Animal Favorito:</h3>
            <p>Gatos</p>
            <h3 className="titulos">Comida Favorita:</h3>
            <p>pancho;)</p>
            <h3 className="titulos">Cumpleaños:</h3>
            <p>28 de Marzo</p>
            <h3 className="titulos">Sub-Area Favorita:</h3>
            <p>Soporte</p>
            <h3 className="titulos">Instagram:</h3>
            <p className="links"><a href="https://www.instagram.com/s4ntyrk_">@s4ntyrk_</a></p>
            <a href="/gen24" className="bak">Volver</a>
            </div>
            <Image width={500}
      height={500} src="./car1.jpg" alt="chi" className="animal"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
