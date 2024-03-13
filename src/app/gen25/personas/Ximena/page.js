"use client";
import Image from "next/image";
const UnoptimizedImage = (props) => {
  return <Image {...props} unoptimized />
}


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
          <UnoptimizedImage width={500}
      height={500} src="./Ximena.png" alt="chi" className="card pfp"/>
          <div className="grid2">
            <h1>Ximena Baltodano</h1>
            <h3 className="titulos">Descripción:</h3>
            <p>Me gusta mucho la programación, me encantaría dedicarme en esta área, por otro lado ir por el camino de la robotica es mi mayor sueño, aunque en nuestro país no se vea mucho.</p>
            <br></br>
            <div className="an">
            <div>
            <h3 className="titulos">Color Favorito:</h3>
            <p className="color">Azul</p>
            <h3 className="titulos">Animal Favorito:</h3>
            <p>Perros</p>
            <h3 className="titulos">Comida Favorita:</h3>
            <p>Espaguetis</p>
            <h3 className="titulos">Cumpleaños:</h3>
            <p>3 de Febrero</p>
            <h3 className="titulos">Sub-Area Favorita:</h3>
            <p>Programación</p>
            <h3 className="titulos">Instagram:</h3>
            <p className="links"><a href="https://www.instagram.com/Ximena_xirinachs">@Ximena_xirinachs</a></p>
            <a href="/gen25" className="bak">Volver</a>
            </div>
            <UnoptimizedImage width={500}
      height={500} src="./estoycansado.jpg" alt="chi" className="animal"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
