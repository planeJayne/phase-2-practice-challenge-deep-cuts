import React from 'react'

function Search({searchTerm, setSearchTerm}) {
console.log(searchTerm)
  function handleChange(e){
    setSearchTerm(e.target.value)
  }
  return (
    <div className="search">
        <input
          type="text"
          placeholder="Search your Tracks"
          onChange={handleChange}
          value={searchTerm}
        />
        <i>🔎</i>
  </div>
  )
}

export default Search