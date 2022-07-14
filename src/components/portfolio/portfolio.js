import React, { useState } from "react";
import project1 from "../../assets/images/portfolioImage/project2.png"
import project2 from "../../assets/images/portfolioImage/project3.png"
import project3 from "../../assets/images/portfolioImage/project4.png"
import project4 from "../../assets/images/portfolioImage/project5.png"
import project5 from "../../assets/images/portfolioImage/project6.webp"
const images = [
  {
    src: project1,
    title: "lorem ipsum",
    subtitle: "lorem ipsum",
    category: "lorem ipsum",
  },
  {
    src: project2,
    title: "lorem ipsum",
    subtitle: "lorem ipsum",
    category: "lorem ipsum",
  },
  {
    src: project3,
    title: "lorem ipsum",
    subtitle: "lorem ipsum",
    category: "lorem ipsum",
  },
  {
    src: project4,
    title: "lorem ipsum",
    subtitle: "lorem ipsum",
    category: "lorem ipsum",
  },
  {
    src: project5,
    title: "lorem ipsum",
    subtitle: "lorem ipsum",
    category: "lorem ipsum",
  },
];

function GalleryItem({src, category, subtitle, title, updateActiveImage, index}) {
  console.log(src)
  return (
    <div className="gallery-item-wrapper">
      <div />
      <div className="gallery-item">
        <div className="gallery-item-info">
          <h1 className="gallery-info-title">{title}</h1>
          <h6 className="gallery-info-subtitle">{subtitle}</h6>
          <p className="gallery-info-category">{category}</p>
        </div>
        <div
          className="gallery-item-image"
          style={{ backgroundImage: `url(${src})` }}
        ></div>

      </div>
      <div />
    </div>
  );
}

const Portfolio = () => {
  const [activeImage, setActiveImage] = useState(1);

  return (
    <section className="section-wrapper gallery-wrap">
      <div className="gallery">
        <div className="gallery-counter">
          <span> {activeImage} </span>
          <span className="divider" /> 
          <span>{images.length}</span>
        </div>
        {images.map((image, index) => (
          <GalleryItem
            key={image.src}
            index={index}
            {...image}
            updateActiveImage={(index) => setActiveImage(index + 1)}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
