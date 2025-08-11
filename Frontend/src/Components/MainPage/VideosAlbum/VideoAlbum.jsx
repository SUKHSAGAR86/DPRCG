import React, { useEffect, useState } from "react";
import axios from "axios";
// import '../../../Styles/PhotoAlbum.css';

import Navbar from "../Navbar/NavBar";
import TobBar from "../Topbar/Topbar";
import Logosection from "../LogoSection/Logosection";

import defaultImage from "../../../assets/image/default_news.jpg"; 

const VideoAlbum = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchVideos = async () => {
    try {
      const response = await axios.get("http://localhost:3081/api/videoalbum/get-videoalbum");
      setVideos(response.data);
    } catch (err) {
      setError("Unable to fetch video albums");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  if (loading) return <div className="text-center mt-5">Loading...</div>;
  if (error) return <div className="text-danger text-center mt-5">{error}</div>;

  return (
    <div>
       <TobBar />
      <Logosection />
      <Navbar />
    <div className="container py-5">
      <h3 className="text-center mb-5 fw-bold bg-body-secondary p-2 bi-camera-reels-fill rounded ">&nbsp;वीडियो एलबम</h3>
      <div className="row">
        {videos.map((video, index) => (
          <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card h-100 shadow-lg border-0 rounded-2 ">
              {/* Use thumbnail image or fallback image */}
              <img
                src={`https://img.youtube.com/vi/${video.video_code_hindi}/0.jpg`}
                alt={video.title_hindi}
                className="card-img-top img-fluid"
                onError={(e) => (e.target.src = defaultImage)}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body text-center">
                <h6 className="card-title fw-bold">{video.title_hindi}</h6>
              </div>

              {/* Optional: Link to YouTube video (if needed in future) */}
              <a href={`https://www.youtube.com/watch?v=${video.video_code_hindi}`} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary m-2 bi-eye-fill fw-bold">&nbsp;देखें</a>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default VideoAlbum;

