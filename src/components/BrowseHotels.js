// src/components/BrowseHotels.jsx
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import HotelCard from './HotelCard'; // Import the HotelCard component
import '../styles/BrowseHotels.css'; // Import custom styles
import { get_all_hotels_api } from '../utils/api';

const BrowseHotels = () => {
  const [hotels, setHotels] = useState([]);
  const [filteredHotels, setFilteredHotels] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  // Extract query parameters from the URL
  const queryParams = new URLSearchParams(location.search);
  const locationFilter = queryParams.get('location');
  const dateFilter = queryParams.get('date');
  const roomsFilter = queryParams.get('rooms');

  useEffect(()=>{
    async function fetchHotels() {
      let resp = await get_all_hotels_api();
      if(resp) setHotels(resp);
    }
    fetchHotels();
  },[]);

  useEffect(() => {
    // Filter hotels based on the search parameters
    const filtered = hotels.filter((hotel) => {
      const matchesLocation = locationFilter ? hotel.location.toLowerCase().includes(locationFilter.toLowerCase()) : true;
      return matchesLocation;
    });

    setFilteredHotels(filtered);
  }, [locationFilter, hotels]);

  return (
    <div className="browse-hotels-container">
      <div className="back-button-container">
        <button className="back-button" onClick={() => navigate('/')}>
          &#8592; Back to Home
        </button>
      </div>

      <h1 className="browse-title">Browse Hotels</h1>
      <div className="hotel-cards-container">
        {filteredHotels.length === 0 ? (
          <p>No hotels found for the selected filters.</p>
        ) : (
          filteredHotels.map((hotel, index) => (
            <HotelCard key={index} hotel={hotel} />
          ))
        )}
      </div>
    </div>
  );
};

export default BrowseHotels;
