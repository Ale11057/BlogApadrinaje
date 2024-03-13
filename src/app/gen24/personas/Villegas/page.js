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
          <Image src="./Villegas.png" alt="chi" className="card pfp"/>
          <div className="grid2">
            <h1>Kevin Villegas</h1>
            <h3 className="titulos">Descripción:</h3>
            <p>Soy una persona bastante social y empática. Me gusta mucho programar, jugar play y las montañas o zonas rurales. Usualmente me gusta escuchar a los demás y si tengo el chance, dar un consejo.</p>
            <div className="an">
            <div>
            <h3 className="titulos">Color Favorito:</h3>
            <p className="color">Azul</p>
            <h3 className="titulos">Animal Favorito:</h3>
            <p>Panda Rojo</p>
            <h3 className="titulos">Comida Favorita:</h3>
            <p>Pizza 🍕</p>
            <h3 className="titulos">Cumpleaños:</h3>
            <p>16 de Mayo</p>
            <h3 className="titulos">Sub-Area Favorita:</h3>
            <p>Programación</p>
            <h3 className="titulos">Instagram:</h3>
            <p className="links"><a href="https://www.instagram.com/Villegascoto">@Villegascoto</a></p>
            <a href="/gen24" className="bak">Volver</a>
            </div>
            <Image src="./pandarojo.jpg" alt="chi" className="animal"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
