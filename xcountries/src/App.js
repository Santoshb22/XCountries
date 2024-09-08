import React, { useState } from 'react'
import Countries from './components/Countries/Countries'
import Navbar from './components/Navbar/Navbar'

const App = () => {

  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div>
      <Navbar setSearchQuery = {setSearchQuery}/>
      <Countries searchQuery = {searchQuery}/>
    </div>
  )
}

export default App