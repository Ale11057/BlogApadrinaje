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
          <Image src="./Sebas.png" alt="chi" className="card pfp"/>
          <div className="grid2">
            <h1>Sebastián Cascante</h1>
            <h3 className="titulos">Descripción:</h3>
            <p>Me gusta progra, quiero plata, quiero estudiar lo mismo que estoy estudiando acá y trabajar en lo mismo en lo que estoy estudiando</p>
            <div className="an">
            <div>
            <h3 className="titulos">Color Favorito:</h3>
            <p className="color">Negro</p>
            <h3 className="titulos">Animal Favorito:</h3>
            <p>Vaca (por que está bien rica)</p>
            <h3 className="titulos">Comida Favorita:</h3>
            <p>Pinto</p>
            <h3 className="titulos">Cumpleaños:</h3>
            <p>8 de Septiembre</p>
            <h3 className="titulos">Sub-Area Favorita:</h3>
            <p>Programación Web</p>
            <h3 className="titulos">Instagram:</h3>
            <p className="links"><a href="https://www.instagram.com/sebas_cascante89">@sebas_cascante89</a></p>
            <a href="/gen24" className="bak">Volver</a>
            </div>
            <Image src="./vaca-rica.jpg" alt="chi" className="animal"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
