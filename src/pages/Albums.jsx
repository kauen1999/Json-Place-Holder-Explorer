import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import { UserContext } from "../context/GlobalContext";
import { Link } from "react-router-dom";
const Albums = () => {
  const { users } = useContext(UserContext);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="p-">
        {users.map((user) => (
          <div key={user.id} className="grid grid-cols-2 justify-items-center">
            {user.albums.map((album) => (
              <div
                key={album.id}
                className="group flex flex-col justify-between items-start gap-2 w-152 h-40 m-5 duration-500 relative rounded-lg p-4 bg-gray-100 hover:-translate-y-2 hover:shadow-xl shadow-gray-300"
              >
                <div>
                  <h4 className="text-2xl font-thin mb-2 text-gray-800">
                    {user.username} - Album
                  </h4>
                  <p className="text-blue-500 line-clamp-3">{album.title}</p>
                </div>
                <Link to={`/album/${album.id}`}>
                  <button className="hover:bg-gray-300 bg-gray-200 text-gray-800 mt-6 rounded p-2 px-6">
                    ( {album.photos.length} ) Photos
                  </button>
                </Link>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Albums;
