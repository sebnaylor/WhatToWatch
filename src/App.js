import "./App.css";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Nav from "./components/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/media/:id" element={<>Media</>} />
          <Route path="/dashboard" element={<>Dashboard</>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
