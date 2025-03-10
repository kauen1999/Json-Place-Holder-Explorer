import React, { useContext } from 'react'
import { AlbumContext } from '../context/GlobalContext'

const Home = () => {
  const { albums } = useContext(AlbumContext);
  return (
    <div>
  Home
  <div>
    {albums?.map((album) => (
      <div key={album.id}>
        <li>
          <strong>{album.title}</strong>
        </li>
          <strong>photos:</strong>
          <span>
            {album.photos.map((photo) => (
              <ul key={photo.id}>
                <li>{photo.title}</li>
                <li>{photo.url}</li>
                <li>{photo.thumbnailUrl}</li>
              </ul>
            ))}
          </span>
          <span>------------------------------</span>
      </div>
    ))}
  </div>
</div>

  )
}

export default Home