import { useEffect, useState } from "react"
import { AlbumContext } from "./GlobalContext";

export const AlbumProvider = ({children}) => {
    const [ albums, setAlbums] = useState([]);

    useEffect(()=>{
        const albumFunction = async () => {
            try {
                const [fetchAlbums, fetchPhotos] = await Promise.all([
                    fetch("https://jsonplaceholder.typicode.com/albums"),
                    fetch("https://jsonplaceholder.typicode.com/photos"),
                ])
                const albumsData = await fetchAlbums.json();
                const photosData = await fetchPhotos.json();

            const photosMap = photosData.reduce((map, photo) =>{
                if(!map[photo.albumId]){
                    map[photo.albumId] =[];
                }
                map[photo.albumId].push(photo);
                return map;
            },{});

            const albumWithPhotos = albumsData.map((album)=>({
                ...album,
                photos: photosMap[album.id] || [],

            }));

            setAlbums(albumWithPhotos);

            } catch (error) {
                console.error("erro ao obter endpoint album e photos",error);
            }
        }
        albumFunction();
    },[]);
    return <AlbumContext.Provider value={{albums}}> {children} </AlbumContext.Provider>
}