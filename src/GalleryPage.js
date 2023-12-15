import React from "react";
import image1 from "./images/IMG_8080.jpg";
import image2 from "./images/IMG_6630.jpg";
import image3 from "./images/IMG_3355.jpg";
import image4 from "./images/IMG_3325.jpg";


function GalleryPage() {
  return (
    <div className="gallery">
      <h1>Gallery</h1>
      <div className="gallery-item">
        <img src={image1} alt="Photo 1" />
      </div>
      <div className="gallery-item">
        <img src={image2} alt="Photo 2" />
      </div>
      <div className="gallery-item">
        <img src={image3} alt="Photo 3" />
      </div>
      <div className="gallery-item">
        <img src={image4} alt="Photo 4" />
      </div>
    </div>
  );
}

export default GalleryPage;
