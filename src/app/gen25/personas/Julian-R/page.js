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
          <Image width={500}
      height={500} src="./JulianR.png" alt="chi" className="card pfp"/>
          <div className="grid2">
            <h1>Julián Antonio Ramírez</h1>
            <h3 className="titulos">Descripción:</h3>
            <p>Holaa, soy Julián Ramírez :). Me gusta mucho la programación, video juegos y la música. La programación es algo en lo que siento que de verdad me tengo que esforzar para cumplir lo que quiero y es muy divertido también. Los videojuegos son algo mas que para entretenerse, son para vivirlos y experimentar cosas nuevas y la música es como una forma de vida para mi. En un futuro espero poder a llegar ser un desarrollador de videojuegos, o algo que tenga que ver con ellos por que me encantan :).</p>
            <br></br>
            <div className="an">
            <div>
            <h3 className="titulos">Color Favorito:</h3>
            <p className="color">Negro</p>
            <h3 className="titulos">Animal Favorito:</h3>
            <p>Gatos</p>
            <h3 className="titulos">Comida Favorita:</h3>
            <p>Lasagna o el chifrijo</p>
            <h3 className="titulos">Cumpleaños:</h3>
            <p>15 de Noviembre</p>
            <h3 className="titulos">Sub-Area Favorita:</h3>
            <p>Progra</p>
            <h3 className="titulos">Instagram:</h3>
            <p className="links"><a href="https://www.instagram.com/juramiii">@juramiii</a></p>
            <a href="/gen25" className="bak">Volver</a>
            </div>
            <Image width={500}
      height={500} src="./car.jpg" alt="chi" className="animal"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
