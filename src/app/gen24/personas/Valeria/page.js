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
      height={500} src="./Valeria.png" alt="chi" className="card pfp"/>
          <div className="grid2">
            <h1>Valeria Mora</h1>
            <h3 className="titulos">Descripción:</h3>
            <p>Soy una persona leal y muy selectiva, lo que me ha ayudado a establecer mis límites jeje, soy bastante extrovertida y me gustaría ser una hermosa microbióloga</p>
            <br></br>
            <div className="an">
            <div>
            <h3 className="titulos">Color Favorito:</h3>
            <p className="color">El <span className="color1">rosado</span> pero AMO vestirme de <span className="color2">negro</span>. </p>
            <h3 className="titulos">Animal Favorito:</h3>
            <p>Los gatos (meow)</p>
            <h3 className="titulos">Comida Favorita:</h3>
            <p>La sopita azteca</p>
            <h3 className="titulos">Cumpleaños:</h3>
            <p>06 de diciembre (el mejor mes)</p>
            <h3 className="titulos">Sub-Area Favorita:</h3>
            <p>English Oriented to W.D</p>
            <h3 className="titulos">Instagram:</h3>
            <p className="links"><a href="https://www.instagram.com/valemorah">@valemorah</a></p>
            <a href="/gen24" className="bak">Volver</a>
            </div>
            <Image width={500}
      height={500} src="./Gato.png" alt="chi" className="animal"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
