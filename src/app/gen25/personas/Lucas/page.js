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
          <Image src="./Lucas.png" alt="chi" className="card pfp"/>
          <div className="grid2">
            <h1>Lucas Ortega</h1>
            <h3 className="titulos">Descripción:</h3>
            <p>Amo la tecnología, me apasiona todo lo que tenga que ver con la informática. Sé que el mundo va cada vez más rápido y por eso quiero mantenerme actual con las nuevas tecnologías y saber más sobre todo esté mundo tan cambiante. Mi sueño es ser un ingeniero en sistemas o ingeniero en desarrollo de software, en general cualquier rama de la informática. </p>
            <br></br>
            <div className="an">
            <div>
            <h3 className="titulos">Color Favorito:</h3>
            <p className="color">Rosado</p>
            <h3 className="titulos">Animal Favorito:</h3>
            <p>Gato</p>
            <h3 className="titulos">Comida Favorita:</h3>
            <p>Pollo en salsa blanca</p>
            <h3 className="titulos">Cumpleaños:</h3>
            <p>05 de Julio</p>
            <h3 className="titulos">Sub-Area Favorita:</h3>
            <p>Programación</p>
            <h3 className="titulos">Instagram:</h3>
            <p className="links"><a href="https://www.instagram.com/lucas.in8k">@lucas.in8k</a></p>
            <a href="/gen25" className="bak">Volver</a>
            </div>
            <Image src="./lcat.jpg" alt="chi" className="animal"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
