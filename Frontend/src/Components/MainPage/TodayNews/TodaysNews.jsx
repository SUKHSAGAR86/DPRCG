
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import {useNavigate} from 'react-router-dom'
// import newsImage from '../../../assets/image/default_news.jpg'; // fallback image

// const TodayNews = () => {
//   const [newsData, setNewsData] = useState([]);
//   const navigate=useNavigate();

//   useEffect(() => {
//     const fetchNews = async () => {
//       try {
//         const response = await axios.get('http://localhost:3081/api/todaynews/get-todaynews');
//         const posts = response.data || [];

//         // Sort by publish_date and get latest 8
//         const latestPosts = posts
//           .sort((a, b) => new Date(b.publish_date) - new Date(a.publish_date))
//           .slice(0, 8);

//         setNewsData(latestPosts);
//       } catch (error) {
//         console.error('Error fetching news:', error);
//       }
//     };

//     fetchNews();
//   }, []);

//   // Split into two columns
//   const half = Math.ceil(newsData.length / 2);
//   const leftNews = newsData.slice(0, half);
//   const rightNews = newsData.slice(half);

//   // Format date to DD-MM-YYYY
//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     const day = String(date.getDate()).padStart(2, '0');
//     const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
//     const year = date.getFullYear();
//     return `${day}-${month}-${year}`;
//   };

//   const renderNewsCard = (item, index) => (
//     <div
//       key={index}
//       className="card mb-3 shadow-lg rounded-4 border-0 mt-1"
//       style={{ maxWidth: '100%' }}
//     >
//       <div className="row g-0">
//         <div className="col-5">
//           <img
//             src={item.Featured_photo_hind || newsImage}
//             className="img-fluid rounded-start h-100"
//             alt="News"
//           />
//         </div>
//         <div className="col-7">
//           <div className="card-body p-3">
//             <p className="card-text small mb-0">
//               {item.title_hindi || 'कोई शीर्षक उपलब्ध नहीं'}
//             </p>
//             <p className="card-text small mb-0 text-muted">
//               Date: {formatDate(item.publish_date)}
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <div>
//       <div className="main-highlight section-title rounded-2 mb-2 fw-bold">
//         आज का समाचार
//       </div>

//       <div className="row mt-1">

//         <div className="col-md-6 col-12">
//           {leftNews.map((item, index) => renderNewsCard(item, index))}
//         </div>
      
//         {/* Left Column */}
//         <div className="col-md-6 col-12">
//           {rightNews.map((item, index) => renderNewsCard(item, index + half))}
//         </div>
//       </div>

//         {/* Right Column */}
//       <div className="text-start mb-3 mt-2">
//         <div className="text-danger fw-bold text-decoration-none"style={{cursor:"pointer"}}>
//           और देखें +
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TodayNews;



import React, { useEffect, useState } from 'react';
import axios from 'axios';
import newsImage from '../../../assets/image/default_news.jpg'; // fallback image
import { useNavigate } from 'react-router-dom';

const TodayNews = () => {
  const [newsData, setNewsData] = useState([]);

  const navigate=useNavigate();

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('http://localhost:3081/api/todaynews/get-todaynews');
        const posts = response.data || [];

        // Get latest 8 posts sorted by publish_date
        const latestPosts = posts
          .sort((a, b) => new Date(b.publish_date) - new Date(a.publish_date))
          .slice(0, 8);

        setNewsData(latestPosts);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${String(date.getDate()).padStart(2, '0')}-${String(date.getMonth() + 1).padStart(2, '0')}-${date.getFullYear()}`;
  };

  const renderNewsCard = (item, index) => (
    <div key={index} className="card mb-3 shadow-lg rounded-4 border-0 mt-1">
      <div className="row g-0">
        <div className="col-5">
          <img
            src={item.Featured_photo_hind || newsImage}
            className="img-fluid rounded-start h-100"
            alt="News"
          />
        </div>
        <div className="col-7">
          <div className="card-body p-3">
            <p className="card-text small mb-0">
              {item.title_hindi || 'कोई शीर्षक उपलब्ध नहीं'}
            </p>
            <p className="card-text small mb-0 text-muted">
              Date: {formatDate(item.publish_date)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const half = Math.ceil(newsData.length / 2);
  const leftNews = newsData.slice(0, half);
  const rightNews = newsData.slice(half);

  return (
    <div>
      <div className="main-highlight section-title rounded-2 mb-2 fw-bold">
        आज का समाचार
      </div>

      <div className="row mt-1">
        <div className="col-md-6 col-12">
          {leftNews.map(renderNewsCard)}
        </div>
        <div className="col-md-6 col-12">
          {rightNews.map((item, index) => renderNewsCard(item, index + half))}
        </div>
      </div>

      <div className="text-start mb-3 mt-2">
        <div className="text-danger fw-bold text-decoration-none" style={{ cursor: "pointer" }} onClick={()=>navigate("/todaynews")}>
          और देखें +
        </div>
      </div>
    </div>
  );
};

export default TodayNews;
