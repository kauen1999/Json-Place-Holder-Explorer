import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { UserProvider } from "./context/UserProvider";
import { AlbumProvider } from "./context/AlbumProvider";
import { PostProvider } from "./context/PostProvider";

function App() {
  return (
    <AlbumProvider>
      <PostProvider>
        <UserProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />}></Route>
            </Routes>
          </BrowserRouter>
        </UserProvider>
      </PostProvider>
    </AlbumProvider>
  );
}

export default App;
