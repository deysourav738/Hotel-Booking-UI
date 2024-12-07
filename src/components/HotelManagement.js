import React, { useState, useEffect } from "react";

const HotelManagement = () => {
  const [hotels, setHotels] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    description: "",
    amenities: "",
    photos: [], // Added for storing photos
  });
  const [editingHotel, setEditingHotel] = useState(null);

  // Fetch hotels on component mount
  useEffect(() => {
    fetchHotels();
  }, []);

  const fetchHotels = async () => {
    try {
      // Fetch hotels from backend API
      // const response = await axios.get("/api/hotels");
      // setHotels(response.data);
    } catch (error) {
      console.error("Error fetching hotels:", error);
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCreate = () => {
    setEditingHotel(null);
    setFormData({
      name: "",
      location: "",
      description: "",
      amenities: "",
      photos: [], // Reset photos when creating a new hotel
    });
    setShowForm(true);
  };

  const handleEdit = (hotel) => {
    setEditingHotel(hotel.hotelId);
    setFormData({
      name: hotel.name,
      location: hotel.location,
      description: hotel.description,
      amenities: hotel.amenities,
      photos: hotel.photos || [], // Assuming hotel has a photos field
    });
    setShowForm(true);
  };

  const handleDelete = async (hotelId) => {
    try {
      // Delete hotel via API
      // await axios.delete(`/api/hotels/${hotelId}`);
      fetchHotels(); // Refresh the list after deletion
    } catch (error) {
      console.error("Error deleting hotel:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      // Add form fields to FormData object
      for (const key in formData) {
        if (formData.hasOwnProperty(key)) {
          if (key === "photos") {
            formData.photos.forEach((photo) => {
              formDataToSend.append("photos", photo); // Add each photo file
            });
          } else {
            formDataToSend.append(key, formData[key]);
          }
        }
      }

      if (editingHotel) {
        // Update hotel with photos
        // await axios.put(`/api/hotels/${editingHotel}`, formDataToSend);
      } else {
        // Create new hotel with photos
        // await axios.post("/api/hotels", formDataToSend);
      }

      fetchHotels(); // Refresh the list
      setShowForm(false);
    } catch (error) {
      console.error("Error saving hotel:", error);
    }
  };

  const handlePhotoChange = (e) => {
    setFormData({
      ...formData,
      photos: Array.from(e.target.files), // Store selected files as an array
    });
  };

  return (
    <div className="hotel-management">
      <header>
        <h1>Hotel Management</h1>
        <button onClick={handleCreate} className="create-button">
          Create Hotel
        </button>
      </header>

      {showForm ? (
        <div className="hotel-form">
          <h2>{editingHotel ? "Edit Hotel" : "Create Hotel"}</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-field">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="location">Location:</label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="description">Description:</label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-field">
              <label htmlFor="amenities">Amenities:</label>
              <input
                type="text"
                id="amenities"
                name="amenities"
                value={formData.amenities}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-field">
              <label htmlFor="photos">Upload Photos:</label>
              <input
                type="file"
                id="photos"
                name="photos"
                accept="image/*"
                multiple
                onChange={handlePhotoChange}
              />
            </div>

            <div className="form-actions">
              <button type="submit" className="save-button">
                Save
              </button>
              <button
                type="button"
                className="cancel-button"
                onClick={() => setShowForm(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="hotel-list">
          <h2>Hotels</h2>
          {hotels.map((hotel) => (
            <div key={hotel.hotelId} className="hotel-item">
              <h3>{hotel.name}</h3>
              <p>{hotel.location}</p>
              <p>{hotel.description}</p>
              <p>Amenities: {hotel.amenities}</p>
              <button
                onClick={() => handleEdit(hotel)}
                className="edit-button"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(hotel.hotelId)}
                className="delete-button"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HotelManagement;