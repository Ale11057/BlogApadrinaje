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
      height={500} src="./Andy.png" alt="chi" className="card pfp"/>
          <div className="grid2">
            <h1>Andy Fabián Reyes García</h1>
            <h3 className="titulos">Descripción:</h3>
            <p>Me apasiona el diseño, el soporte técnico, la moda y bailar. Mi fascinación por estas áreas se combina con mi deseo constante de aprendizaje, ya que disfruto hacer cursos. Mi espíritu proactivo y de liderazgo me impulsa a buscar constantemente nuevas oportunidades para crecer y mejorar. Además, me caracterizo por ser participativo y motivar a otros a alcanzar metas comunes.</p>
            <br></br>
            <div className="an">
            <div>
            <h3 className="titulos">Color Favorito:</h3>
            <p className="color"><span className="color1">Verde</span> y <span className="color2">Azul</span></p>
            <h3 className="titulos">Animal Favorito:</h3>
            <p>Focas y Perros</p>
            <h3 className="titulos">Comida Favorita:</h3>
            <p>Ensalada</p>
            <h3 className="titulos">Cumpleaños:</h3>
            <p>18 de enero</p>
            <h3 className="titulos">Sub-Area Favorita:</h3>
            <p>Soporte T.I / Programación para Web </p>
            <h3 className="titulos">Instagram:</h3>
            <p className="links"><a href="https://www.instagram.com/andy.reyyes">@andy.reyyes</a></p>
            <a href="/gen24" className="bak">Volver</a>
            </div>
            <Image width={500}
      height={500} src="./foca.jpg" alt="chi" className="animal"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
