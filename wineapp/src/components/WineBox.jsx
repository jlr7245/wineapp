import React, { useEffect, useState } from 'react';
import WineLink from './WineLink';

const WineBox = () => {
  const [wineList, setWineList] = useState([]);
  useEffect(() => {
    fetch('http://myapi-profstream.herokuapp.com/api/1e02af/wines')
      .then((res) => res.json())
      .then((res) => {
        setWineList(res);
      });
  }, []);
  return (
    <section>
      {wineList.length ? (
        wineList.map((wine) => (
          <div key={wine.id}>
            <img src={wine.picture} />
            <WineLink wine={wine} />
            <p>
              Made with {wine.grapes} grapes grown in {wine.region},{' '}
              {wine.country}
            </p>
            <p>{wine.description}</p>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </section>
  );
};

export default WineBox;