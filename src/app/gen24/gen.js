// components/Card.js

import React from 'react';
import Image from "next/image";
const UnoptimizedImage = (props) => {
  return <Image {...props} unoptimized />
}

const Card = ({ imgSrc, name, description, href }) => {
  return (
    <div className="card-gen" href={href}>
      <UnoptimizedImage width={500}
      height={500} alt={name} src={imgSrc} className="imas"/>
      <h2>{name}</h2>
      <p>{description}</p><a href={href} className="leer-mas">Leer más...</a>
      <div className='chisus'></div>
    </div>
  );
};

export default Card;