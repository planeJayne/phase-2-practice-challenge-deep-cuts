import React, { useEffect, useState } from 'react'
import Search from './Search'
import AddTrackForm from './AddTrackForm'
import TracksList from './TracksList'

function TracksPage({onNewTrack}) {
  const [tracks, setTracks]= useState([])

  useEffect(() =>{
    fetch('http://localhost:8001/tracks')
    .then((r) => r.json())
    .then((data) => setTracks(data))
  }, [])

  function handleNewTrack(newTrack) {
    const {image, title, artist, bpm} = newTrack

    const newTrackBody ={
      image: image,
      title: title,
      artist: artist,
      BPM: parseInt(bpm)
    }
    fetch('http://localhost:8001/tracks', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newTrackBody)
    })
    .then(r => r.json())
    .then(addedTrack => {
      setTracks([...tracks, addedTrack])
    })
  }
    
  return (
    <div>
      <Search />
      <AddTrackForm onNewTrack={handleNewTrack}/>
      <TracksList tracks={tracks}/>
    </div>
  )
}

export default TracksPage