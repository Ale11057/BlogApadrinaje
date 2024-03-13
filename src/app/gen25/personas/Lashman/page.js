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
          <span className="pp"> Gen 25'</span>
        </h1>
        <div className="cont">
          <UnoptimizedImage width={500}
      height={500} src="./Lashman.png" alt="chi" className="card pfp"/>
          <div className="grid2">
            <h1>Nombre</h1>
            <h3 className="titulos">Descripción:</h3>
            <p>Yo soy alguien tranquilo, reservado siendo que yo tiendo a interactuar en grupos pequeños, siendo que en estos grupos tiendo a ser más abierto y bromista. Yo siempre que puedo busco siempre superarme, busco siempre aprender todo lo posible y lograr salir trabajando del colegio y aunque aveces hay errores hay que aprender de ellos. </p>
            <br></br>
            <div className="an">
            <div>
            <h3 className="titulos">Color Favorito:</h3>
            <p className="color"><span className="color1">Azul</span> aunque el <span className="color2">verde</span> me encanta </p>
            <h3 className="titulos">Animal Favorito:</h3>
            <p>Perro</p>
            <h3 className="titulos">Comida Favorita:</h3>
            <p>Mariscada</p>
            <h3 className="titulos">Cumpleaños:</h3>
            <p>18 de Enero </p>
            <h3 className="titulos">Sub-Area Favorita:</h3>
            <p>Progra</p>
            <h3 className="titulos">Instagram:</h3>
            <p className="links"><a href="https://www.instagram.com/lashman.brenes">@lashman.brenes</a></p>
            <a href="/gen25" className="bak">Volver</a>
            </div>
            <UnoptimizedImage width={500}
      height={500} src="./god.jpg" alt="chi" className="animal"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
