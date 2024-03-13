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
      height={500} src="./pia.png" alt="chi" className="card pfp"/>
          <div className="grid2">
            <h1>Piarella Sandoval</h1>
            <h3 className="titulos">Descripción:</h3>
            <p>Me apasiona el diseño y la creatividad, con un amor especial por crear presentaciones y páginas web. Siempre me esfuerzo al máximo en cada tarea, buscando la perfección y la excelencia en todo lo que hago. Mi enfoque en el desarrollo profesional se centra en el deseo constante de aprender y mejorar mis habilidades en programación, así como en otras áreas relacionadas con mi campo. Busco oportunidades que me permitan crecer como persona y profesional, contribuyendo con mi creatividad y dedicación a proyectos que inspiren y generen un impacto positivo en la sociedad y en el mundo que me rodea. (⁠.⁠ ⁠❛⁠ ⁠ᴗ⁠ ⁠❛⁠.⁠)</p>
            <div className="an">
            <div>
            <h3 className="titulos">Color Favorito:</h3>
            <p className="color">Rosado</p>
            <h3 className="titulos">Animal Favorito:</h3>
            <p>Gato</p>
            <h3 className="titulos">Comida Favorita:</h3>
            <p>Pizza 🍕</p>
            <h3 className="titulos">Cumpleaños:</h3>
            <p>31 de Agosto</p>
            <h3 className="titulos">Sub-Area Favorita:</h3>
            <p>Programación Web</p>
            <h3 className="titulos">Instagram:</h3>
            <p className="links"><a href="https://www.instagram.com/romantinie">@romantinie</a></p>
            <a href="/gen24" className="bak">Volver</a>
            </div>
            <UnoptimizedImage width={500}
      height={500} src="./Cat1.jpeg" alt="chi" className="animal"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
