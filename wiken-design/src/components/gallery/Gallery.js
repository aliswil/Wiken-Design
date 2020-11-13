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
    <div className="min-h-screen p-12">
      <div className="container mx-auto">
        <h1 className="text-5xl flex justify-center mb-12">Avisteikningar</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-20">
          {galleryData &&
            galleryData.map((gallery, index) => (
              <Link>
                <span
                  /*className="block bg-white relative shadow leading-snug"*/
                  key={index}
                >
                  <h2 className="mb-5">{gallery.title}</h2>
                  <img
                    className="shadow"
                    src={gallery.drawing.asset.url}
                    alt="drawing"
                  />
                </span>
              </Link>
            ))}
        </div>
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
