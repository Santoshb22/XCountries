import React, { useEffect, useState } from 'react'
import "./Countries.css"
import Card from '../Card/Card';
const Countries = ({searchQuery}) => {
    const [filterData, setFilterData] = useState([]);
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
          const response = await fetch("https://xcountries-backend.azurewebsites.net/all");
          if (!response.ok) {
            throw new Error('Error fetching data');
          }
          const data = await response.json();
          setData(data);
          setFilterData(data);
        } catch (error) {
          console.error('Error fetching data:', error.message);
        }
      };
      
      
      const  fetchSearchQuery = async () => {
        if(searchQuery) {
          const filterCountry = data.filter(country => 
            country.name.toLowerCase().includes(searchQuery.toLowerCase())
          )

          setFilterData(filterCountry);
        }

        if(!searchQuery) {
          setFilterData(data);
        }
      }

      useEffect(() => {
        fetchSearchQuery();
      }, [searchQuery, data]);

    useEffect(() => {
        fetchData();
    }, []);
  return (
    <div className='countries'>

        {
            !filterData.length > 0 ? (<p>Loading</p>) :
                (
                 filterData.map((item, id) => (<Card country = {item} key={id}/>))
                )
        }
    </div>
  )
}

export default Countries