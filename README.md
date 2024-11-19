# Hotel Booking UI

Welcome to the **Hotel Booking UI** project! This is a simple, responsive front-end interface for a hotel booking website. It provides users with the ability to browse hotels, filter results based on search criteria, and view detailed information about each hotel. The project includes features such as hotel image carousels, available amenities, room prices, and booking options.

---

## Features

- **Home Page**: 
  - Search functionality to filter hotels by location, date, and room type.
  - Navigation to Login and Sign-Up pages for authentication.

- **Login and Sign-Up Pages**: 
  - User authentication through login and sign-up forms.
  - After successful sign-up or login, the home page will display the user's name.

- **Browse Hotels Page**:
  - Displays hotel cards with detailed information such as:
    - Multiple photos in a carousel.
    - Hotel name and location highlighted.
    - Available amenities (Wi-Fi, pool, gym, etc.).
    - Hotel rating.
    - Prices for different room types.
  - Ability to select room types (Single, Double, Suite) and view prices.
  - Input to select check-in and check-out dates, with availability checks for selected dates.
  - Book Now button to simulate booking.

- **Responsive Design**:
  - The UI is responsive, ensuring a good user experience on both desktop and mobile devices.

---

## Installation

To run this project locally, follow these steps:

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/hotel-booking-ui.git

```

### 2. Install Dependencies
Navigate into the project directory and install the required dependencies:

```bash
cd hotel-booking-ui
npm install
```

### 3. Run the Development Server
Start the development server to view the application in your browser:

```bash
npm start
```
This will open the application in your default web browser at http://localhost:3000.


## Technologies Used

- React: JavaScript library for building user interfaces.
- React Router: For routing between pages (Home, Login, Sign Up, Browse Hotels).
- CSS: For styling the UI components.


## Usage

### Home Page:
- Enter the location, select dates, and choose the number of rooms.
- Click the "Browse Hotels" button to navigate to the Browse Hotels page with the selected filters.
### Browse Hotels Page:
- Browse through the hotel cards that display images, amenities, ratings, and prices.
- Choose room types (Single, Double, Suite) and input dates to check availability.
- Use the "Book Now" button to simulate the booking process.
### Login/Sign-Up Pages:
- Create a new user or login to an existing one.
- After successful login/sign-up, the home page will show the user's name.
