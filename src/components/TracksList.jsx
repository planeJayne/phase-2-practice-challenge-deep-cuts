import React from 'react'
import Track from './Track'

function TracksList({tracks}) {
  const trackComp = tracks.map(track => <Track key={track.id} track={track}/> )

  return (
    <table>
      <tbody>
        <tr>
          <th>
          <h3 className="row-image">Img</h3>

          </th>
          <th>
            <h3 className="row-title">Title</h3>
          </th>
          <th>
            <h3 className="">Artist</h3>
          </th>
          <th>
            <h3 className="">BPM</h3>
          </th>
        </tr>
        {trackComp}
      </tbody>
    </table>
  )
}

export default TracksList