// import React from "react";
// import { Link } from "react-router-dom";
// import news1 from "../../../assets/image/News1.jpg";
// import news2 from "../../../assets/image/News2.jpg";

// const CabinetNews = () => {
//   return (
//     <div className="pt-2 pb-2" style={{ backgroundColor: "rgb(242, 242, 242)" }}>
//       <div className="container text-center mb-3">
//         <h3 className="headline fw-bold text-dark">मंत्री मंडल समाचार</h3>
//       </div>

//       <div className="container-fluid">
//         <div className="row gx-4 gy-4">
//           {/* Left Column */}
//            <div className="col-12 col-md-4">
//             <Link to="/news/1" className="text-decoration-none text-dark">
//               <div className="card h-100 shadow-lg p-2" style={{ cursor: "pointer", height: "24rem" }}>
//                 <img src={news1} alt="News 2" className="card-img-top" />
//                 <div className="card-body">
//                   <p style={{ fontSize: "15px" }}>
//                     लोक निर्माण मंत्री और भास्कराचार्य संस्थान प्रमुख के बीच उच्च स्तरीय बैठक हुई ..
//                   </p>
//                   <p className="bi bi-clock text-center" style={{ fontSize: "11px", color: "gray" }}>
//                     19/05/2025 20:15
//                   </p>
//                 </div>
//               </div>
//             </Link>
//           </div>

//           {/* Middle Column */}
//           <div className="col-12 col-md-4">
//             <Link to="/news/2" className="text-decoration-none text-dark">
//               <div className="card h-100 shadow-lg p-2" style={{ cursor: "pointer", height: "24rem" }}>
//                 <img src={news1} alt="News 2" className="card-img-top" />
//                 <div className="card-body">
//                   <p style={{ fontSize: "15px" }}>
//                     लोक निर्माण मंत्री और भास्कराचार्य संस्थान प्रमुख के बीच उच्च स्तरीय बैठक हुई ..
//                   </p>
//                   <p className="bi bi-clock text-center" style={{ fontSize: "11px", color: "gray" }}>
//                     19/05/2025 20:15
//                   </p>
//                 </div>
//               </div>
//             </Link>
//           </div>

//           {/* Right Column (Stacked Cards) */}
//           <div className="col-12 col-md-4">
//             <div className="d-flex flex-column gap-3">
//               {/* Card 1 */}
//               <Link to="/news/3" className="text-decoration-none text-dark">
//                 <div className="card shadow-lg p-2">
//                   <div className="row g-0 align-items-center">
//                     <div className="col-5">
//                       <img src={news2} alt="News 3" className="img-fluid rounded"
//                         style={{ height: "8rem", objectFit: "cover" }} />
//                     </div>
//                     <div className="col-7 ps-2">
//                       <div className="mb-1 badge bg-danger text-white" style={{ fontSize: "10px" }}>
//                         उप मुख्यमंत्री
//                       </div>
//                       <p style={{ fontSize: "11px", fontWeight: "bold", cursor: "pointer" }}>
//                         उप मुख्यमंत्री श्री शुक्ल से हडको सीएमडी श्री कुलश्रेष्ठ ने की सौजन्य भेंट ..
//                       </p>
//                       <p className="bi bi-clock" style={{ fontSize: "11px", color: "gray" }}>
//                         19/05/2025 20:15
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </Link>

//               {/* Card 2 */}
//               <Link to="/news/4" className="text-decoration-none text-dark">
//                 <div className="card shadow-lg p-2">
//                   <div className="row g-0 align-items-center">
//                     <div className="col-5">
//                       <img src={news2} alt="News 4" className="img-fluid rounded"
//                         style={{ height: "8rem", objectFit: "cover" }} />
//                     </div>
//                     <div className="col-7 ps-2">
//                       <div className="mb-1 badge bg-danger text-white" style={{ fontSize: "10px" }}>
//                         उप मुख्यमंत्री
//                       </div>
//                       <p style={{ fontSize: "11px", fontWeight: "bold", cursor: "pointer" }}>
//                         उप मुख्यमंत्री श्री शुक्ल से हडको सीएमडी श्री कुलश्रेष्ठ ने की सौजन्य भेंट ..
//                       </p>
//                       <p className="bi bi-clock" style={{ fontSize: "11px", color: "gray" }}>
//                         19/05/2025 20:15
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </Link>

//               {/* More Button */}
//               <Link to="/news/all" className="btn btn-primary mt-2 fw-bold align-self-start">
//                 More &gt;
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CabinetNews;

//================================================

import React, { useState, useEffect } from "react";
import {Link,useNavigate } from "react-router-dom";
import defaultImg from "../../../assets/image/default_news.jpg";

const CabinetNews = () => {
  // State to store the fetched news data
  const [newsData, setNewsData] = useState([]);
  // State to manage loading status
  const [loading, setLoading] = useState(true);
  // State to manage any errors during data fetching
  const [error, setError] = useState(null);

 const navigate=useNavigate();

  // useEffect hook to fetch data when the component mounts
  useEffect(() => {
    const fetchCabinetNews = async () => {
      try {
        // Set loading to true before starting the fetch operation
        setLoading(true);
        // Clear any previous errors
        setError(null);

        const response = await fetch("http://localhost:3081/api/cabinatenews/get-cabinatenews");

        // Check if the response was successful
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Parse the JSON response
        const result = await response.json();

        if (result.data && result.data.length > 0) {
          const fetchedNews = result.data[0].cabinatenews;

          // Sort the news by publish_date in descending order (latest first)
          fetchedNews.sort((a, b) => {
            const dateA = new Date(a.publish_date);
            const dateB = new Date(b.publish_date);
            return dateB - dateA; // For descending order (latest date first)
          });

          // Set the sorted news data
          setNewsData(fetchedNews);
        } else {
          // If no data is found, set newsData to an empty array
          setNewsData([]);
        }
      } catch (err) {
        // Catch and set any errors that occur during the fetch
        console.error("Error fetching cabinet news:", err);
        setError("Failed to load cabinet news. Please try again later.");
      } finally {
        // Set loading to false once the fetch operation is complete (success or failure)
        setLoading(false);
      }
    };

    // Call the fetch function
    fetchCabinetNews();
  }, []); // Empty dependency array means this effect runs once after the initial render

  // Helper function to format the date string
  const formatDate = (dateString) => {
    if (!dateString) return "";
    try {
      const date = new Date(dateString);
      // Format to DD/MM/YYYY HH:MM
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
      const year = date.getFullYear();
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');
      return `${day}/${month}/${year} ${hours}:${minutes}`;
    } catch (e) {
      console.error("Invalid date string for formatting:", dateString, e);
      return dateString; // Return original string if formatting fails
    }
  };

  // Conditional rendering based on loading and error states
  if (loading) {
    return (
      <div className="pt-2 pb-2" style={{ backgroundColor: "rgb(242, 242, 242)" }}>
        <div className="container text-center mb-3">
          <h3 className="headline fw-bold text-dark">मंत्री मंडल समाचार</h3>
        </div>
        <div className="container-fluid text-center">
          <p>Loading cabinet news...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="pt-2 pb-2" style={{ backgroundColor: "rgb(242, 242, 242)" }}>
        <div className="container text-center mb-3">
          <h3 className="headline fw-bold text-dark">मंत्री मंडल समाचार</h3>
        </div>
        <div className="container-fluid text-center">
          <p className="text-danger">{error}</p>
        </div>
      </div>
    );
  }

  // Slice the newsData to fit the specific layout (2 large, 2 small)
  // Ensure we have at least 4 items for the layout to look as intended
  const mainNews = newsData.slice(0, 2); // First two for the large cards
  const sideNews = newsData.slice(2, 4); // Next two for the stacked small cards

  return (
    <div className="pt-2 pb-2" style={{ backgroundColor: "rgb(242, 242, 242)" }}>
      <div className="container text-center mb-3">
        <h3 className="headline fw-bold text-dark bi-people-fill">&nbsp;मंत्री मंडल समाचार</h3>
      </div>

      <div className="container-fluid">
        <div className="row gx-4 gy-4">
          {/* Left Column - Main News 1 */}
          {mainNews[0] && (
            <div className="col-12 col-md-4">
              {/* IMPORTANT: The backend controller does not return a unique 'id' for each news post.
                  For proper routing, your backend should include a unique 'id' field in the 'cabinatenews' objects.
                  For now, we are using a static path or a placeholder if an ID were available.
                  If your backend provides an 'id' field for each news item, change `/news/1` to `/news/${mainNews[0].id}`.
              */}
              <Link to={`/news/${mainNews[0].id || '1'}`} className="text-decoration-none text-dark">
                <div className="card h-100 shadow-lg p-2" style={{ cursor: "pointer", height: "24rem" }}>
                  {/* Use the featured_photo_hindi from the fetched data, with defaultImg as fallback */}
                  <img
                    src={mainNews[0].featured_photo_hindi || defaultImg}
                    alt={mainNews[0].title_hindi || "News Image"}
                    className="card-img-top"
                    onError={(e) => { e.target.onerror = null; e.target.src = defaultImg; }} // Fallback on image load error
                  />
                  <div className="card-body">
                    <p style={{ fontSize: "15px" }}>
                      {mainNews[0].title_hindi}
                    </p>
                    <p className="bi bi-clock text-center" style={{ fontSize: "11px", color: "gray" }}>
                      {formatDate(mainNews[0].publish_date)}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          )}

          {/* Middle Column - Main News 2 */}
          {mainNews[1] && (
            <div className="col-12 col-md-4">
              {/* Similar to above, update Link to use dynamic ID if available */}
              <Link to={`/news/${mainNews[1].id || '2'}`} className="text-decoration-none text-dark">
                <div className="card h-100 shadow-lg p-2" style={{ cursor: "pointer", height: "24rem" }}>
                  {/* Use the featured_photo_hindi from the fetched data, with defaultImg as fallback */}
                  <img
                    src={mainNews[1].featured_photo_hindi || defaultImg}
                    alt={mainNews[1].title_hindi || "News Image"}
                    className="card-img-top"
                    onError={(e) => { e.target.onerror = null; e.target.src = defaultImg; }} // Fallback on image load error
                  />
                  <div className="card-body">
                    <p style={{ fontSize: "15px" }}>
                      {mainNews[1].title_hindi}
                    </p>
                    <p className="bi bi-clock text-center" style={{ fontSize: "11px", color: "gray" }}>
                      {formatDate(mainNews[1].publish_date)}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          )}

          {/* Right Column (Stacked Cards) */}
          <div className="col-12 col-md-4">
            <div className="d-flex flex-column gap-3">
              {/* Map over the sideNews array to render the stacked cards dynamically */}
              {sideNews.map((newsItem, index) => (
                <Link to={`/news/${newsItem.id || (index + 3)}`} className="text-decoration-none text-dark" key={index}>
                  <div className="card shadow-lg p-2">
                    <div className="row g-0 align-items-center">
                      <div className="col-5">
                        {/* Use the featured_photo_hindi from the fetched data, with defaultImg as fallback */}
                        <img
                          src={newsItem.featured_photo_hindi || defaultImg}
                          alt={newsItem.title_hindi || "News Image"}
                          className="img-fluid rounded"
                          style={{ height: "8rem", objectFit: "cover" }}
                          onError={(e) => { e.target.onerror = null; e.target.src = defaultImg; }} // Fallback on image load error
                        />
                      </div>
                      <div className="col-7 ps-2">
                        {/* Assuming a static tag for these smaller news items, or you can fetch it if available */}
                        <p style={{ fontSize: "11px", fontWeight: "bold", cursor: "pointer" }}>
                          {newsItem.title_hindi}
                        </p>
                        <p className="bi bi-clock" style={{ fontSize: "11px", color: "gray" }}>
                          {formatDate(newsItem.publish_date)}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}

              {/* More Button */}
              <button className="btn btn-primary mt-2 fw-bold align-self-start"onClick={()=>navigate("/cabinatenews")}>
                और देखें  &gt;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CabinetNews;




