import React from "react";
import Card from "./components/Card";

const App = () => {
  return (
    <>
      <div className="container">
        <div className="header-text">
          <h1>YumYum Ice Cream</h1>
          <p>Find your favorite ice cream place here!!!</p>
          <p>Here, we have varity places that you can choose from.</p>
        </div>

        <div className="card-container">
          <Card name="Sprinkles" image="public/Sprinkles.jpg" />
          <Card name="Ice Cream House" image="public/ice_cream_house.png" />
          <Card name="Ice Cream Center" image="public/ice_cream_center.jpg" />
          <Card name="Carvel" image="public/carvel.jpg" />
          <Card name="Baskin-Robbins" image="public/baskin_robbins.png" />
          <Card
            name="Solo Scoop Creamery"
            image="public/solo_scoop_creamery.png"
          />
          <Card name="Nieves Tia Mimi" image="public/nieves_tia.jpg" />
          <Card name="Stuffed Ice Cream" image="public/stuffed_ice_cream.jpg" />
          <Card name="Ices Queen" image="public/ices_queen.jpg" />
          <Card name="Uncle Louie" image="public/uncle_louie.jpg" />
          <Card name="Amai Bā" image="public/amai.jpg" />
          <Card name="Jane's Ice Cream" image="public/jane's.jpg" />
        </div>
      </div>
    </>
  );
};

export default App;
