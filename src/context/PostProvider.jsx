import { useEffect, useState } from "react"
import { PostContext } from "./GlobalContext";

export const PostProvider = ({children}) => {
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        const postFunction = async () => {
            try {
                const [fetchPosts, fetchComments] = await Promise.all([
                    fetch("https://jsonplaceholder.typicode.com/posts"),
                    fetch("https://jsonplaceholder.typicode.com/comments"),
                ]);

                const postsData = await fetchPosts.json();
                const commentsData= await fetchComments.json();

                const commentsMap = commentsData.reduce((map, comment) =>{
                    if(!map[comment.postId]){
                        map[comment.postId] = [];
                    }
                    map[comment.postId].push(comment);
                    return map;
                },{});

                const postWithComments = postsData.map((post)=>({
                    ...post,
                    comments: commentsMap[post.id] || [],
                }))

                setPosts(postWithComments);
            } catch (error) {
                console.error("erro ao tentar acessar os EndPoints Post and Comments", error)
            } 
        }
        postFunction();
    },[])
    return <PostContext.Provider value={{posts}}>{children}</PostContext.Provider>
}