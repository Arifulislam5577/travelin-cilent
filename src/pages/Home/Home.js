import React from "react";
import CallToAction from "./CallToAction";
import Feature from "./Feature";
import Hero from "./Hero";
import ServicesArea from "./ServicesArea";
import useTitle from "../../hooks/useTitle";
const Home = () => {
  useTitle("Travelin");
  return (
    <section className="pb-10">
      <div className="container">
        <Hero />
        <Feature />
        <ServicesArea />
        <CallToAction />
      </div>
    </section>
  );
};

export default Home;
