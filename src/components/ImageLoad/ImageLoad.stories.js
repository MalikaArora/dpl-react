import React from 'react';
import './ImageLoad.css';
import ImageLoad from './ImageLoad';
import mountainRoad from "./assets/mountain-road.jpg";
import mountainRoadSmall from "./assets/mountain-road-small.jpg";
import forest from "./assets/forest.jpg";
import forestSmall from "./assets/forest-small.jpg";
import beach from "./assets/beach.jpg";
import beachSmall from "./assets/beach-small.jpg";

export default {
    title: 'Image Load',    
}



export const App = () => {
  const images = [
    {
      src: mountainRoad,
      placeholder: mountainRoadSmall,
      alt: "Mountain Road"
    },
    {
      src: forest,
      placeholder: forestSmall,
      alt: "Forest"
    },
    {
      src: beach,
      placeholder: beachSmall,
      alt: "Beach"
    }
  ]
  return (
    <div className="app">
      <header className="app-header">
        <h1>Progressive Load Image Using React Hooks</h1>
        {/* Loading a blurred image first enhances the UX and reduces a website’s loading time significantly
        <br></br> */}
        <div className="wrapper">
          {
            images.map((item, i) => (
              <ImageLoad
                key={i}
                src={item.src}
                placeholder={item.placeholder}
                alt={item.alt}
              />
            ))
          }
        </div>
      </header>
    </div>
  )
}

