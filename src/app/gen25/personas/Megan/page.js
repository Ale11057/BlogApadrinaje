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
      height={500} src="./Megan.png" alt="chi" className="card pfp"/>
          <div className="grid2">
            <h1>Megan Cuenca</h1>
            <h3 className="titulos">Descripción:</h3>
            <p>Megan es una persona que disfruta de la naturaleza y la fotografía. Ella utiliza su cámara para capturar imágenes de paisajes y animales.</p>
            <br></br>
            <div className="an">
              <div>
                <h3 className="titulos">Color Favorito:</h3>
                <p className="color"><span className="color1">Negro</span> y <span className="color2">Verde</span></p>
                <h3 className="titulos">Animal Favorito:</h3>
                <p>Gatos, pero los perros son hermosos igual</p>
                <h3 className="titulos">Comida Favorita:</h3>
                <p>Cualquier tipo de pasta </p>
                <h3 className="titulos">Cumpleaños:</h3>
                <p>8 de septiembre </p>
                <h3 className="titulos">Sub-Area Favorita:</h3>
                <p>Diseño de Software</p>
                <a href="/gen25" className="bak">
                  Volver
                </a>
              </div>
              <Image width={500}
      height={500}
                src="./perro-y-gato.jpg"
                alt="chi"
                className="animal"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
