import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Card from "./Components/Card";
import data from "./data";

function App() {
  <Hero />;
  const cardElement = data.map((item) => {
    return (
      <Card key={item.id} {...item} />
      // <Card
      //   key={item.id}
      //   coverImg={item.coverImg}
      //   rating={item.stats.rating}
      //   reviewCount={item.stats.reviewCount}
      //   location={item.location}
      //   title={item.title}
      //   price={item.price}
      //   openSpots={item.openSpots}
      // />
    );
  });

  return (
    <div>
      <Navbar />
      <section className="cards-list">{cardElement}</section>
    </div>
  );
}

export default App;
