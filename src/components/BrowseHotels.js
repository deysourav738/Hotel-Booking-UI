// src/components/BrowseHotels.jsx
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import HotelCard from './HotelCard'; // Import the HotelCard component
import '../styles/BrowseHotels.css'; // Import custom styles

const BrowseHotels = () => {
  const [hotelData, setHotelData] = useState([]);
  const [filteredHotels, setFilteredHotels] = useState([]);
  const location = useLocation(); // To access the current location (URL)
  const navigate = useNavigate();  // To handle navigation

  // Extract query parameters from the URL
  const queryParams = new URLSearchParams(location.search);
  const locationFilter = queryParams.get('location');
  const dateFilter = queryParams.get('date');
  const roomsFilter = queryParams.get('rooms');

  // Sample hotel data (replace with actual data)
  const hotels = [
    {
      name: 'Hotel Sunshine',
      location: 'New York, NY',
      photos: ['https://via.placeholder.com/150', 'https://via.placeholder.com/150', 'https://via.placeholder.com/150'],
      amenities: ['Free Wi-Fi', 'Swimming Pool', 'Gym', 'Free Breakfast'],
      rating: 4.5,
      roomTypes: [
        { type: 'Single', price: 100 },
        { type: 'Double', price: 150 },
        { type: 'Suite', price: 250 },
      ],
    },
    {
      name: 'Beach Resort',
      location: 'Los Angeles, CA',
      photos: ['https://via.placeholder.com/150', 'https://via.placeholder.com/150', 'https://via.placeholder.com/150'],
      amenities: ['Beachfront', 'Free Wi-Fi', 'Pool', 'Spa'],
      rating: 4.7,
      roomTypes: [
        { type: 'Single', price: 120 },
        { type: 'Double', price: 170 },
        { type: 'Suite', price: 300 },
      ],
    },
    // Add more hotels here...
  ];

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
