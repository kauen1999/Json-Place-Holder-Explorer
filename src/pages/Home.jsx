import { useState, useContext } from "react";
import { UserContext, PostContext, AlbumContext } from "../context/GlobalContext";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import { Link } from "react-router-dom";

const Home = () => {
  const { users } = useContext(UserContext);
  const { posts } = useContext(PostContext);
  const { albums } = useContext(AlbumContext);
  const [filteredData, setFilteredData] = useState({ users: [], posts: [], albums: [] });
  const [searchQuery, setSearchQuery] = useState(""); // Novo estado para armazenar a consulta de pesquisa

  const handleSearch = (query) => {
    setSearchQuery(query); // Atualiza a consulta de pesquisa

    if (!query) {
      setFilteredData({ users: [], posts: [], albums: [] }); // Esconde os dados quando não há pesquisa
      return;
    }

    const filteredUsers = users.filter((user) =>
      user.name.toLowerCase().includes(query.toLowerCase())
    );

    const filteredPosts = posts.filter((post) =>
      post.title.toLowerCase().includes(query.toLowerCase())
    );

    const filteredAlbums = albums.filter((album) =>
      album.title.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredData({
      users: filteredUsers,
      posts: filteredPosts,
      albums: filteredAlbums,
    });
  };

  return (
    <div>
      <Navbar />
      <div className="p-4">
        <SearchBar onSearch={handleSearch} />
        {/* Só exibe os resultados se houver uma consulta na barra de pesquisa */}
        {searchQuery && (
          <div className="absolute max-w-screen bg-gray-50 flex mr-5">
            {/* Usuários */}
            {filteredData.users.length > 0 && (
              <div>
                <h2 className="mt-4 w-50 font-bold">Usuários</h2>
                {filteredData.users.map((user) => (
                  <Link key={user.id} to={`/profile/${user.id}`} className="flex items-center gap-2">
                    <p>{user.name}</p>
                  </Link>
                ))}
              </div>
            )}
            {/* Posts */}
            {filteredData.posts.length > 0 && (
              <div>
                <h2 className="mt-4 font-bold">Posts</h2>
                {filteredData.posts.map((post) => (
                  <Link key={post.id} to={`/post/${post.id}`} className="flex items-center gap-2">
                    <p>{post.title}</p>
                  </Link>
                ))}
              </div>
            )}

            {/* Álbuns */}
            {filteredData.albums.length > 0 && (
              <div>
                <h2 className="mt-4 font-bold">Álbuns</h2>
                {filteredData.albums.map((album) => (
                  <Link key={album.id} to={`/album/${album.id}`} className="flex items-center gap-2">
                    <p>{album.title}</p>
                  </Link>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
      <div className=" mx-auto p-6 ">
      <h1 className="text-3xl font-bold text-center text-gray-800">Sobre o Projeto</h1>
      <p className="mt-4 text-gray-600">
        Este projeto foi desenvolvido com o objetivo de aprimorar meus conhecimentos em <strong>React</strong> e, especialmente, no uso do <strong>Context API</strong>. A ideia principal foi criar uma aplicação que permitisse o gerenciamento de dados globais e a implementação de um mecanismo de busca eficiente.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 text-gray-800">Tecnologias Utilizadas</h2>
      <ul className="list-disc list-inside mt-2 text-gray-600">
        <li><strong>React com Vite</strong> - para desenvolvimento rápido e eficiente.</li>
        <li><strong>Tailwind CSS</strong> - para estilização responsiva e moderna.</li>
        <li><strong>Visual Studio Code</strong> - ambiente de desenvolvimento principal.</li>
        <li><strong>Git</strong> - para controle de versão e colaboração.</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-6 text-gray-800">Intuito do Projeto</h2>
      <p className="mt-2 text-gray-600">
        O principal objetivo deste projeto foi aprender e praticar a <strong>Context API</strong> no <strong>React</strong>, além de implementar uma <strong>barra de pesquisa</strong> eficiente para filtragem de dados em tempo real.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 text-gray-800">Desafios Enfrentados</h2>
      <p className="mt-2 text-gray-600">
        Um dos maiores desafios foi compreender e aplicar os métodos de busca corretos dentro da Context API. Métodos como <strong>.find()</strong> e <strong>.filter()</strong> foram essenciais para manipular os dados corretamente.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 text-gray-800">O que é o JSONPlaceholder?</h2>
      <p className="mt-2 text-gray-600">
        Para testar a aplicação sem um backend real, utilizei a API pública <strong>JSONPlaceholder</strong>, que fornece dados fictícios para simulação de usuários, posts, comentários, álbuns e tarefas.
      </p>
      
      <h2 className="text-2xl font-semibold mt-6 text-gray-800">Conclusão</h2>
      <p className="mt-2 text-gray-600">
        Esse projeto me proporcionou um grande aprendizado sobre a Context API, manipulação de dados e criação de um mecanismo eficiente de busca. Agora, estou mais preparado para desafios futuros no desenvolvimento de aplicações modernas.
      </p>
    </div>
    </div>
  );
};

export default Home;
