import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import data from "../../data/data.json";
import './listingComponent.scss';
import Thumbnail from "../../assests/Images/Listingthumbnails.jpg";

function ListComponent() {
  const [listings, setListings] = useState(data);

  useEffect(() => {
    const game = localStorage.getItem('game');

    if (game) {
      const parsedGame = JSON.parse(game);
      const result = data.find((item) => item.id === parsedGame.id);
      if (!result) {
        data.push(parsedGame);
        setListings([...data]);
      }
    }
  }, []);

  return (
    <div className="outercontainer">
      {listings.map(listing => (
        <div key={listing.id}>
          <Link to={`/listings/${listing.id}`} className='link'>
            <div className="container">
              <img src={Thumbnail} alt='dnd-thumbnails' className='container__img' />
              <h4 className="container__title">
                {listing.title}
              </h4>
              <div className='container__secondary'>
                <p className="container__text">
                  {listing.author}
                </p>
                <p className="container__text">
                  {listing.gametype}
                </p>
                {listing.online === 'online' && <p className="container__text--important">*Online</p>}
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ListComponent;
