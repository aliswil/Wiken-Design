import React, { useEffect, useState } from "react";
import "./gallery.css";
import sanityClient from "../../client";
//import { error } from "console";
import { Link } from "react-router-dom";

function Gallery() {
  const [galleryData, setGalleryData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "gallery"]{
          title, 
          name, 
          drawing{
            asset->{
              _id, 
              url
            }
          }
      }`
      )
      .then((data) => setGalleryData(data))
      .catch(console.error);
  }, []);

  console.log(galleryData);

  return (
    <div className="gallery-header">
      <h1 className="avistegninger_overskrift">Avistegninger</h1>
      <div>
        {galleryData &&
          galleryData.map((gallery, index) => (
            <Link>
              <span key={index}>
                <h2>{gallery.title}</h2>
                <img src={gallery.drawing.asset.url} alt="drawing" />
              </span>
            </Link>
          ))}
      </div>
    </div>
  );
}

export default Gallery;

/*<Link to={"/" + gallery.slug.current} key={gallery.slug.current}>
  <span key={index}>
    <h2>{gallery.title}</h2>
  </span>
</Link>;*/
