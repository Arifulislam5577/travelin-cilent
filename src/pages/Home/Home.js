import React from "react";
import Feature from "./Feature";
import Hero from "./Hero";

const Home = () => {
  return (
    <section>
      <div className="container">
        <Hero />
        <Feature />
      </div>
    </section>
  );
};

export default Home;
