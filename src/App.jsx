import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { UserProvider } from "./context/UserProvider";
import { AlbumProvider } from "./context/AlbumProvider";
import { PostProvider } from "./context/PostProvider";
import Users from "./pages/Users";
import Posts from "./pages/Posts";
import Albums from "./pages/Albums";

function App() {
  return (
    <AlbumProvider>
      <PostProvider>
        <UserProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/profiles" element={<Users/>}></Route>
              <Route path="/posts" element={<Posts/>}></Route>
              <Route path="/galery" element={<Albums/>}></Route>
            </Routes>
          </BrowserRouter>
        </UserProvider>
      </PostProvider>
    </AlbumProvider>
  );
}

export default App;
