import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import NavBar from "./components/NavBar/NavBar";
import Search from "./components/SearchBar/Search";
import SinglePage from "./pages/SinglePage";
import Main from "./pages/Main";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/search" element={<Search />} />
          <Route path="/page/:id" element={<SinglePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
