import { useEffect, useState } from "react";
import { UserContext } from "./GlobalContext";

export const UserProvider = ({children}) =>{
    const [ users, setUsers] = useState([]);

    useEffect (()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then( response => response.json())
        .then(data => setUsers(data));
    },[]);
    return <UserContext.Provider value={{users}}>{children}</UserContext.Provider>;
}