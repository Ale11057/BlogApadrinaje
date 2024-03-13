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
      height={500} src="./Marti.png" alt="chi" className="card pfp"/>
          <div className="grid2">
            <h1>Santiago Martínez Araya</h1>
            <h3 className="titulos">Descripcion:</h3>
            <p>Me presento como una persona dedicada y proactiva. Apasionado por la programación y estar en un constante aprendizaje. Me gusta ir al gimnasio y hacer calistenia. Además, trato siempre de disfrutar cada momento y estar enfocado en mis metas. </p>
            <p className="easteregg">Nota del editor: Como olvidar cuando salvo a un niño de caer de un 20° piso o cuando estaban asaltando a una abuelita y paro la bala con los biceps para luego correr 10km detras de la moto donde iba el asaltante, 10/10 de el hombre</p>
            
            <br></br>
            <div className="an">
            <div>
            <h3 className="titulos">Color Favorito:</h3>
            <p className="color">Rojo</p>
            <h3 className="titulos">Animal Favorito:</h3>
            <p>Perros</p>
            <h3 className="titulos">Comida Favorita:</h3>
            <p>Pizza 🍕</p>
            <h3 className="titulos">Cumpleaños:</h3>
            <p>23 de Diciembre</p>
            <h3 className="titulos">Sub-Area Favorita:</h3>
            <p>Programación </p>
            <h3 className="titulos">Instagram:</h3>
            <p className="links"><a href="https://www.instagram.com/santiagok270">@santiagok270</a></p>
            <a href="/gen24" className="bak">Volver</a>
            </div>
            <Image width={500}
      height={500} src="./perros.png" alt="chi" className="animal"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
