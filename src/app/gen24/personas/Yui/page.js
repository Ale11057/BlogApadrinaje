"use client";
import Image from "next/image";
const UnoptimizedImage = (props) => {
  return <Image {...props} unoptimized />
}


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
          <UnoptimizedImage width={500}
      height={500} src="./Yui.png" alt="chi" className="card pfp"/>
          <div className="grid2">
            <h1>Yurguen Ortega</h1>
            <h3 className="titulos">Descricion:</h3>
            <p>Holaaaaaaaaa, me considero una persona introvertida pero cuando tengo confianza soy bastante divertido, me gusta jugar videojuegos, ver videos y dormir :p, me gusta programar y me considero bastante capaz a la hora de realizar cualquier tarea o actividad relacionada a la informatica.</p>
            <br></br>
            <div className="an">
            <div>
            <h3 className="titulos">Color Favorito:</h3>
            <p className="color">Rojo</p>
            <h3 className="titulos">Animal Favorito:</h3>
            <p>Gato</p>
            <h3 className="titulos">Comida Favorita:</h3>
            <p>Arroz con pollo</p>
            <h3 className="titulos">Cumpleaños:</h3>
            <p>15 de Octubre</p>
            <h3 className="titulos">Sub-Area Favorita:</h3>
            <p>Programación WEB</p>
            <h3 className="titulos">Instagram:</h3>
            <p className="links"><a href="https://www.instagram.com/yurguen_ortega">@yurguen_ortega</a></p>
            <a href="/gen24" className="bak">Volver</a>
            </div>
            <UnoptimizedImage width={500}
      height={500} src="./car2.jpeg" alt="chi" className="animal"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
