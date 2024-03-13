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
          <img src="./Derian.png" alt="chi" className="card pfp"></img>
          <div className="grid2">
            <h1>Derian Martínez</h1>
            <h3 className="titulos">Descripción:</h3>
            <p>Me cuesta socializar y no entro en confianza tan rápido pero cuando me siento cómodo me río de todo, tengo un humor muy particular y soy muy paciente, soy reservado y empático. Quiero ser un programador senior, ser full-stack y sino me gustaría especializarme en un framework de JS o Java, también me fascina todo el ámbito de telecomunicaciones.</p>
            <br></br>
            <div className="an">
            <div>
            <h3 className="titulos">Color Favorito:</h3>
            <p className="color">Celeste</p>
            <h3 className="titulos">Animal Favorito:</h3>
            <p>Quokka</p>
            <h3 className="titulos">Comida Favorita:</h3>
            <p>Pizza de Papa Johns</p>
            <h3 className="titulos">Cumpleaños:</h3>
            <p>02 de Enero</p>
            <h3 className="titulos">Sub-Area Favorita:</h3>
            <p>Programación</p>
            <h3 className="titulos">Instagram:</h3>
            <p className="links"><a href="https://www.instagram.com/derian.martinez.1675">@derian.martinez.1675</a></p>
            <a href="/gen24" className="bak">Volver</a>
            </div>
            <img src="./Quokka.jpg" alt="chi" className="animal"></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
