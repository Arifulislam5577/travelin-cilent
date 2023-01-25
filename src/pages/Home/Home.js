import React from "react";
import CallToAction from "./CallToAction";
import Feature from "./Feature";
import Hero from "./Hero";
import ServicesArea from "./ServicesArea";
import useTitle from "../../hooks/useTitle";
import Blog from "./Blog";
import Testimonial from "./Testimonial";

const Home = () => {
  useTitle("Travelin");
  return (
    <section className="pb-10">
      <div className="container">
        <Hero />
        <Feature />
        <ServicesArea />
        <Testimonial />
        <Blog />
        <CallToAction />
      </div>
    </section>
  );
};

export default Home;
