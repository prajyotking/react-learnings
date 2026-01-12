import React from "react";
import Card from "./components/Card";

const App = () => {
  return (
    <div className="parent">
      <Card
        img="https://plus.unsplash.com/premium_photo-1757581531991-da0f33189b5c?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        user="Siddarth" 
        age={22}
      />
      <Card
        img="https://img.freepik.com/premium-photo/delicious-paneer-butter-masala-photography_928503-851.jpg"
        user="PannerBoy"
        age={10}
      />
      <Card
        img="https://plus.unsplash.com/premium_photo-1695811846376-dfdfcc560ab0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        user="Prince"
        age={27}
      />
    </div>
  );
};

export default App;
