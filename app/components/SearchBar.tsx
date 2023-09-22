import React from 'react'

const SearchBar = () => {
    const handleSearch = ()=>{}
  return (
      <form className='seachbar' onSubmit={handleSearch}>
          <div className='searchbar__item'>
              <SearchManufacturer/>
          </div>
    </form>
  )
}

export default SearchBar