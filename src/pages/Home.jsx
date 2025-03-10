import React, { useContext } from 'react'
import { UserContext } from '../context/GlobalContext'

const Home = () => {
  const {users} = useContext(UserContext);
  console.log(users);
  return (
    <div>
  Home
  <div>
    {users?.map((user) => (
      <ul key={user.id}>
        <li>
          <strong>{user.name}</strong>
        </li>
        <li>
          <strong>Email:</strong> {user.email}
        </li>
        <li>
          <strong>Telefone:</strong> {user.phone}
        </li>
        <li>
          <strong>Website:</strong> {user.website}
        </li>
        <li>
          <strong>Tarefas:</strong>
          <ul>
            {user.tasks.map((task) => (
              <li key={task.id}>
                <span>{task.title}</span>
                <span>{task.completed ? " (Concluída)" : " (Não Concluída)"}</span>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    ))}
  </div>
</div>

  )
}

export default Home