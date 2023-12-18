import Navbar from "./components/navbar/Navbar";

import Home from "./pages/Home/Home";
import Trending from "./pages/Trending/Trending";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/trending" element={<Trending></Trending>}></Route>
      </Routes>
    </>
  );
}

export default App;
