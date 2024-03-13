"use client";
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
          <img src="./Isis.png" alt="chi" className="card pfp"></img>
          <div className="grid2">
            <h1>Isis Hernández</h1>
            <h3 className="titulos">Descripción:</h3>
            <p>Soy una persona muy creativa y maternalista, amo cuidar a las personas. Me gusta mucho dibujar y leer libros, los libros que más me gustan son de tipo misterio o suspenso, también me divierte escribir historias. Me gustaría llegar a ser profesora de inglés ya que es mi idioma favorito y amo enseñar. </p>
            <br></br>
            <div className="an">
            <div>
            <h3 className="titulos">Color Favorito:</h3>
            <p className="color"><span className="color1">Morado</span>, <span className="color2">negro</span> y <span className="color3">blanco</span></p>
            <h3 className="titulos">Animal Favorito:</h3>
            <p>Nutrias, ardillas</p>
            <h3 className="titulos">Comida Favorita:</h3>
            <p>Carnes, cheescake </p>
            <h3 className="titulos">Cumpleaños:</h3>
            <p>12 de Octubre</p>
            <h3 className="titulos">Sub-Area Favorita:</h3>
            <p>Diseño software</p>
            <h3 className="titulos">Instagram:</h3>
            <p className="links"><a href="https://www.instagram.com/hanii_kaedehara">@hanii_kaedehara</a></p>
            <a href="/gen24" className="bak">Volver</a>
            </div>
            <img src="./ardilla.jpg" alt="chi" className="animal"></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
