import React, { useEffect, useState } from 'react';
import './Countries.css';
import Card from '../Card/Card';

const Countries = ({ searchQuery }) => {
  const [filterData, setFilterData] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://xcountries-backend.azurewebsites.net/all");
      if (!response.ok) {
        throw new Error('Failed to fetch countries data');
      }
      const data = await response.json();
      setData(data);         
      setFilterData(data);   
    } catch (error) {
      console.error('Error fetching data:', error.message);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchSearchQuery = () => {
    if (searchQuery) {
      const filteredCountries = data.filter(country =>
        country.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilterData(filteredCountries);
    } else {
      setFilterData(data);  
    }
  };

  useEffect(() => {
    fetchSearchQuery();
  }, [searchQuery, data]);

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className='countries'>
      {
        filterData.length === 0 ? (
          <p>No countries found.</p>
        ) : (
          filterData.map((item, id) => (
            <Card country={item} key={id} />
          ))
        )
      }
    </div>
  );
};

export default Countries;
