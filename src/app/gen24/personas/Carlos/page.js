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
          <img src="./Carlos.png" alt="chi" className="card pfp"></img>
          <div className="grid2">
            <h1>Carlos Barboza</h1>
            <h3 className="titulos">Descripción:</h3>
            <p>
              Hola, soy Carlos! Me considero una persona energética y
              apasionante, me gusta mucho los animales, en ellos: perros, gatos,
              vacas, caballos, etc. En cada una de estas encuentro una conexión
              muy profunda. Me gusta mucho ir al gimnasio, ahí es donde moldeo
              mi cuerpo con dedicación. Disfruto compartiendo momentos con
              aquellos que aprecio, y mi lealtad es inquebrantable. No me gusta
              las críticas, el que lo haga en contra mía o de alguna otra
              persona, va a estar entre ojos. Mi proyección profesional,
              visrulbro la dualidad de ser piloto y software engineer,
              explorando la creatividad y la lógica.
            </p>
            <div className="an">
              <div>
                <h3 className="titulos">Color Favorito:</h3>
                <p className="color">Mi color favorito es el <span className="color1">azul</span> y <span className="color2">verde</span>.</p>
                <h3 className="titulos">Animal Favorito:</h3>
                <p>Mi animal favorito es el perro.</p>
                <h3 className="titulos">Comida Favorita:</h3>
                <p>Me gusta mucho comer pastas.</p>
                <h3 className="titulos">Cumpleaños:</h3>
                <p>26 de Septiembre</p>
                <h3 className="titulos">Sub-Area Favorita:</h3>
                <p>Soporte TI</p>
                <h3 className="titulos">Instagram:</h3>
                <p className="links">
                  <a href="https://www.instagram.com/_carlosbarboza_">@_carlosbarboza_</a>
                </p>
                <a href="/gen24" className="bak">
                  Volver
                </a>
              </div>
              <img
                src="./dog.jpg"
                alt="chi"
                className="animal"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
