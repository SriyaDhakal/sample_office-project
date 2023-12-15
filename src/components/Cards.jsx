
import React from "react";
import "./cards.css";
import Banner from "./Banner";

const Cards = () => {
  const CardData = [
    {
      title: "Quality Products",
      paragraph: "This is the content for Card 1.",
    },
    {
      title: "Trained Workers",
      paragraph: "This is the content for Card 2.",
    },
    {
      title: "Quick Response",
      paragraph: "This is the content for Card 3.",
    },
  ];
  return (
    <div>
      <div
        className="card-box text-center"
      
      >
        <div className="card-container">
          {CardData.map((card, index) => (
            <div key={index} title={CardData.title} className="card-box  ">
              <h3>{card.title}</h3>
              <p>{card.paragraph}</p>
            </div>
          ))}
        </div>
      </div>
   
    </div>
  );
};

export default Cards;