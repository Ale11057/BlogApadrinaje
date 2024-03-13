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
      height={500} src="./Lopez.png" alt="chi" className="card pfp"/>
          <div className="grid2">
            <h1>Jimena López</h1>
            <h3 className="titulos">Descripción:</h3>
            <p>Me gusta mucho conocer personitas nuevas, aunque pueda parecer un poco introvertida al principio, soy bastante calmada y easy going, mi fuerte es el inglés y diseñar, me encanta crear cosas nuevas y agradables a la vista de las personas, de progra no hablemos mucho, si bien quiero estudiar una ingeniería, uno de mis sueños más grandes a futuro es desempeñarme en producción audiovisual. Me encantaría ayudar en lo que pueda con mis conocimientos y poder crear bonitas relaciones con todos ✨</p>
            <br></br>
            <div className="an">
            <div>
            <h3 className="titulos">Color Favorito:</h3>
            <p className="color"><span className="color1">Verde</span> y <span className="color2">Rosa</span></p>
            <h3 className="titulos">Animal Favorito:</h3>
            <p>Gatos</p>
            <h3 className="titulos">Comida Favorita:</h3>
            <p>Pastel de papa</p>
            <h3 className="titulos">Cumpleaños:</h3>
            <p>24 de mayo</p>
            <h3 className="titulos">Sub-Area Favorita:</h3>
            <p>Diseño de software</p>
            <h3 className="titulos">Instagram:</h3>
            <p className="links"><a href="https://www.instagram.com/jimelq">@jimelq</a></p>
            <a href="/gen24" className="bak">Volver</a>
            </div>
            <UnoptimizedImage width={500}
      height={500} src="./Gato1.png" alt="chi" className="animal"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
