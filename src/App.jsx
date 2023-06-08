import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import ToDo from "./pages/ToDo";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<ToDo />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
