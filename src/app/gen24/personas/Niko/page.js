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
        <Image src="./arg.png" alt="chi" className="arg"/>
          <Image src="./Niko.png" alt="chi" className="card pfp"/>
          <div className="grid2">
            <h1>Nikolas Sánchez</h1>
            <h3 className="titulos">Descripción:</h3>
            <p>
              Profesionalmente me veo en el departamento de soporte tecnico, ya
              que es la sub área donde mejor me va y se me facilita más, sin
              cerrar nunca las demás oportunidades que se presenten. Soy alguien
              con un vibe muy tranquilo (no es que este siempre enojado, mi cara
              es asi), me apasiona el fútbol, siempre me van a ver ahí metido
              jugando y me gusta aconsejar/ayudar siempre que alguien lo
              necesite.
            </p>
            <br></br>
            <div className="an">
              <div>
                <h3 className="titulos">Color Favorito:</h3>
                <p className="color">Azul</p>
                <h3 className="titulos">Animal Favorito:</h3>
                <p>Perro</p>
                <h3 className="titulos">Comida Favorita:</h3>
                <p>Milanesa</p>
                <h3 className="titulos">Cumpleaños:</h3>
                <p>9 de Septiembre </p>
                <h3 className="titulos">Sub-Area Favorita:</h3>
                <p>Soporte</p>
                <h3 className="titulos">Instagram:</h3>
                <p className="links">
                  <a href="https://www.instagram.com/nikolasanchez09">
                    @nikolasanchez09
                  </a>
                </p>
                <a href="/gen24" className="bak">
                  Volver
                </a>
              </div>
              <Image src="./perro.png" alt="chi" className="animal"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
