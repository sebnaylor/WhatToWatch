import "./App.css";
import Home from "./pages/Home/Home";
import Search from "./pages/Search/Search";
import Nav from "./components/Nav";
import Media from "./pages/Media/Media";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/media/:id" element={<Media />} />
          <Route path="/dashboard" element={<>Dashboard</>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
