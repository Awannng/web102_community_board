import React from "react";
import Card from './components/Card'

const App = () => {
  return (
    <>
      <div className="container">
        <h1>YumYum Ice Cream</h1>
        <p>Find your favorite ice cream place here!!!</p>
        <p>Here, we have varity places that you can choose from.</p>

        <div className="card-container">
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
      </div>
    </>
  );
};

export default App;
