import React from "react";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="contacts">
      <Contact
        img="/mr-whiskerson.jpeg"
        name="Mr. Whiskerson"
        phone="(212) 555-1234"
        email="mr.whiskaz@catnap.meow"
      />
      <Contact
        img="/fluffykins.jpeg"
        name="Fluffykins"
        phone="(212) 555-2345"
        email="fluff@me.com"
      />
      <Contact
        img="/felix.jpeg"
        name="Felix"
        phone="(212) 555-4567"
        email="thecat@hotmail.com"
      />
      <Contact
        img="/pumpkin.jpeg"
        name="Pumpkin"
        phone="(0800) CAT KING"
        email="pumpkin@scrimba.com"
      />
    </div>
  );
}
export default App;
