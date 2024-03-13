"use client";
import Image from "next/image";
import Splash from "./components/splash.js";
import { Container } from "postcss";
export default function Home() {
  return (
    <>
      <Splash />
      <ul>
        <h4>Departamento de informática</h4>
        <li>
          <a class="active" href="#home">
            Gen 24'
          </a>
        </li>
        <li>
          <a href="#about">Gen 25'</a>
        </li>
      </ul>
      <div className="header">
        <img src="./Banner.png" alt="chi" className="landing"></img>
        <h1 className="Title">BIENVENID@ AL DEPARTAMENTO DE INFORMATICA</h1>
        <p>
          ¡En el departamento de informática, formamos una familia donde la
          inclusión y el apoyo son nuestros pilares! Sabemos lo emocionante y a
          veces desafiante que puede ser sumergirse en el mundo de la
          tecnología.
        </p>
      </div>
      <div className="main-content">
        <div className="content">
          <h1>¡Estamos contigo en cada paso del camino!</h1>
          <p>
            Por ello,a cada un@ será asignad@ una pareja de padrinos que
            estará lista para compartir de su conocimiento, ayudarte a alcanzar
            tus metas y acompañarte durante tu experiencia en el Cotepecos.
          </p>
          <div>
            <div className="grid">
              <div className="card">
              <img src="./1.png" alt="" className="ima"></img>
              </div>
              <div className="card">
              <img src="./2.png" alt="" className="ima"></img>
              </div>
              <div className="card">
                <img src="./3.png" alt="" className="ima"></img>
              </div>
            </div>
          </div>
        </div>
        <div className="content traka">
            <h2>
              Imagina tener a alguien a quien acudir cuando necesites consejo,
              inspiración o simplemente una charla amigable sobre tus proyectos
              y desafíos. ¡Eso es exactamente lo que te brindaremos en nuestro
              acogedor departamento!
            </h2>
            <br></br>
            <div className="grid">
              <div className="banner-container">
                <img src="./Landing.jpg" alt="chi" className="banner card"></img>
              </div>
              <div className="banner2-container">
                <img
                  src="./Banner2.png"
                  alt="chi"
                  className="banner card b2"
                ></img>
              </div>
            </div>
          </div>
        <div className="content2 c2">
          <div className="content2">
              <br></br>
              <div className="logo-container">
                <img src="./logo.png" alt="chi" className="info"></img>
              </div>
              <h1>
                ¿Estás preparad@ para conocer a quiénes podrían ser tus
                padrinos?
              </h1>
              <p>
                Estamos emocionados de presentarte a personas increíbles que
                están ansiosas por ser tu guía en este emocionante viaje hacia
                el éxito en el mundo de la informática.
              </p>
              <div class="container">
                <div class="btn">
                  <a href="gen24">Gen 24'</a>
                </div>
                <div class="btn">
                  <a href="gen25">Gen 25'</a>
                </div>
              </div>
              <br></br>
              <br></br>
            </div> 
          </div>
      </div>
    </>
  );
}
