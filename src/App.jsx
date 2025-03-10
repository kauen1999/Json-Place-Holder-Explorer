import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { UserProvider } from "./context/UserProvider";
import { AlbumProvider } from "./context/AlbumProvider";

function App() {
  return (
    <UserProvider>
      <AlbumProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </BrowserRouter>
      </AlbumProvider>
    </UserProvider>
  );
}

export default App;
