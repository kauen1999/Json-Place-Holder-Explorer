import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { UserContext } from "../context/GlobalContext";
const Users = () => {
  const { users } = useContext(UserContext);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <div className="grid grid-cols-4 gap-4 min-h-screenitems-center justify-center w-full">
          {users.map((user) => (
            <div key={user.id} className="rounded-xl text-center p-4 group items-center flex flex-col max-w-md shadow-md">
              <div className="text-gray-300 ">
                <svg className="w-16 h-16" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
                  <path d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" strokeLinejoin="round" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <h1 className="font-semibold text-gray-700">{user.username}</h1>
              </div>
              <div className="mt-4 m-2">
                <Link to={`/profile/${user.id}`} className="hover:bg-gray-300 bg-gray-200 text-gray-800 mt-6 rounded p-2 px-6">
                  <button>Details</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Users;
