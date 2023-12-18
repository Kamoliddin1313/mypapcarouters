import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import WrappersPage from "./components/WrappersPage";

function App() {
  return (
    <div>
      <h1>Salom react-router-dom</h1>
      <Routes>
        <Route path="/" element={<WrappersPage />}>
          <Route path="/about" element={<About />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/aboutPage" element={<AboutPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
