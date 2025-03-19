import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../context/GlobalContext";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const UserProfile = () => {
  const { id } = useParams(); // Obtém o ID da URL
  const { users } = useContext(UserContext); // Acessa os usuários do contexto

  // Converte id para número e encontra o usuário correspondente
  const user = users.find((user) => user.id === parseInt(id));

  if (!user) {
    return (
      <div className="bg-red-100 dark:bg-red-900 border-l-4 border-red-500 dark:border-red-700 text-red-900 dark:text-red-100 p-2 rounded-lg flex items-center transition duration-300 ease-in-out hover:bg-red-200 dark:hover:bg-red-800 transform hover:scale-105">
        Usuário não encontrado!
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="max-w-2xl mx-auto p-6 shadow-lg rounded-lg mt-10 bg-white">
        <h1 className="text-2xl font-bold text-gray-700">{user.name}</h1>
        <p className="text-gray-500">@{user.username}</p>
        <p className="text-gray-600">Email: {user.email}</p>
        <p className="text-gray-600">Empresa: {user.company.name}</p>
        <p className="text-gray-600">Website: {user.website}</p>

        <h2 className="text-xl font-semibold mt-6">Tarefas:</h2>
        <ul className="ml-6">
          {user.tasks.length > 0 ? (
            user.tasks.map((task) => (
              <li key={task.id} className="flex items-center text-gray-700">
                {task.completed ? <li className="text-lime-500"> {task.title}</li> : <li className="text-red-700"> {task.title}</li> }
              </li>
            ))
          ) : (
            <p className="text-gray-500">Nenhuma tarefa encontrada.</p>
          )}
        </ul>

        <h2 className="text-xl font-semibold mt-6">Posts:</h2>
        <ul className=" ml-6">
          {user.posts.length > 0 ? (
            user.posts.map((post) => (
              <li key={post.id} className="text-gray-700 flex items-center gap-2">
                {post.title}
                <Link to={`/Post/${post.id}`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
                </Link>
              </li>
            ))
          ) : (
            <p className="text-gray-500">Nenhum post encontrado.</p>
          )}
        </ul>

        <h2 className="text-xl font-semibold mt-6">Álbuns:</h2>
        <ul className="ml-6">
          {user.albums.length > 0 ? (
            user.albums.map((album) => (
              <li key={album.id} className="text-gray-700 flex items-center gap-2">
                {album.title}
                <Link to={`/album/${album.id}`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
                </Link>
              </li>
            ))
          ) : (
            <p className="text-gray-500">Nenhum álbum encontrado.</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default UserProfile;
