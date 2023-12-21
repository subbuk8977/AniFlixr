import Navbar from "./components/navbar/Navbar";

import Home from "./pages/Home/Home";
import Trending from "./pages/Trending/Trending";
import Footer from "./components/Footer/Footer";
import Category from "./pages/Categories/Category";
import Search from "./pages/Search/Search";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/trending"
          element={
            <Trending
              key="trending"
              link="https://kitsu.io/api/edge/anime?sort=popularityRank&page[offset]="
            ></Trending>
          }
        ></Route>
        <Route path="/categories" element={<Category></Category>}></Route>
        <Route
          path="/mystery"
          element={
            <Trending
              key="mystery"
              link="https://kitsu.io/api/edge/anime?sort=popularityRank&filter[categories]=mystery&page[offset]="
            ></Trending>
          }
        ></Route>
        <Route
          path="/action"
          element={
            <Trending
              key="action"
              link="https://kitsu.io/api/edge/anime?sort=popularityRank&filter[categories]=action&page[offset]="
            ></Trending>
          }
        ></Route>
        <Route
          path="/comedy"
          element={
            <Trending
              key="comedy"
              link="https://kitsu.io/api/edge/anime?sort=popularityRank&filter[categories]=comedy&page[offset]="
            ></Trending>
          }
        ></Route>
        <Route
          path="/horror"
          element={
            <Trending
              key="horror"
              link="https://kitsu.io/api/edge/anime?sort=popularityRank&filter[categories]=horror&page[offset]="
            ></Trending>
          }
        ></Route>
        <Route
          path="/thriller"
          element={
            <Trending
              key="thriller"
              link="https://kitsu.io/api/edge/anime?sort=popularityRank&filter[categories]=thriller&page[offset]="
            ></Trending>
          }
        ></Route>
        <Route
          path="/romance"
          element={
            <Trending
              key="romance"
              link="https://kitsu.io/api/edge/anime?sort=popularityRank&filter[categories]=romance&page[offset]="
            ></Trending>
          }
        ></Route>
        <Route
          path="/fantasy"
          element={
            <Trending
              key="fantasy"
              link="https://kitsu.io/api/edge/anime?sort=popularityRank&filter[categories]=fantasy&page[offset]="
            ></Trending>
          }
        ></Route>
        <Route
          path="/mecha"
          element={
            <Trending
              key="mecha"
              link="https://kitsu.io/api/edge/anime?sort=popularityRank&filter[categories]=mecha&page[offset]="
            ></Trending>
          }
        ></Route>
        <Route
          path="/magic"
          element={
            <Trending
              key="magic"
              link="https://kitsu.io/api/edge/anime?sort=popularityRank&filter[categories]=magic&page[offset]="
            ></Trending>
          }
        ></Route>
        <Route
          path="/psychological"
          element={
            <Trending
              key="psychological"
              link="https://kitsu.io/api/edge/anime?sort=popularityRank&filter[categories]=psychological&page[offset]="
            ></Trending>
          }
        ></Route>
        <Route path="/search" element={<Search></Search>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
