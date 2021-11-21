import React, { useState } from 'react';
import './Card.css';

const Card = (props) => {
  const [detailViewToggle, setDetailViewToggle] = useState(false);
  let imgUrl = `./cards/${props.img}`;
  let divStyle = '';
  let display = '';
  if (!detailViewToggle) {
    display = <div></div>;
    divStyle = {
      backgroundImage: 'url(' + imgUrl + ')',
    };
  } else {
    if (props.arcana === 'Major Arcana') {
      display = (
        <div>
          <h3>{props.archetype}</h3>
          <p>Element: {props.element}</p>
          <p>Suit: {props.suit}</p>
          <p>Numerology: {props.numerology}</p>
          <p>{props.myth}</p>
        </div>
      );
      divStyle = {
        backgroundImage:
          'linear-gradient(rgba(255,255,255,0.75),rgba(255,255,255,0.75)),url(' +
          imgUrl +
          ')',
      };
    } else {
      display = (
        <div>
          <p>Suit: {props.suit}</p>
          <p>Numerology: {props.numerology}</p>
          <p>Astological Signs: {props.astrology}</p>
          <p> {props.affirmation}</p>
        </div>
      );
      divStyle = {
        backgroundImage:
          'linear-gradient(rgba(255,255,255,0.75),rgba(255,255,255,0.75)),url(' +
          imgUrl +
          ')',
      };
    }
  }

  return (
    <div
      className="card-container"
      onClick={(e) => setDetailViewToggle(!detailViewToggle)}
    >
      <div className="card-content">
        <h1>{props.name}</h1>
        <h2>{props.arcana}</h2>
        <div className="img-container" style={divStyle}>
          <div className="card-data">{display}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
