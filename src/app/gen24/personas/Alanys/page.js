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
      height={500} src="./Ala.png" alt="chi" className="card pfp"/>
          <div className="grid2">
            <h1>Alanys Soto</h1>
            <h3 className="titulos">Descripción:</h3>
            <p>Me encanta ayudar a los demás, me considero una persona muy tranquila y amigable, me gusta crear un ambiente tranquilo y acogedor en el que todos se puedan sentir cómodos. Soy creativa y me fascina la autenticidad. Disfruto del desarrollo web sin embargo me apasiona la astronomía como un ámbito laboral a futuro. En conclusión, soy una mezcla única de habilidades técnicas, creatividad y un espíritu generoso que encuentra alegría tanto en ayudar a los demás como en explorar los misterios del cosmos. 🪐</p>
            <div className="an">
            <div>
            <h3 className="titulos">Color Favorito:</h3>
            <p className="color"><span className="color1">Blanco</span> y <span className="color2">Navy blue</span></p>
            <h3 className="titulos">Animal Favorito:</h3>
            <p>Gatos</p>
            <h3 className="titulos">Comida Favorita:</h3>
            <p>Ñoquis</p>
            <h3 className="titulos">Cumpleaños:</h3>
            <p>13 de Marzo</p>
            <h3 className="titulos">Sub-Area Favorita:</h3>
            <p>Diseño de software</p>
            <h3 className="titulos">Instagram:</h3>
            <p className="links"><a href="https://www.instagram.com/alanys.soto">@alanys.soto</a></p>
            <a href="/gen24" className="bak">Volver</a>
            </div>
            <Image width={500}
      height={500} src="./kira.jpeg" alt="chi" className="animal"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
