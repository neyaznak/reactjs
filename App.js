import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Wireframe or planning for food ordering app like swiggy
 *
 * Header
 *  Logo
 *  NavItems
 *
 * Body
 *  Search
 *  RestaurantContainer
 *  RestaurantCard
 *    Img
 *    Name of restaurant
 *     star rating
 *     delivery time etc
 *
 * Footer
 *  Copyright
 *  Links
 *  Address
 *  Contact
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3K8f8hdrZw-SfHxZSG0GogsRClYEHyAqGEg&s"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

// const styleCard = {
//   backgroundColor: "#f0f0f0",
// };

const RestaurantCard = () => {
  return (
    <div
      className="res-card"
      style={{
        backgroundColor: "#f0f0f0",
      }}
    >
      <img
        className="res-logo"
        alt="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/11/11/9b8d22bc-2112-47e7-94e3-4e0fd65329a8_24207.JPG"
      />
      <h3>Domino's Pizza</h3>
      <h4>Biryani, North Indian, Asian, Italian</h4>
      <h4>4.4 stars</h4>
      <h4>38 minutes</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
