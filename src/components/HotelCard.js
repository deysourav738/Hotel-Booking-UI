// src/components/HotelCard.jsx
import React, { useState } from 'react';

const HotelCard = ({ hotel }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [isCheckInAvailable, setIsCheckInAvailable] = useState(true);
  const [isCheckOutAvailable, setIsCheckOutAvailable] = useState(true);

  const handleImageChange = (index) => {
    setCurrentImageIndex(index);
  };

  // Date validation function
  const isDateAvailable = (date) => {
    // For simplicity, let's assume hotels have availability from today onwards.
    const today = new Date();
    const selectedDate = new Date(date);
    return selectedDate >= today;
  };

  const handleCheckInChange = (e) => {
    const date = e.target.value;
    setCheckInDate(date);
    setIsCheckInAvailable(isDateAvailable(date)); // Check availability for check-in date
  };

  const handleCheckOutChange = (e) => {
    const date = e.target.value;
    setCheckOutDate(date);
    setIsCheckOutAvailable(isDateAvailable(date)); // Check availability for check-out date
  };

  return (
    <div className="hotel-card">
      <div className="hotel-card-header">
        <div className="hotel-card-carousel">
          {hotel.photos && hotel.photos.map((photo, index) => (
            <img
              key={index}
              src={photo}
              alt={`Hotel ${hotel.name} - Image ${index + 1}`}
              style={{ display: currentImageIndex === index ? 'block' : 'none' }}
            />
          ))}
        </div>
      </div>
      <div className="hotel-card-body">
        <div className="hotel-name">{hotel.name}</div>
        <div className="hotel-location">{hotel.location}</div>
        <div className="hotel-amenities">
          {hotel.amenities && hotel.amenities.map((amenity, index) => (
            <div className="amenity" key={index}>
              {amenity}
            </div>
          ))}
        </div>
        <div className="hotel-rating">Rating: {hotel.rating}★</div>
        
        {/* Date Selection Section */}
        <div className="date-selection">
          <div className="date-inputs">
            <label htmlFor="check-in">Check-in:</label>
            <input
              type="date"
              id="check-in"
              value={checkInDate}
              onChange={handleCheckInChange}
              min={new Date().toISOString().split("T")[0]} // Minimum is today's date
              disabled={!isCheckInAvailable} // Disable if date is not available
            />
          </div>

          <div className="date-inputs">
            <label htmlFor="check-out">Check-out:</label>
            <input
              type="date"
              id="check-out"
              value={checkOutDate}
              onChange={handleCheckOutChange}
              min={checkInDate} // Ensure check-out cannot be before check-in
              disabled={!isCheckOutAvailable} // Disable if date is not available
            />
          </div>
        </div>

        <div className="room-selection">
          <label htmlFor="room-type">Select Room:</label>
          <select id="room-type" name="room-type">
            {hotel.roomTypes && hotel.roomTypes.map((room, index) => (
              <option key={index} value={room.type}>
                {room.roomType} - ${room.price}/night
              </option>
            ))}
          </select>
        </div>
        
        <div className="price">
          Price: ${hotel.roomTypes[0].price} /night
        </div>
        
        <button className="booking-button">Book Now</button>
      </div>
    </div>
  );
};

export default HotelCard;
