import React, { useState } from "react";
import axios from "axios";
import "./Driver.css";
import logo from "../assets/DK.jpg";
const Driver = () => {
  const [driverId, setDriverId] = useState("");
  const [driver, setDriver] = useState(null);
  const [error, setError] = useState("");

  const searchDriver = async (e) => {
    e.preventDefault();

    if (!driverId.trim()) {
      setError("Please enter Driver ID");
      return;
    }

    try {
      setError("");
      const response = await axios.get(`http://localhost:8080/api/driver/${driverId}`);
      setDriver(response.data);
    } catch (err) {
      setDriver(null);
      setError("Driver not found. Please try again.");
    }
  };

  return (
    <div className="driver-container">
      <div className="driver-box">
        <h2 className="driver-title">Search Driver</h2>
        <p className="driver-subtitle">Enter Driver ID to view details</p>

        <form className="driver-form" onSubmit={searchDriver}>
          <label className="driver-label">Driver ID</label>
          <input
            className="driver-input"
            type="number"
            placeholder="Enter Driver ID"
            value={driverId}
            onChange={(e) => setDriverId(e.target.value)}
            required
          />
            <img src={logo}/>
          <button className="driver-btn" type="submit">
            Search
          </button>
        </form>

        {/* Error Message */}
        {error && <p className="driver-error">{error}</p>}

        {/* Driver Details Card */}
        {driver && (
          <div className="driver-details">
            <h3>Driver Details</h3>

            <p><strong>ID:</strong> {driver.id}</p>
            <p><strong>Name:</strong> {driver.name}</p>
            <p><strong>Phone:</strong> {driver.phoneNumber}</p>
            <p><strong>Email:</strong> {driver.email}</p>
            <p><strong>Vehicle:</strong> {driver.vehicleType}</p>
            <p><strong>Status:</strong> {driver.status}</p>
            <p><strong>Rating:</strong> {driver.rating}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Driver;
