// components/Card.js

import React from 'react';

const Card = ({ imgSrc, name,name2, description, href }) => {
  return (
    <div className="card-gen" href={href}>
      <Image alt={name} src={imgSrc} className="imas"/>
      <h2>{name}</h2>
      <p>{description}</p><a href={href} className="leer-mas">Leer más...</a>
      <div className='chisus'></div>
    </div>
  );
};

export default Card;