import React, { useEffect, useState } from 'react';

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
            <h3>
              {wine.name}, {wine.year}
            </h3>
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