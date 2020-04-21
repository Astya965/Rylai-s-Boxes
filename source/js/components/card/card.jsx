import React from "react";

const Card = (props) => {
  const {boxinfo} = props;

  return (
    <div className="carousel__item card">
      <img className="card__img" src={boxinfo.img} alt={boxinfo.name}/>
      <h3 className="card__title">{boxinfo.name}</h3>
      <a className="card__link" href="#"></a>
    </div>
  );
}

export default Card;
