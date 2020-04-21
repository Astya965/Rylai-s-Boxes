import React from "react";
import Header from "../header/header.jsx";
import CarouselSection from "../carousel-section/carousel-section.jsx";

const App = (props) => {
  const {lootboxes} = props;

  return (
    <React.Fragment>
      <Header />
      <main className="main">
        <CarouselSection lootboxes={lootboxes}/>
      </main>
    </React.Fragment>
  );
}

export default App;
