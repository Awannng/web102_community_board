import React from "react";
import Card from "./components/Card";

const App = () => {
  return (
    <>
      {/* The container which centers the page */}
      <div className="container">
        {/* The title of the page and some descriptions */}
        <div className="hero-section">
          <div>
            <img
              src="public/ice_cream.png"
              alt="ice cream icon"
              width="150px"
              height="150px"
            />
          </div>
          <div className="header-text">
            <h1>YumYum Ice Cream</h1>
            <p>Find your favorite ice cream store!!!</p>
            <p>Here, we have variety stores that you can choose!</p>
          </div>
        </div>

        {/* Cards with props */}
        <div className="card-container">
          <Card
            name="Sprinkles"
            image="src/assets/Sprinkles.jpg"
            url="https://ilikesprinkles.com/"
          />
          <Card
            name="Ice Cream House"
            image="src/assets/ice_cream_house.png"
            url="https://theicecreamhouse.com/"
          />
          <Card
            name="Ice Cream Center"
            image="src/assets/ice_cream_center.jpg"
            url="https://www.yelp.com/biz/ice-cream-center-brooklyn"
          />
          <Card
            name="Carvel"
            image="src/assets/carvel.jpg"
            url="https://locations.carvel.com/ny/brooklyn/1048-coney-island-ave?utm_source=google&utm_medium=organic&utm_campaign=locations_partner"
          />
          <Card
            name="Baskin-Robbins"
            image="src/assets/baskin_robbins.png"
            url="https://locations.baskinrobbins.com/ny/brooklyn/6502-14th-ave-342286-br?utm_source=google&utm_medium=organic&utm_campaign=Yext"
          />
          <Card
            name="Solo Scoop Creamery"
            image="src/assets/solo_scoop_creamery.png"
            url="https://www.soloscoopcreamery.com/"
          />
          <Card
            name="Nieves Tia Mimi"
            image="src/assets/nieves_tia.jpg"
            url="https://www.nievestiamimi.getsauce.com/"
          />
          <Card
            name="Stuffed Ice Cream"
            image="src/assets/stuffed_ice_cream.jpg"
            url="https://stuffedicecreamnyc.com/"
          />
          <Card
            name="Ices Queen"
            image="src/assets/ices_queen.jpg"
            url="https://www.yelp.com/biz/ices-queen-brooklyn"
          />
          <Card
            name="Uncle Louie"
            image="src/assets/uncle_louie.jpg"
            url="https://unclelouiegee.com/"
          />
          <Card
            name="Amai Bā"
            image="src/assets/amai.jpg"
            url="https://www.xn--amaib-jwa.com/"
          />
          <Card
            name="Jane's Ice Cream"
            image="src/assets/jane's.jpg"
            url="https://www.larkcafe.com/icecream"
          />
        </div>
      </div>
    </>
  );
};

export default App;
