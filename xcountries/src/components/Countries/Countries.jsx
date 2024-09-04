import React, { useEffect, useState } from 'react'
import "./Countries.css"
import Card from '../Card/Card';
const Countries = () => {

    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
        const response = await fetch("https://xcountries-backend.azurewebsites.net/all");
        const data = await response.json();
        console.log(data)
        setData(data);
    } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);
  return (
    <div className='countries'>
        {
            !data ? (<p>Loading</p>) :
                (
                 data.map((item, id) => (<Card country = {item} key={id}/>))
                )
        }
    </div>
  )
}

export default Countries