import React from 'react';

const WineLink = (props) => {
  return (
  <p>{props.wine.name}, {props.wine.year}</p>
  )
}

export default WineLink;