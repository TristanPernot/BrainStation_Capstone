import React, { useEffect } from 'react';
import { useState } from "react";
import { useParams } from 'react-router-dom';
import data from "../../data/data.json"


function ListingPage(){
    const {id} = useParams();
    const [listing] = useState(data)
    const [singleItem, setSingleItem] = useState();

    const getSelectedItem = (id) => {
        const result = listing.find((item) => item.id === id)
        setSingleItem(result)
    }

    useEffect(() => {
        if(id) {
            getSelectedItem(parseInt(id))
        }
    }, [id])
    console.log("id params", id)
    console.log(data)
    console.log("single item", singleItem)

  return (
    <div>

        <h1>{singleItem?.title}</h1>
        <p>Description: {singleItem?.description}</p>
        <p>Game Master: {singleItem?.author}</p>
        <p>Game Type: {singleItem?.gametype}</p>
        <p>Prefered Contact Method: {singleItem?.contact}</p>
        <p>This game is {singleItem?.online ? 'Online' : 'Offline'}</p>
    </div>
  );
};

export default ListingPage;
