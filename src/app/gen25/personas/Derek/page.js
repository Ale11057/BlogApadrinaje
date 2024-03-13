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
          <Image src="./Dereck.png" alt="chi" className="card pfp"/>
          <div className="grid2">
            <h1>Derek Abraham Montes Sandí</h1>
            <h3 className="titulos">Descripción:</h3>
            <p>Soy una persona bastante alegre, centrada y activa que le gusta estar constantemente asumiendo nuevos retos y conociendo personas nuevas. Me considero una persona lider que le gusta dar la cara a las dificultades y enfrentarlas con una sonrisa. Siempre he tenido una pasión por la tecnología, es por eso que decidí formar parte de esta especialidad, en dónde he encontrado un mayor gusto por la Programación y quiero dedicarme a ello en un futuro. Aparte del Colegio y la especialidad, soy Scout, practico Judo y me gustan los videojuegos :D.</p>
            <br></br>
            <div className="an">
            <div>
            <h3 className="titulos">Color Favorito:</h3>
            <p className="color">Naranja 🍊</p>
            <h3 className="titulos">Animal Favorito:</h3>
            <p>Patos, los Gatos también son increíbles </p>
            <h3 className="titulos">Comida Favorita:</h3>
            <p>Costilla de Cerdo 😁</p>
            <h3 className="titulos">Cumpleaños:</h3>
            <p>13 de Junio</p>
            <h3 className="titulos">Sub-Area Favorita:</h3>
            <p>Programación</p>
            <h3 className="titulos">Instagram:</h3>
            <p className="links"><a href="Ahttps://www.instagram.com/derek_ams">@derek_ams</a></p>
            <a href="/gen25" className="bak">Volver</a>
            </div>
            <Image src="./pato.jpg" alt="chi" className="animal"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
