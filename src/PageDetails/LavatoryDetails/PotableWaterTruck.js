import React from "react";

const PotableWaterTruck = () => {
  return (
    <div className="nbl-page">
      <header className="nbl-header">
        <h1 className="nbl-header-title">Potable Water Truck</h1>
      </header>

      <section className="nbl-details">
        <div className="nbl-images">
          <div className="nbl-image-row">
            <div className="nbl-image-container">
              <img
                src="\image\potablewatertruck1.jpeg"
                alt="PotableWaterTruck"
                className="nbl-image"
              />
            </div>
            <div className="nbl-image-container">
              <img
                src="\image\potablewatertruck2.jpeg"
                alt="PotableWaterTruck"
                className="nbl-image"
              />
            </div>
            <div className="nbl-image-container">
              <img
                src="\image\potablewatertruck3.jpeg"
                alt="PotableWaterTruck"
                className="nbl-image"
              />
            </div>
            <div className="nbl-image-container">
              <img
                src="\image\potablewatertruck4.jpeg"
                alt="PotableWaterTruck"
                className="nbl-image"
              />
            </div>
          </div>
        </div>
        <div className="nbl-description">
          <div className="nbl-content">
            <p>
              The Aircraft Potable Water Truck is an essential ground support
              vehicle designed to supply potable water to aircraft. Ensuring the
              delivery of safe, clean water to the aircraft's water system, this
              vehicle plays a crucial role in maintaining the comfort and
              hygiene of passengers and crew during flights. Equipped with
              advanced features and robust construction, the potable water truck
              guarantees efficient and reliable operations in various airport
              environments.
            </p>
            <br />
            <div className="nbl-specs-and-features">
              <div className="nbl-specifications">
                <h2>Specifications</h2>
                <ul>
                  <li>Engine Type: Diesel or electric options available</li>
                  <li>Transmission: Automatic or manual transmission</li>
                  <li>
                    Capacity: 1,000 to 5,000 liters (264 to 1,320 gallons)
                  </li>
                  <li>Pump Type: High-pressure pump</li>
                  <li>
                    Flow Rate: Up to 50 liters per minute (13.2 gallons per
                    minute)
                  </li>
                  <li>Hoses: Food-grade, durable materials</li>
                </ul>
              </div>
              <div className="nbl-features">
                <h2>Features</h2>
                <ul>
                  <li>High-Quality Water Tank</li>
                  <li>Advanced Pumping System</li>
                  <li>User-Friendly Controls</li>
                  <li>Robust and Durable Construction</li>
                  <li>Flexible Hose and Nozzle System</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PotableWaterTruck;
