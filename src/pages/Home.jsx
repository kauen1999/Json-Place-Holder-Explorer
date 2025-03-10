import React, { useContext } from 'react'
import {UserContext } from '../context/GlobalContext'

const Home = () => {
  const {users} = useContext(UserContext);
  
  return (
    <div>Home
      <div>
        {users.map((user)=> (
          <ul key={user.id}>
            <li>{user.name} {user.username}</li>
            <li>{user.email}</li>
            <li>{user.address.street},{user.address.suite},{user.address.city},{user.address.zipcode}</li>
            <li>{user.phone}</li>
            <li>{user.website}</li>
            <li>{user.company.name}</li> 
          </ul>
        ))}
      </div>
    </div>
  )
}

export default Home