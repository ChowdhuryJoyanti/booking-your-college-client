import React, { useEffect, useState } from "react";
import Card from "../Card/Card";

const Cards = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    // fetch("http://localhost:5000/collegeDatas")
    fetch("https://booking-your-college-server.vercel.app/collegedatas")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);
  return (
    <div>
      {cards.map((item) => (
        <Card key={item._id} item={item}></Card>
      ))}
    </div>
  );
};

export default Cards;
