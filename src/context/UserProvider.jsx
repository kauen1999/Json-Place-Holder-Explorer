import { useContext, useEffect, useState } from "react"; 
// Importa hooks e o useContext para acessar os dados de outros contextos
import { AlbumContext, PostContext, UserContext } from "./GlobalContext"; 
// Importa os contextos de Álbuns, Posts e Usuários para acessar as informações compartilhadas

export const UserProvider = ({ children }) => { 
  // O componente UserProvider é responsável por fornecer os dados dos usuários para outros componentes
  const [users, setUsers] = useState([]); // Estado para armazenar os dados dos usuários
  const [isLoading, setIsLoading] = useState(true); // Estado para controlar o carregamento dos dados
  const { posts } = useContext(PostContext); // Acessa os posts do contexto PostContext
  const { albums } = useContext(AlbumContext); // Acessa os álbuns do contexto AlbumContext

  // Hook useEffect que roda sempre que os dados de posts ou albums mudam
  useEffect(() => { 
    const fetchData = async () => { 
      // Função assíncrona para buscar dados dos usuários e das tarefas (todos)
      try {
        // Faz duas requisições para buscar os dados de usuários e tarefas
        const [usersResponse, todosResponse] = await Promise.all([
          fetch("https://jsonplaceholder.typicode.com/users"), // Requisição dos usuários
          fetch("https://jsonplaceholder.typicode.com/todos"), // Requisição das tarefas
        ]);

        const usersData = await usersResponse.json(); // Converte a resposta de usuários para JSON
        const todosData = await todosResponse.json(); // Converte a resposta de tarefas para JSON

        // Cria um mapa associando as tarefas aos usuários com base no userId
        const todosMap = todosData.reduce((map, todo) => { 
          if (!map[todo.userId]) { 
            map[todo.userId] = []; // Se não houver uma lista de tarefas para o userId, cria uma
          }
          map[todo.userId].push(todo); // Adiciona a tarefa à lista de tarefas do usuário
          return map; // Retorna o mapa atualizado
        }, {}); 

        if (posts.length > 0 && albums.length > 0) { 
          // Verifica se os dados de posts e albums já foram carregados, se sim, continua
          const userDetails = usersData.map((user) => ({
            // Para cada usuário, cria um novo objeto com as tarefas, posts e álbuns
            ...user, 
            tasks: todosMap[user.id] || [], // Associa as tarefas ao usuário, ou um array vazio se não houver tarefas
            posts: posts.filter(post => post.userId === user.id), // Associa os posts ao usuário com o mesmo userId
            albums: albums.filter(album => album.userId === user.id), // Associa os álbuns ao usuário com o mesmo userId
          }));

          setUsers(userDetails); // Atualiza o estado dos usuários com os detalhes completos
          console.log(userDetails); // Exibe os detalhes no console para verificação
        }
        setIsLoading(false); // Indica que o carregamento foi concluído
      } catch (error) { 
        // Se houver erro durante a requisição
        console.error("Erro ao buscar dados:", error); // Exibe o erro no console
      }
    };
    fetchData(); // Chama a função para buscar os dados
  }, [posts, albums]); 
  // O useEffect depende de posts e albums. Se algum deles mudar, o efeito será executado novamente

  if (isLoading) {
    return <div>Carregando...</div>; // Exibe uma mensagem enquanto os dados estão sendo carregados
  }

  // Quando o carregamento estiver concluído, retorna o contexto do usuário com todos os dados
  return <UserContext.Provider value={{ users }}>{children}</UserContext.Provider>; 
  // O value={{ users }} passa os dados dos usuários para o contexto, 
  // que podem ser acessados pelos componentes filhos (children)
};
