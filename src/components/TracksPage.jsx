import React, { useEffect, useState } from "react";
import Search from "./Search";
import AddTrackForm from "./AddTrackForm";
import TracksList from "./TracksList";

function TracksPage({ onNewTrack }) {
  const [tracks, setTracks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:8001/tracks")
      .then((r) => r.json())
      .then((data) => setTracks(data));
  }, []);

  function handleNewTrack(newTrack) {
    const { image, title, artist, bpm } = newTrack;

    const newTrackBody = {
      image: image,
      title: title,
      artist: artist,
      BPM: parseInt(bpm),
    };
    fetch("http://localhost:8001/tracks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTrackBody),
    })
      .then((r) => r.json())
      .then((addedTrack) => {
        setTracks([...tracks, addedTrack]);
      });
  }
  // see All Tracks if search bar is ""
  // see Tracks where title or the artist or the BPM includes the current searchTerm (case insensitive)
  const filteredTracks = tracks.filter((track) => {
    if (searchTerm === "") {
      return true;
    } else {
      return (
        track.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        track.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
        track.BPM.toString().includes(searchTerm)
      );
    }
  });

  return (
    <div>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <AddTrackForm onNewTrack={handleNewTrack} />
      <TracksList tracks={filteredTracks} />
    </div>
  );
}

export default TracksPage;
