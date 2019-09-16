import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
// import SpongeBobCard from "./components/SpongeBobCard";
// import SquidwardCard from "./components/SquidwardCard";
// import MrKrabsCard from "./components/MrKrabsCard";
import images from "./images.json";
import Card from "./components/Card";

function App() {
  return (
    <div>
    <Title>Clicky Game</Title>
    <Wrapper>
      <Card
        image={images[0].image}
      />
      <Card
        image={images[1].image}
      />
      <Card
        image={images[2].image}
      />
      <Card
        image={images[3].image}
      />
      <Card
        image={images[4].image}
      />
      <Card
        image={images[5].image}
      />
      <Card
        image={images[6].image}
      />
      <Card
        image={images[7].image}
      />
      <Card
        image={images[8].image}
      />
      <Card
        image={images[9].image}
      />
      <Card
        image={images[10].image}
      />
      <Card
        image={images[11].image}
      />
    </Wrapper>
    </div>
  );
}

export default App;
