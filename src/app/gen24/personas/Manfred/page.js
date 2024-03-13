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
          <Image src="./Manfler.png" alt="chi" className="card pfp"/>
          <div className="grid2">
            <h1>Manfler Mantilla Meza</h1>
            <h3 className="titulos">Descripción:</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit urna, nibh
              metus inceptos cubilia augue blandit fringilla lectus, non class
              mauris penatibus nascetur venenatis eget. Orci nullam dictumst
              nisl mollis phasellus pharetra non, aliquam gravida platea laoreet
              sollicitudin ultrices tristique, dignissim quis rutrum nam lectus
              morbi. Et primis mollis quam ad netus cursus, praesent lectus per
              natoque penatibus auctor at, dui aenean scelerisque ornare
              integer. Et vehicula non vitae netus iaculis torquent mus id
              dictum lobortis suspendisse, ad taciti etiam pharetra urna
              ullamcorper gravida auctor vestibulum quis. Rhoncus diam tempor
              condimentum auctor ornare potenti taciti, habitasse dictumst
              congue quam ad mollis litora magna, vestibulum ac non a volutpat
              lacus. Sociis euismod augue blandit id mi cum senectus tellus
              facilisis, ad bibendum imperdiet consequat metus risus pulvinar
              nec, pellentesque morbi enim class mattis sodales justo phasellus.
              <span className="negrita">Hableme mejor.</span>
            </p>
              <br></br>
            <div className="an">
              <div>
                <h3 className="titulos">Color Favorito:</h3>
                <p className="color">Azul oscuro</p>
                <h3 className="titulos">Animal Favorito:</h3>
                <p>Tiburon blanco</p>
                <h3 className="titulos">Comida Favorita:</h3>
                <p>Torta chilena</p>
                <h3 className="titulos">Cumpleaños:</h3>
                <p>4 de Marzo</p>
                <h3 className="titulos">Sub-Area Favorita:</h3>
                <p>Soporte TI</p>
                <h3 className="titulos">Instagram:</h3>
                <p className="links">
                  <a href="https://www.instagram.com/mgm.meza">@mgm.meza</a>
                </p>
                <a href="/gen24" className="bak">
                  Volver
                </a>
              </div>
              <Image
                src="./tiburoncin.jpg"
                alt="chi"
                className="animal"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
