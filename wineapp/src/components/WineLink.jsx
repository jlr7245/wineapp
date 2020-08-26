import React from 'react';

const WineLink = (props) => {
  return (
  <h3>{props.wine.name}, {props.wine.year}</h3>
  )
}

export default WineLink;
