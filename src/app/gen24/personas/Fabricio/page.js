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
          <img
            src="./Fabricio.png"
            alt="chi"
            className="card pfp"
          ></img>
          <div className="grid2">
            <h1>Fabricio Solis</h1>
            <h3 className="titulos">Descripción:</h3>
            <p>
              Soy una persona bastante imperactiva, alegre, una persona que
              siempre tiene que estar haciendo algo porq sino me aburro y
              probablemente me duerma. Me gusta mucho jugar juegos normalmente
              juego fortnite, valorant, uncharted, bloodborne, entre otros
              porque son muchos, me gusta mucho andar en bici (mountain bike).
              me gusta el gym pero ya no voy por tiempo y pereza :( Y para ir
              terminando me gusta mucho que las personas sean leales y honestas
              y que no sean doble caras y como dicen hay que disfrutar la vida
              como si fuera el ultimo dia y mi frase es "Para ser viejo y sabio,
              hay que ser joven y estupido"
            </p>
            <br></br>
            <div className="an">
              <div>
                <h3 className="titulos">Color Favorito:</h3>
                <p className="color"><span className="color1">Rojo</span> o <span className="color2">morado</span></p>
                <h3 className="titulos">Animal Favorito:</h3>
                <p>Águila</p>
                <h3 className="titulos">Comida Favorita:</h3>
                <p>Los mariscos o lo que tenga que ver con el mar</p>
                <h3 className="titulos">Cumpleaños:</h3>
                <p>24 de Septiembre</p>
                <h3 className="titulos">Sub-Area Favorita:</h3>
                <p>Soporte o progra</p>
                <h3 className="titulos">Instagram:</h3>
                <p className="links">
                  <a href="https://www.instagram.com/fabrisolve">@fabrisolve</a>
                </p>
                <a href="/gen24" className="bak">
                  Volver
                </a>
              </div>
              <img
                src="./aguila.jpg"
                alt="chi"
                className="animal"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
