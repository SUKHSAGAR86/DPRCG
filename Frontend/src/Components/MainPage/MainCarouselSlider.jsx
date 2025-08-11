// import React from 'react';

// import img1 from '../../assets/image/Banner06.jpeg';
// import img2 from '../../assets/image/HeadeImage1.jpg';
// import img3 from '../../assets/image/HeaderImage3.png';
// import CMProfile from './CMProfile';

// const MainCarouselSlider = () => {
//   return (
//     <div className='row'>
//       <div className="col-12 col-md-9 mb-4 mb-md-0">
//       <div
//         id="bricsCarousel"
//         className="carousel slide"
//         data-bs-ride="carousel"
//         data-bs-interval="1500"
//       >
//         <div className="carousel-inner">
//           <div className="carousel-item active">
//             <img src={img1} className="d-block w-100 rounded-2 slideImage" alt="Slide 1" />
//             <div className="carousel-caption">1</div>
//           </div>

//           <div className="carousel-item">
//             <img src={img2} className="d-block w-100 slideImage" alt="Slide 2" />
//             <div className="carousel-caption">2</div>
//           </div>

//           <div className="carousel-item">
//             <img src={img1} className="d-block w-100 slideImage" alt="Slide 3" />
//             <div className="carousel-caption">3</div>
//           </div>

//           <div className="carousel-item">
//             <img src={img3} className="d-block w-100 slideImage" alt="Slide 4" />
//             <div className="carousel-caption">4</div>
//           </div>
//         </div>

//         {/* Controls */}
//         <button
//           className="carousel-control-prev"
//           type="button"
//           data-bs-target="#bricsCarousel"
//           data-bs-slide="prev"
//         >
//           <span className="carousel-control-prev-icon"></span>
//         </button>
//         <button
//           className="carousel-control-next"
//           type="button"
//           data-bs-target="#bricsCarousel"
//           data-bs-slide="next"
//         >
//           <span className="carousel-control-next-icon"></span>
//         </button>
//       </div>
//     </div>

// <div className='col'>
//   <CMProfile/>
// </div>


//     </div>
//   );
// };

// export default MainCarouselSlider;




import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CMProfile from './CMProfile';
import defaultImg from '../../assets/image/default_news.jpg'
const MainCarouselSlider = () => {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const res = await axios.get('http://localhost:3081/api/banners/get-banners');
        setBanners(res.data);
      } catch (err) {
        console.error('Error fetching banners:', err);
      }
    };

    fetchBanners();
  }, []);

  return (
    <div className='row'>
      <div className="col-12 col-md-9 mb-4 mb-md-0">
        <div
          id="bricsCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="1500"
        >
          <div className="carousel-inner">
            {banners.map((banner, index) => (
              <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                <img
                  src={banner.imageUrlHindi ? `http://localhost:3081/api/banners/${banner.imageUrlHindi}`:defaultImg }
                  onError={(e)=>(e.target.src=defaultImg)}
                  className="d-block w-100 rounded-2 slideImage"
                  alt={`Slide ${index + 1}`}
                />
                <div className="carousel-caption">
                  {banner.title_hindi ?.trim()? banner.title_hindi:"शीर्षक उपलब्ध नहीं"}
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#bricsCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>

          
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#bricsCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </div>

      <div className='col'>
        <CMProfile />
      </div>
    </div>
  );
};

export default MainCarouselSlider;
