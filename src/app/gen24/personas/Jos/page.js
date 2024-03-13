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
          <span className="pp"> Gen 24'</span>
        </h1>
        <div className="cont">
          <UnoptimizedImage width={500}
      height={500} src="./Jos.png" alt="chi" className="card pfp"/>
          <div className="grid2">
            <h1>Jostin Miranda Corrales</h1>
            <h3 className="titulos">Descripción:</h3>
            <p>
              Hola hola! Me considero un líder nato con un gran gusto por la
              tecnología y sus ramas desde niño. Disfruto enormemente la
              sub-área de Soporte TI por sus funciones y plan de estudio tan
              variado. Conforme han pasado estos años, he descubierto mi
              personalidad extrovertida y social, por lo que también soy una
              persona muy comunicativa incluso en el inglés. A raíz de esto,
              siempre estoy dispuesto a ayudar y guiar a los demás, en donde
              incluso veo un posible camino en la administración de negocios por
              mis cualidades. Me gusta mucho la música, bailar, viajar y el
              tiempo de calidad en cuestión :)
            </p>
            <div className="an">
            <div>
            <h3 className="titulos">Color Favorito:</h3>
            <p className="color">Rojo/<span className="color4">Vino  - </span><span className="color2">Beige</span><span className="color3"> - Azul</span></p>
            <h3 className="titulos">Animal Favorito:</h3>
            <p>Panda - Perro</p>
            <h3 className="titulos">Comida Favorita:</h3>
            <p>Italiana</p>
            <h3 className="titulos">Cumpleaños:</h3>
            <p>	30 de Agosto del 2006</p>
            <h3 className="titulos">Sub-Area Favorita:</h3>
            <p>Soporte TI</p>
            <h3 className="titulos">Instagram:</h3>
            <p className="links"><a href="https://www.instagram.com/jmiranda08/">@jmiranda08</a></p>
            <a href="/gen24" className="bak">Volver</a>
            </div>
            <UnoptimizedImage width={500}
      height={500} src="./JosA.jpg" alt="chi" className="animal"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
