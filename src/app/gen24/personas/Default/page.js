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
          <Image src="AQUI VA LA FOTO DE LA PERSONA" alt="chi" className="card pfp"/>
          <div className="grid2">
            <h1>Jostin Miranda Corrales</h1>
            <h3 className="titulos">Descricion:</h3>
            <p>AQUI VA LA DESCRIPCION</p>
            <div className="an">
            <div>
            <h3 className="titulos">Color Favorito:</h3>
            <p className="color">AQUI VA EL COLOR</p>
            <h3 className="titulos">Animal Favorito:</h3>
            <p>AQUI VA EL ANIMAL</p>
            <h3 className="titulos">Comida Favorita:</h3>
            <p>AQUI VA LA COMIDA</p>
            <h3 className="titulos">Cumpleaños:</h3>
            <p>AQUI VA EL CUMPLE</p>
            <h3 className="titulos">Sub-Area Favorita:</h3>
            <p>AQUI VA LA SUBAREA</p>
            <h3 className="titulos">Instagram:</h3>
            <p className="links"><a href="AQUI VA EL LINK DE INSTA">AQUI VA EL USER</a></p>
            <a href="/gen24" className="bak">Volver</a>
            </div>
            <Image src="AQUI VA LA FTO DEL ANIMAL" alt="chi" className="animal"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
