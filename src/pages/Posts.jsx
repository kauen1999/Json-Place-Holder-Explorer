import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import { UserContext } from "../context/GlobalContext";

const Posts = () => {
  const { users } = useContext(UserContext);
  const [openComments, setOpenComments] = useState({});

  // Função para alternar a exibição dos comentários e desabilitar o botão
  const toggleComments = (postId) => {
    setOpenComments((prev) => ({
      ...prev,
      [postId]: !prev[postId], // Alterna entre true e false
    }));
  };

  return (
    <div>
      <Navbar />
      {users.map((user) => (
        <div key={user.id} className="mt-5 m-2">
          {user.posts.map((post) => (
            <div key={post.id} className="mb-5 rounded-sm shadow-sm">
              <div className="shadow-sm">
                {/* Nome do usuário */}
                <div className="p-1 rounded-sm shadow-sm mb-2 text-gray-800">
                  {user.name}
                </div>
                {/* Conteúdo do post */}
                <div>
                  <p className="p-1 text-lg font-medium text-blue-500">
                    {post.title}
                  </p>
                  <p className="p-1 text-sm font-thin">{post.body}</p>
                </div>
              </div>
              {/* Botão para mostrar/ocultar comentários */}
              <div className="m-1">
                <button onClick={() => toggleComments(post.id)} className={`p-1 font-mono text-sm rounded-lg text-center ${openComments[post.id] ? "bg-gray-300 text-gray-500"  : "text-gray-400" }`}>
                  comments({post.comments.length})
                </button>
              </div>
              {/* Exibir os comentários apenas quando necessário */}
              {openComments[post.id] && (
                <div className="flex flex-row mt-2">
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6" >
                      <path strokeLinecap="round"  strokeLinejoin="round" d="m16.49 12 3.75 3.75m0 0-3.75 3.75m3.75-3.75H3.74V4.499" />
                    </svg>
                  </div>
                  <div>
                    {post.comments.map((comment) => (
                      <div key={comment.id} className="mt-2 shadow-sm rounded-md mb-2">
                        <div className="p-1 rounded-sm text-blue-400">
                          {comment.name} - {comment.email}
                        </div>
                        <div>
                          <p className="p-1 font-mono text-sm font-thin">
                            {comment.body}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Posts;
