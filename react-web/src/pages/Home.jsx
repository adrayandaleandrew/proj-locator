import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchForm from '../components/SearchForm';
import SearchHistory from '../components/SearchHistory';
import GeoInfo from '../components/GeoInfo';

const Home = () => {

  const [geoData, setGeoData] = useState(null);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    fetchSearchHistory();
  }, []);

  const fetchSearchHistory = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/history');
      setHistory(response.data);
    } catch (error) {
      console.error('Error fetching search history:', error);
    }
  };

  const handleSearch = async (data) => {
    setGeoData(data);

    try {
      await axios.post('http://localhost:8000/api/history', { ip_address: data.ip });
      fetchSearchHistory();
    } catch (error) {
      console.error('Error adding search history:', error);
    }
  };


  const handleHistoryClick = async (ipAddress) => {
    try {
      const response = await axios.get(`http://localhost:8000/api/ipinfo/${ipAddress}/geo`);
      setGeoData(response.data);
    } catch (error) {
      console.error('Error fetching history details:', error);
    }
  };

  return (
          <>
            <h1>IP Info App</h1>
            <SearchForm onSearch={handleSearch} />
            {geoData && <GeoInfo geoData={geoData} />}
            <SearchHistory history={history} onHistoryClick={handleHistoryClick} />
          </>
  );
};

export default Home;
