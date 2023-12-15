import React from "react";
import deepaImage from "./images/IMG_3245_2.jpg";
import "./Photos.css";

function HomePage() {
  return (
    <div>
      <h1>Meet the Designer</h1>
      <div className="gallery-item">
        <img src={deepaImage} alt="Photo of Deepa" />
      </div>
      <div className="gallery-item">
        <p> Meet Deepa Bhatnagar, a visionary with a passion for crafting beauty within spaces. With an innate love for interior design, Deepa is able to breathe life, warmth, and comfort into interior spaces.

Deepa's heart beats for design, and her expertise extends beyond aesthetics. She understands that a well-designed space is not just about appearances; it's about emotion and experience. Whether it's revamping a living room, reimagining a kitchen, or adding a personal touch to a bedroom, Deepa's keen eye for detail and love for helping others shine through in every project.

Her mission is simple yet profound: to make every space come alive and feel like home. Through her work, Deepa inspires individuals to discover the magic of design, transforming their surroundings into places of joy, tranquility, and self-expression.

Deepa Bhatnagar is more than an interior designer; she's a creator of beautiful, meaningful, and deeply personal spaces. Join her on a journey to unlock the potential of your home and experience the transformative power of design. </p>
      </div>
    </div>
  );
}

export default HomePage;


