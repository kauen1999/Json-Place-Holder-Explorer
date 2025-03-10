import { useEffect, useState } from "react";
import { UserContext } from "./GlobalContext";

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [usersResponse, todosResponse] = await Promise.all([
          fetch("https://jsonplaceholder.typicode.com/users"),
          fetch("https://jsonplaceholder.typicode.com/todos"),
        ]);

        const usersData = await usersResponse.json();
        const todosData = await todosResponse.json();

        // Criando um mapa de tarefas associadas a cada usuário
        const todosMap = todosData.reduce((map, todo) => {
          if (!map[todo.userId]) {
            map[todo.userId] = []; // cria uma lista para cada userId
          }
          map[todo.userId].push(todo); // todo são as tasks ele verificar qual o userID da task e adicionar na lista do userID
          return map;
        }, {});

        // cria um novo atributo para colocar as tanks na lista user e adiciona a lista do UserID
        const usersWithTasks = usersData.map((user) => ({
          ...user,
          tasks: todosMap[user.id] || [], // Adiciona as tarefas ou um array vazio se não tiver
        }));

        setUsers(usersWithTasks);

      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };
    fetchData();
  }, []);

  return <UserContext.Provider value={{ users }}>{children}</UserContext.Provider>;
};
