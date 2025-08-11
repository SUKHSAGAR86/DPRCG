
// import React from 'react';
// import janman1 from '../../../assets/image/JanMan1.jpg';
// import janman2 from '../../../assets/image/JanMan2.jpg';
// import TodayNews from '../TodayNews/TodaysNews'

// const CMSpeech = () => {
//   return (
//     <div className="">
// <hr
//   style={{
//     border: "none",
//     height: "3px",
//     backgroundColor: "#e80000",
//     borderRadius: "5px",
//     width: "100%",
//   }}
// />

//       {/* Mobile Toggle Button */}
//       <div className="d-md-none mb-3">
//         <button
//           className="btn btn-outline-secondary w-100"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#sidebarContent"
//           aria-expanded="false"
//           aria-controls="sidebarContent"
//         >
//           ☰ मुख्यमंत्री का भाषण और अन्य
//         </button>
//       </div>

//       {/* Grid Row with Gap */}
//       <div className="row g-4">
//         {/* Sidebar Column */}
//         <div className="col-md-4 collapse d-md-block" id="sidebarContent">
//           <div className="main-highlight section-title rounded-2 mb-2">
//             मुख्यमंत्री भाषण
//           </div>

//           <div className="card shadow-lg rounded-4 p-1 border-0">
//             {/* Video */}
//             <div className="mb-3">
//               <iframe
//                 width="100%"
//                 height="220"
//                 src="https://www.youtube.com/embed/EVolPvVw_EU?si=2YAL8djRvNP75XcY"
//                 frameBorder="0"
//                 allowFullScreen
//                 className="rounded-3"
//                 title="CM Speech"
//               ></iframe>
//             </div>

//             {/* Magazine Covers */}
//             <div className="row g-2 mb-3">
//               <div className="col-6">
//                 <img
//                   src={janman1}
//                   alt="Janman Hindi"
//                   className="img-fluid border rounded-1 shadow-lg"
//                 />
//               </div>
//               <div className="col-6">
//                 <img
//                   src={janman2}
//                   alt="Janman English"
//                   className="img-fluid border shadow-lg rounded-1"
//                 />
//               </div>
//             </div>

//             {/* Buttons */}
//             <div className="d-grid gap-2">
//               <button className="btn btn-danger fw-semibold bi-file-earmark-pdf-fill">&nbsp;नोटिस</button>
//               <button className="btn btn-primary fw-semibold bi-briefcase-fill ">&nbsp;
// रोजगार नियोजन</button>
//             </div>
//           </div>
//         </div>

//         {/* Today News Column */}
//         <div className="col-md-8">
//           <TodayNews />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CMSpeech;





import React, { useEffect, useState } from 'react';
import janman1 from '../../../assets/image/JanMan1.jpg';
import janman2 from '../../../assets/image/JanMan2.jpg';
import TodayNews from '../TodayNews/TodaysNews';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CMSpeech = () => {
  const [latestVideo, setLatestVideo] = useState(null);
  const navigate=useNavigate();

  useEffect(() => {
    const fetchLatestVideo = async () => {
      try {
        const res = await axios.get('http://localhost:3081/api/videoalbum/get-videoalbum'); // replace with your actual API endpoint
        if (res.data && res.data.length > 0) {
          setLatestVideo(res.data[0]); // Assuming the latest is first
        }
      } catch (err) {
        console.error('Error fetching latest video:', err);
      }
    };

    fetchLatestVideo();
  }, []);

  return (
    <div className="">
      <hr
        style={{
          border: "none",
          height: "3px",
          backgroundColor: "#e80000",
          borderRadius: "5px",
          width: "100%",
        }}
      />

      {/* Mobile Toggle Button */}
      <div className="d-md-none mb-3">
        <button
          className="btn btn-outline-secondary w-100"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#sidebarContent"
          aria-expanded="false"
          aria-controls="sidebarContent"
        >
          ☰ मुख्यमंत्री का भाषण और अन्य
        </button>
      </div>

      {/* Grid Row with Gap */}
      <div className="row g-4">
        {/* Sidebar Column */}
        <div className="col-md-4 collapse d-md-block" id="sidebarContent">
          <div className="main-highlight section-title rounded-2 mb-2">
            मुख्यमंत्री भाषण
          </div>

          <div className="card shadow-lg rounded-4 p-1 border-0">
            {/* Dynamic Video */}
            <div className="mb-3">
              {latestVideo ? (
                <iframe
                  width="100%"
                  height="220"
                  src={`https://www.youtube.com/embed/${latestVideo.video_code_hindi}`}
                  frameBorder="0"
                  allowFullScreen
                  className="rounded-3"
                  title="CM Speech"
                ></iframe>
              ) : (
                <div className="text-center text-muted">Loading video...</div>
              )}
            </div>

            {/* Magazine Covers */}
            <div className="row g-2 mb-3">
              <div className="col-6">
                <img
                  src={janman1}
                  alt="Janman Hindi"
                  className="img-fluid border rounded-1 shadow-lg"
                />
              </div>
              <div className="col-6">
                <img
                  src={janman2}
                  alt="Janman English"
                  className="img-fluid border shadow-lg rounded-1"
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="d-grid gap-2 mb-1">
            


             <div className='d-flex justify-content-center row'>
               <button className="btn btn-danger fw-semibold bi-file-earmark-pdf-fill col-5 me-1 "onClick={()=>navigate("/notice")}>
                &nbsp;नोटिस
              </button>
              <button className="btn btn-primary fw-semibold bi-briefcase-fill col-5 ">
                &nbsp;रोजगार नियोजन
              </button></div>
               <div className='d-flex row justify-content-center'>
                <button className="btn btn-primary fw-semibold bi-person-lines-fill col-5 me-1" onClick={()=>navigate("/tenders")}>
                &nbsp;निविदाएं
              </button>
               <button className="btn btn-danger fw-semibold col-5 	 bi-journal-album"onClick={()=>navigate("/publication")}>
                &nbsp;प्रकाशन
              </button>
            
             </div>
            </div>
          </div>
        </div>

        {/* Today News Column */}
        <div className="col-md-8">
          <TodayNews />
        </div>
      </div>
    </div>
  );
};

export default CMSpeech;
