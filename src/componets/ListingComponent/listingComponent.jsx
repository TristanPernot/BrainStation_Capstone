import './listingComponent.scss'
import Thumbnail from '../../assests/Images/Listingthumbnails.jpg'
import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import data from "../../data/data.json"


function ListComponent(){
      const [listings, setListings] = useState(data);


        console.log(data)

    return(
        <div className="outercontainer">
            {listings.map(listing => (
                <div key={listing.id}>
                    <Link to={`/listings/${listing.id}`} className='link'>
                        <div className="container">
                            <img src={`${Thumbnail}`} alt='dnd-thumbnails' className='container__img'/>
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
                                <p className="container__text--important">
                                    {listing.online ? '*Online' : ' '}
                                </p>
                            </div>
                        </div>
                    </Link>
                </div>
            ))}
        </div>

    );
}

export default ListComponent