import React, { useEffect, useState } from 'react'
import Search from './Search'
import AddTrackForm from './AddTrackForm'
import TracksList from './TracksList'

function TracksPage() {
  const [tracks, setTracks]= useState([])

  useEffect(() =>{
    fetch('http://localhost:8001/tracks')
    .then((r) => r.json())
    .then((data) => setTracks(data))
  }, [])
    
  return (
    <div>
      <Search />
      <AddTrackForm />
      <TracksList tracks={tracks}/>
    </div>
  )
}

export default TracksPage