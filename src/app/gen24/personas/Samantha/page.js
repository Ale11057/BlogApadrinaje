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
          <img src="./Samantha.png" alt="chi" className="card pfp"></img>
          <div className="grid2">
            <h1>Samantha Rosales</h1>
            <h3 className="titulos">Descripción:</h3>
            <p>Me gusta mucho el skincare, maquillarme, salir de compras, ir a cafeterías y me gustaría estudiar algo relacionado con la especialidad aunque aún lo estoy decidiendo </p>
            <br></br>
            <div className="an">
            <div>
            <h3 className="titulos">Color Favorito:</h3>
            <p className="color">Rosa</p>
            <h3 className="titulos">Animal Favorito:</h3>
            <p>Gatos</p>
            <h3 className="titulos">Comida Favorita:</h3>
            <p>Sushi</p>
            <h3 className="titulos">Cumpleaños:</h3>
            <p>01 de Agosto </p>
            <h3 className="titulos">Sub-Area Favorita:</h3>
            <p>Diseño de Software</p>
            <h3 className="titulos">Instagram:</h3>
            <p className="links"><a href="https://www.instagram.com/samrosaless_">@samrosaless_</a></p>
            <a href="/gen24" className="bak">Volver</a>
            </div>
            <img src="./Car.jpg" alt="chi" className="animal"></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
