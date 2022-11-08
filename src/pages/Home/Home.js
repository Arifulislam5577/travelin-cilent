import React from "react";
import CallToAction from "./CallToAction";
import Feature from "./Feature";
import Hero from "./Hero";
import Services from "./Services";

const Home = () => {
  return (
    <section className="pb-10">
      <div className="container">
        <Hero />
        <Feature />
        <Services />
        <CallToAction />
      </div>
    </section>
  );
};

export default Home;
