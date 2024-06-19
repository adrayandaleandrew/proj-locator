import React from 'react';

const GeoInfo = ({ geoData }) => {
  return (
    <div>
      <h2>Geolocation Information</h2>
      <p><strong>IP Address:</strong> {geoData.ip}</p>
      <p><strong>Country:</strong> {geoData.country}</p>
      <p><strong>Region:</strong> {geoData.region}</p>
      <p><strong>City:</strong> {geoData.city}</p>
    </div>
  );
};

export default GeoInfo;
