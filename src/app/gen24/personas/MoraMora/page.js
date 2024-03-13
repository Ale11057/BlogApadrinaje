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
          <Image src="./Stacey.png" alt="chi" className="card pfp"/>
          <div className="grid2">
            <h1>Stacey Mora Mora</h1>
            <h3 className="titulos">Descripción:</h3>
            <p>Soy bastante seria hasta que entro en confianza y parezco burro el de shrek, a pesar de ser de las más pequeñas soy de las mayores y soy muy buena escuchando, una mujer que resuelve. El cole me dio un gran crecimiento en muchos ámbitos y siempre he tenido un frente muy definido, logro cada meta que me propongo a pesar de cada adversidad.</p>
            <br></br>
            <div className="an">
            <div>
            <h3 className="titulos">Color Favorito:</h3>
            <p className="color">Verde</p>
            <h3 className="titulos">Animal Favorito:</h3>
            <p>Perros, gatos y vaquitas</p>
            <h3 className="titulos">Comida Favorita:</h3>
            <p>Pasta y pizza 🍕</p>
            <h3 className="titulos">Cumpleaños:</h3>
            <p>15 de diciembre</p>
            <h3 className="titulos">Sub-Area Favorita:</h3>
            <p>Progra y diseño</p>
            <h3 className="titulos">Instagram:</h3>
            <p className="links"><a href="https://www.instagram.com/_moritam_">@_moritam_</a></p>
            <a href="/gen24" className="bak">Volver</a>
            </div>
            <Image src="./vaca.jpg" alt="chi" className="animal"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
