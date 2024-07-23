import React, { useState } from "react";
import "./Slider.scss";
const Slider = ({ featured }) => {
  const m = 4;
  const [information, setInformation] = useState(featured);
  setTimeout(() => {
    setInformation(
      information.map((item) => {
        return {
          ...item,
          position: item.position === -1 ? m - 1 : item.position - 1,
        };
      })
    );
  }, 5000);
  return (
    <div
      className="slider"
      style={{
        "--item0Laptop": "url('" + information[0].poster + "')",
        "--item0Mobile": "url('" + information[0].posterMobile + "')",
        "--item1Laptop": "url('" + information[1].poster + "')",
        "--item1Mobile": "url('" + information[1].posterMobile + "')",
        "--item2Laptop": "url('" + information[2].poster + "')",
        "--item2Mobile": "url('" + information[2].posterMobile + "')",
        "--item3Laptop": "url('" + information[3].poster + "')",
        "--item3Mobile": "url('" + information[3].posterMobile + "')",
        "--item4Laptop": "url('" + information[4].poster + "')",
        "--item4Mobile": "url('" + information[4].posterMobile + "')",
      }}
    >
      {information.map((item) => {
        return (
          <div
            className={`item${item.id} transition-page-featured`}
            style={{
              height: "100vh",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
              position: "absolute",
              transition:
                item.position === 0 || item.position === -1 ? "0.5s" : "none",
              left: `${100 * item.position}vw`,
              top: "0",
              width: "100%",
            }}
          >
            <div className="trending-page-overlay">
              <div className="trending-page-info">
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <div className="buttons">
                  <button className="play">Play Now</button>
                  <button className="trailer">Watch Trailer</button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const featured_slider = [
  {
    id: 0,
    title: "Naruto",
    description:
      "Naruto is a Japanese manga series written and illustrated by Masashi Kishimoto. It tells the story of Naruto Uzumaki, a young ninja who seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village.",
    poster: "https://wallpapercave.com/wp/wp8840620.jpg",
    posterMobile:
      "https://e1.pxfuel.com/desktop-wallpaper/938/190/desktop-wallpaper-naruto-characters-poster-24-naruto-shippuden-poster.jpg",
    position: 0,
  },
  {
    id: 1,
    title: "Jujutsu Kaisen",
    description:
      "Jujutsu Kaisen is a Japanese manga series written and illustrated by Gege Akutami. It has been serialized in Shueisha's shōnen manga magazine Weekly Shōnen Jump since March 2018, with its chapters collected and published in 24 tankōbon volumes as of October 2023.",
    poster:
      "https://ph-test-11.slatic.net/p/b4c0c05b8867152acc7c1f7b2c7b5494.jpg",
    posterMobile:
      "https://w0.peakpx.com/wallpaper/334/580/HD-wallpaper-sukuna-curse-demon-jujutsu-jujutsu-kaisen.jpg",
    position: 1,
  },
  {
    id: 2,
    title: "Demon Slayer",
    description:
      "Demon Slayer: Kimetsu no Yaiba is a Japanese manga series written and illustrated by Koyoharu Gotouge. It was serialized in Shueisha's shōnen manga magazine Weekly Shōnen Jump from February 2016 to May 2020, with its chapters collected in 23 tankōbon volumes.",
    poster:
      "https://assets-in.bmscdn.com/discovery-catalog/events/et00313314-tsbxzhaxqm-landscape.jpg",
    posterMobile:
      "https://images-cdn.ubuy.co.in/636fae6984b0a124f962a8e4-demon-slayer-poster-16-24-in-hd-canvas.jpg",
    position: 2,
  },
  {
    id: 3,
    title: "One Piece",
    description:
      "One Piece is a Japanese manga series written and illustrated by Eiichiro Oda. It has been serialized in Shueisha's shōnen manga magazine Weekly Shōnen Jump since July 1997, with its individual chapters compiled in 107 tankōbon volumes as of November 2023.",
    poster: "https://wallpapercave.com/wp/wp3944702.jpg",
    posterMobile:
      "https://images-cdn.ubuy.co.in/64020c032b88b367ca7410e3-anime-one-piece-poster-the-straw-hat.jpg",
    position: 3,
  },
  {
    id: 4,
    title: "Full Metal Alchemist",
    description:
      "Fullmetal Alchemist is a Japanese manga series written and illustrated by Hiromu Arakawa. It was serialized in Square Enix's shōnen manga anthology magazine Monthly Shōnen Gangan between July 2001 and June 2010; the publisher later collected the individual chapters in 27 tankōbon volumes.",
    poster:
      "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABZ2MgQxDI3h8YO3qTlCS9vIsrtlhyS1IsfUpoGL9QApKxH8ioc5WyfIrCZvIkgyj_wb2mWjEa_9ZRwQ-H3zAt84umAWRYfBchwV9.jpg?r=2a5",
    posterMobile:
      "https://rukminim2.flixcart.com/image/850/1000/k6zda4w0/poster/y/r/w/medium-fullmetal-alchemist-200-gsm-textured-paper-quality-poster-original-imafpbsanzqt6yzc.jpeg?q=90",
    position: 4,
  },
];

export default Slider;
