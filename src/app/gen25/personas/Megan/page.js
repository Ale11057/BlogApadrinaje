"use client";
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
          <img src="/Megan.png" alt="chi" className="card pfp"></img>
          <div className="grid2">
            <h1>Megan Cuenca</h1>
            <h3 className="titulos">Descripción:</h3>
            <p>
              Soy Megan, me gusta mucho todo lo que tenga que ver con tecnología
              e informática por eso entre a dw, me encanta el diseño, leer,
              pintar, escribir, la poesía, me considero muy creativa. También me
              gusta todo lo que tenga que ver con soporte TI y desarmar e
              examinar las computadoras. Me gustaría estudiar algo relacionado
              con el diseño, soporte TI o bases de datos y estar en un trabajo
              que disfrute.
            </p>
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
              <img
                src="/perro-y-gato.jpg"
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
