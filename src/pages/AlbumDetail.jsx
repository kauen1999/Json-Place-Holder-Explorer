import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import  {AlbumContext} from "../context/GlobalContext";
import Navbar from "../components/Navbar";

const AlbumDetail = () => {
  const { id } = useParams();
  const { albums } = useContext(AlbumContext);

  const album = albums.find((album) => album.id === parseInt(id));

  if (!album) {
    return <div className="bg-red-100 dark:bg-red-900 border-l-4 border-red-500 dark:border-red-700 text-red-900 dark:text-red-100 p-2 rounded-lg flex items-center transition duration-300 ease-in-out hover:bg-red-200 dark:hover:bg-red-800 transform hover:scale-105">Album não encontrado!</div>;
  }
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="grid grid-cols-2 mt-5 justify-items-center">
      { album.photos.map((photo) => (
        <div key={photo.id} className="group flex flex-col justify-start items-start gap-2 w-96 h-56 duration-500 relative mb-16 rounded-lg p-8 bg-gray-100 hover:-translate-y-2 hover:shadow-xl shadow-gray-300">
        <div
          className="absolute duration-700 shadow-md group-hover:-translate-y-8 group-hover:-translate-x-8 -bottom-10 -right-20 w-1/2 h-1/2 rounded-lg bg-gray-200" > 
          <img src={photo.thumbnailUrl} alt={photo.title} />
          </div>
        <div className="flex flex-col">
          <div>
          <img src={photo.url} alt={photo.title} />
          </div>
          <div className="text-gray-700 line-clamp-3">
            {photo.title}
          </div>
        </div>
      </div>
      ))} 
      </div>
    </div>
  );
};

export default AlbumDetail;
