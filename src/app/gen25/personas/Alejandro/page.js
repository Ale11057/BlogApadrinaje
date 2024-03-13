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
          <Image src="./Alejandro.png" alt="chi" className="card pfp"/>
          <div className="grid2">
            <h1>Alejandro Omaña</h1>
            <h3 className="titulos">Descricion:</h3>
            <p>Hola, soy Alejandro, busco formar una identidad de la cuál no me encuentro del todo seguro, busco algo que me defina y que me permita saber quién soy o quién seré, me esfuerzo a diario por cumplir con el objetivo de ser alguien en este basto mundo por medio del estudio para conseguir un buen empleo y poder aspirar a más en conjunto con la etapa universitaria , le deseo a todo el que lea esto la mejor de las suertes y les ofrezco mi apoyo de manera incondicional.</p>
            <br></br>
            <div className="an"> 
            <div>
            <h3 className="titulos">Color Favorito:</h3>
            <p className="color">Rojo<span className="color2"> y Negro</span> </p>
            <h3 className="titulos">Animal Favorito:</h3>
            <p>Los perros</p>
            <h3 className="titulos">Comida Favorita:</h3>
            <p>Macarrones en salsa blanca</p>
            <h3 className="titulos">Cumpleaños:</h3>
            <p>24 de enero</p>
            <h3 className="titulos">Sub-Area Favorita:</h3>
            <p>Programación</p>
            <h3 className="titulos">Instagram:</h3>
            <p className="links"><a href="https://www.instagram.com/ajr_ribac">@ajr_ribac</a></p>
            <a href="/gen25" className="bak">Volver</a>
            </div>
            <Image src="./dog.jpg" alt="chi" className="animal"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
