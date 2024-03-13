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
          <img src="./chan.png" alt="chi" className="card pfp"></img>
          <div className="grid2">
            <h1>Jeremy Chan</h1>
            <h3 className="titulos">Descripción:</h3>
            <p>Nerdo, no sé que más. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus arcu</p>
            <div className="an">
            <div>
            <h3 className="titulos">Color Favorito:</h3>
            <p className="color">Verde menta (#96cfbe)</p>
            <p className="easteregg">Nota del editor: En efecto, codigo hexadecimal 🤓👆</p>
            <h3 className="titulos">Animal Favorito:</h3>
            <p>Orangután (simios en general) 🦧</p>
            <h3 className="titulos">Comida Favorita:</h3>
            <p>Papas fritas</p>
            <h3 className="titulos">Cumpleaños:</h3>
            <p>14 de Julio</p>
            <h3 className="titulos">Sub-Area Favorita:</h3>
            <p>Programación</p>
            <h3 className="titulos">Instagram:</h3>
            <p className="links"><a href="https://www.instagram.com/jeremy_chan_rojas">@jeremy_chan_rojas</a></p>
            <a href="/gen24" className="bak">Volver</a>
            </div>
            <img src="./mono.jpg" alt="chi" className="animal"></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
