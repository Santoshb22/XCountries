import React from 'react'
import "./Card.css"

const Card = ({country}) => {
  return (
    <div className='card'>
        <div className='flag-img'>
            <img src={country.flag} alt={country.name} />
        </div>

        <p className='country-name'>
            {country.name}
        </p>
    </div>
  )
}

export default Card