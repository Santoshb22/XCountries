import React from 'react'
import "./Search.css"
const Search = ({setSearchQuery}) => {
  function handleChange (e) {
    setSearchQuery(e.target.value);
  }
  return (
    <div className='search'>
        <input className='searchInput' type="text"  placeholder='Search country' name="country" onChange={handleChange}/>
    </div>
  )
}

export default Search