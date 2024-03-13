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
          <Image src="./Sabo.png" alt="chi" className="card pfp"/>
          <div className="grid2">
            <h1>Erick Saborío</h1>
            <h3 className="titulos">Descripción:</h3>
            <p>🌧️¡Hola! Esto es un poco de mí, soy una persona que le gusta reír mucho, mis cantantes favs son Powfu y Rojuu, me encanta el anime, amo dormir, jugar fut y hacer deporte en general, disfruto pasar con mis amigos ,me gusta siempre tratar de dar mi lado alegre incluso cuando las cosas vayan mal. Y si tengo que poner algo sobre la especialidad diría que tengo afición por el diseño y el mantenimiento de equipos, espero que puedas encontrar tu mejor versión en esta maravillosa familia informática 🎀</p>
            <p className="easteregg">Nota del editor: El hombre me dono un riñon, es activo donador de las obras del espiritu santo y organizaciónes en contra de la trata de personas, hace voluntariado y una vez salvo a una señora de morir por un trenm, ademas es monagillo</p>
            <div className="an">
            <div>
            <h3 className="titulos">Color Favorito:</h3>
            <p className="color">Negro</p>
            <h3 className="titulos">Animal Favorito:</h3>
            <p>Koala</p>
            <h3 className="titulos">Comida Favorita:</h3>
            <p>Lasagna</p>
            <h3 className="titulos">Cumpleaños:</h3>
            <p>19 de Noviembre</p>
            <p className="easteregg">Nota del editor: Nacio en el mejor mes y en el dia del hombre, ese dia salvo la economia francesa y obacionaron a CR7 en el Santiago Bernabeu</p>
            <h3 className="titulos">Sub-Area Favorita:</h3>
            <p>Diseño</p>
            <h3 className="titulos">Instagram:</h3>
            <p className="links"><a href="https://www.instagram.com/erick_sabo">@erick_sabo</a></p>
            <a href="/gen24" className="bak">Volver</a>
            </div>
            <Image src="./koala.jpg" alt="chi" className="animal"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
