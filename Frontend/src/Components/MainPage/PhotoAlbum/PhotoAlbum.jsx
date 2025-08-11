import React, { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "../Navbar/NavBar";
import TobBar from "../Topbar/Topbar";
import Logosection from "../LogoSection/Logosection";

import '../../../Styles/PhotoAlbum.css'
import defaultImage from "../../../assets/image/default_news.jpg"; // fallback image

const PhotoAlbum = () => {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchAlbums = async () => {
    try {
      const response = await axios.get("http://localhost:3081/api/photoalbum/get-photoalbum");
      setAlbums(response.data);
    } catch (err) {
      setError("Unable to fetch albums");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAlbums();
  }, []);

  if (loading) return <div className="text-center mt-5">Loading...</div>;
  if (error) return <div className="text-danger text-center mt-5">{error}</div>;

  return (
    <div>
       <TobBar />
      <Logosection />
      <Navbar />
     <div className="container py-5">
      <h3 className="text-center mb-4 bi-camera-fill fw-bold bg-body-secondary p-2">&nbsp;फोटो एलबम</h3>
      <div className="row">
        {albums.map((album, index) => (
          <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card h-100 shadow-lg border-0 rounded-2 p-2">
              <img
                src={album.image_url || defaultImage}
                alt={album.album_name_hindi}
                className="card-img-top img-fluid"
                onError={(e) => (e.target.src = defaultImage)}
                style={{ height: "200px", objectFit: "" }}
              />
              <div className="card-body text-center">
                <h6 className="card-title fw-bold">{album.album_name_hindi}</h6>
              </div>

              {/* <link to="" /> */}
            </div>
          </div>
        ))}
      </div>
    </div>

    </div>
   
  );
};

export default PhotoAlbum;
