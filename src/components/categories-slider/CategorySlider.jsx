import React from "react";

import "./CategorySlider.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

const CategorySlider = ({ link }) => {
  const [state, setState] = useState(true);
  const [items, setItems] = useState([
    {
      title: "Action",
      poster:
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/6172sX-TInL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      title: "Comedy",
      poster:
        "https://cdn.animenewsnetwork.com/thumbnails/fit600x1000/cms/episode-review.3/184671/cfaaa751ce731f3abecca872ddc9e7ac1649904522_full.jpg",
    },
    {
      title: "Horror",
      poster:
        "https://images1.wionews.com/images/wion/900x1600/2023/12/4/1701698819013_MV5BNWYzNmZmMTUtNzI1YS00NTYwLWIxYWQtMThmYjY1Y2MwZDc2XkEyXkFqcGdeQXVyNDgyODgxNjE.V1FMjpgUX1000.jpg",
    },
    {
      title: "Thriller",
      poster:
        "https://i.pinimg.com/474x/bc/e6/10/bce61073776f0f38b6cfa15841f288fe.jpg",
    },
    {
      title: "Romance",
      poster:
        "https://rukminim1.flixcart.com/image/850/1000/xif0q/poster/j/g/g/medium-anime-couple-love-couple-hd-matte-finish-poster-original-imagh8jfyfwzvtav.jpeg?q=90",
    },
    {
      title: "Fantasy",
      poster:
        "https://preview.redd.it/vit5316edtr31.jpg?auto=webp&s=75069315522fc524fabf7cf3a3fb4547c083cd26",
    },
    {
      title: "Mecha",
      poster:
        "https://i.pinimg.com/originals/db/bc/c5/dbbcc5e2f7ae1c0c061ba807933d9a63.jpg",
    },
    {
      title: "Mystery",
      poster:
        "https://qph.cf2.quoracdn.net/main-qimg-e6bf904ecef141c8a5616b6cfa3b6024-lq",
    },
    {
      title: "Magic",
      poster: "https://i.ebayimg.com/images/g/8SQAAOSwaApfkbss/s-l1200.jpg",
    },
    {
      title: "Psychological",
      poster:
        "https://image.lexica.art/full_jpg/b3493c7c-7c22-4ccc-9227-a678b1b56b50",
    },
  ]);
  if (state) {
    return (
      <div className="categorySlider" id="categories">
        <div className="categorySliderContainer">
          {items.map((item) => {
            return (
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to={"/" + item.title}
              >
                <div className="categoryCard">
                  <img src={item.poster} alt={item.title} />
                  <div className="categoryCardInformation">
                    <h1>{item.title}</h1>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        <br />
      </div>
    );
  }
};
export default CategorySlider;
