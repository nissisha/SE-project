import React,{useState,useEffect} from 'react';
import './viewListings.css'; 
import axios from '../../axios';

const ListingsDisplay = () => {

    const [listings, setListings] = useState([]);
    
    useEffect(() => {
        const fetchListings = async () => {
            try{
                const res = await axios.get("/provider/listings");
                setListings(res.data.listings);
                console.log(res.data)
            }catch(error){
                console.log(error);
            }
        }
        fetchListings();
    },[]);
    return (
        <div className="listingsContainer">
            {listings&&listings.map((listing, index) => (
                <div key={index} className="listingCard">
                <h3>{listing.headLine}</h3>
                <p>Description: {listing.description}</p>
                <p>Provider: {listing.provider.name}</p>
                <p>Use by Date: {listing.useBy.slice(0,4)}/{listing.useBy.slice(5,7)}/{listing.useBy.slice(8,10)}</p>
                </div>
            ))}
        </div>
    );
};

export default ListingsDisplay;
