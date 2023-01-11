import logo from './logo.svg';
import './App.css';
import './scss/main.scss';
import HomeHeader from "./components/HomeHeader";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
