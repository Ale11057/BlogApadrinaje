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
      height={500} src="./Rojas.png" alt="chi" className="card pfp"/>
          <div className="grid2">
            <h1>Santiago Rojas</h1>
            <h3 className="titulos">Descripción:</h3>
            <p>
              Soy una persona muy extrovertida e inquieta por lo cual nunca me
              verán estando callado Me gusta mucho hacer actividad física,
              principalmente Basquetbol y Fútbol Amo escuchar música, me levanta
              mucho el ánimo, lo que mas escucho es Rap y Reggae Me llama mucho
              la atención el mundo de los Sneakers y la moda, aunque visto re
              básico jajaja Siempre ando mucha comida en el bulto, así que si un
              día andan con hambre, sin vergüenza con gusto les regalo algo
              jajaja Me gustaría poder trabajar en HP en el área de Soporte
            </p>
            <p className="easteregg">Nota del editor: El que come callado repite y el que escoje no coje</p>
            <br></br>
            <div className="an">
              <div>
                <h3 className="titulos">Color Favorito:</h3>
                <p className="color">Negro</p>
                <h3 className="titulos">Animal Favorito:</h3>
                <p>Gato</p>
                <h3 className="titulos">Comida Favorita:</h3>
                <p>Pescado Empanizado</p>
                <h3 className="titulos">Cumpleaños:</h3>
                <p>29 de Junio</p>
                <h3 className="titulos">Sub-Area Favorita:</h3>
                <p>Diseño</p>
                <h3 className="titulos">Instagram:</h3>
                <p className="links">
                  <a href="https://www.instagram.com/rojas__santi_06/">@rojas__santi_06</a>
                </p>
                <a href="/gen24" className="bak">
                  Volver
                </a>
              </div>
              <Image width={500}
      height={500}
                src="./Cat.jpg"
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
