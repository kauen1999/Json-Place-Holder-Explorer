import React, { useContext } from 'react'
import { UserContext } from '../context/GlobalContext'

const Home = () => {
  const { users } = useContext(UserContext);
  return (
    <div>
  Home
  <div>
    {users?.map((user) => (
      <div key={user.id}>
        <li>
          <strong>{user.name}</strong>
          <strong>{user.email}</strong>
          <strong>{user.phone}</strong>
          <strong>{user.username}</strong>
          <strong>{user.website}</strong>

        </li>
        <strong>Company:</strong>
          <span>
          <strong>{user.company.name}</strong>
          <strong>{user.company.bs}</strong>
          <strong>{user.company.catchPhrase}</strong>
          </span>
          <strong>address:</strong>
          <span>
          <strong>{user.address.city}</strong>
          <strong>{user.address.street}</strong>
          <strong>{user.address.suite}</strong>
          <strong>{user.address.zipcode}</strong>
          <strong>{user.address.geo.lat} - {user.address.geo.lng}</strong>
          </span>
          <strong>Tasks:</strong>
          <span>
            {user.tasks.map((task) => (
              <ul key={task.id}>
                <li>{task.title}</li>
              </ul>
            ))}
          </span>
          <strong>albums:</strong>
          <span>
            {user.albums.map((album) => (
              <ul key={album.id}>
                <li>{album.title}</li>
                <span>
                  {album.photos.map((photo)=>(
                    <ul key={photo.id}>
                    <li>{photo.title}</li>
                  </ul>
                  ))}
                </span>
              </ul>
            ))}
          </span>
          <strong>coments:</strong>
          <span>
            {user.posts.map((post) => (
              <ul key={post.id}>
                <li>{post.title}</li>
                <li>{post.body}</li>
                <span>
                  {post.comments.map((comment)=>(
                    <ul key={comment.id}>
                    <li>{comment.title}</li>
                    <li>{comment.email}</li>
                    <li>{comment.body}</li>
                  </ul>
                  ))}
                </span>
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