import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { UserProvider } from "./context/UserProvider";
import { AlbumProvider } from "./context/AlbumProvider";
import { PostProvider } from "./context/PostProvider";
import Users from "./pages/Users";
import Posts from "./pages/Posts";
import Albums from "./pages/Albums";
import UsersProfile from "./pages/UsersProfile";
import AlbumDetail from "./pages/AlbumDetail";
import PostDetail from "./pages/PostDetail";

function App() {
  return (
    <AlbumProvider>
      <PostProvider>
        <UserProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/profiles" element={<Users />}></Route>
                <Route path="/profile/:id" element={<UsersProfile />}></Route>
                <Route path="/posts" element={<Posts />}></Route>
                <Route path="/post/:id" element={<PostDetail />}></Route>
                <Route path="/galery" element={<Albums />}></Route>
                <Route path="/album/:id" element={<AlbumDetail />}></Route>
              </Routes>
            </BrowserRouter>
        </UserProvider>
      </PostProvider>
    </AlbumProvider>
  );
}

export default App;
