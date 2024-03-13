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
          <Image src="./Johel.png" alt="chi" className="card pfp"/>
          <div className="grid2">
            <h1>Johel Sánchez</h1>
            <h3 className="titulos">Descripción:</h3>
            <p>Holaa, soy una persona apasionada por el dibujo y el arte en general, me encanta escuchar todo tipo de música pero en especial el rock y la música clásica. Soy muy bueno con los números y me gusta salir con amigos, hago calistenia, toco varios instrumentos musicales. Soy muy bueno en progra por si algún día ocupa ayuda no duden en preguntar lo que sea. En el futuro me gustaría ser ingeniero Biomédico o ingeniería civil. </p>
            <br></br>
            <div className="an">
            <div>
            <h3 className="titulos">Color Favorito:</h3>
            <p className="color">Azul noche</p>
            <h3 className="titulos">Animal Favorito:</h3>
            <p>El tejón de la miel</p>
            <h3 className="titulos">Comida Favorita:</h3>
            <p>Macarrones en salsa blanca</p>
            <h3 className="titulos">Cumpleaños:</h3>
            <p>08 de Enero</p>
            <h3 className="titulos">Sub-Area Favorita:</h3>
            <p>Programación</p>
            <h3 className="titulos">Instagram:</h3>
            <p className="links"><a href="https://www.instagram.com/imjust4nother4rtist">@imjust4nother4rtist </a></p>
            <a href="/gen24" className="bak">Volver</a>
            </div>
            <Image src="./Tejon.jpg" alt="chi" className="animal"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
