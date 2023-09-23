"use client"
import React from 'react'
// Beacuse We are using Hooks
import { useState } from 'react'
import { SearchManufacturer } from './'

const SearchBar = () => {
    const [manufacturer, setmManufacturer] = useState('')
    const handleSearch = ()=>{}
  return (
      <form className='seachbar' onSubmit={handleSearch}>
          <div className='searchbar__item'>
              <SearchManufacturer />
              manufacturer = {manufacturer}
              setmManufacturer = {setmManufacturer}
          </div>
    </form>
  )
}

export default SearchBar