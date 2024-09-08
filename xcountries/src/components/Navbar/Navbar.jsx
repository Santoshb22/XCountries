import React from 'react'
import Search from '../Search/Search'
import "./Navbar.css"
const Navbar = ({setSearchQuery}) => {
  return (
    <div className='nav-bar'>
        <Search setSearchQuery = {setSearchQuery}/>
    </div>
  )
}

export default Navbar