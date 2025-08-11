



import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from "../Navbar/NavBar";
import TobBar from "../Topbar/Topbar";
import Logosection from "../LogoSection/Logosection";

import "./tenders.css";

const Tender = () => {
  const [tenders, setTenders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTenders = async () => {
      try {
        // Ensure this URL matches your backend's actual endpoint
        const response = await axios.get('http://localhost:3081/api/tenders/get-tenders');
        setTenders(response.data);
      } catch (err) {
        console.error('Error fetching tenders:', err);
        setError('Failed to load tenders. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchTenders();
  }, []); // Empty dependency array means this effect runs once after the initial render

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '50vh' }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="ms-3 text-muted">Loading tenders...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-danger text-center m-5" role="alert">
        {error}
      </div>
    );
  }

  if (tenders.length === 0) {
    return (
      <div className="alert alert-info text-center m-5" role="alert">
        No Tenders available at the moment.
      </div>
    );
  }

  // Helper function to determine icon based on file type
  const getFileIcon = (fileType) => {
    switch (fileType?.toLowerCase()) {
      case 'pdf':
        return 'bi bi-file-earmark-pdf-fill text-danger'; // Bootstrap Icons for PDF
      case 'doc':
      case 'docx':
        return 'bi bi-file-earmark-word-fill text-primary'; // Bootstrap Icons for Word
      case 'xls':
      case 'xlsx':
        return 'bi bi-file-earmark-excel-fill text-success'; // Bootstrap Icons for Excel
      case 'jpg':
      case 'jpeg':
      case 'png':
      case 'gif':
        return 'bi bi-file-earmark-image-fill text-info'; // Bootstrap Icons for Image
      default:
        return 'bi bi-file-earmark-fill text-secondary'; // Generic file icon
    }
  };

  // Helper function to format date

  // const formatDate = (dateString) => {
  //   if (!dateString) return '';
  //   const date = new Date(dateString);
  //   const day = String(date.getDate()).padStart(2, '0');
  //   const month = String(date.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed
  //   const year = date.getFullYear();
  //   return `${day}/${month}/${year}`;
  // };

  return (
  <div>
    <TobBar/>
    <Logosection/>
    <Navbar/>
    <div className="container py-5">
      <h3 className="text-center mb-5 fw-bold text-white bg-primary p-2">
        <i className="bi-person-lines-fill me-3"></i>&nbsp;निविदाएं
      </h3>
      <div className="list-group shadow-sm rounded-3">
        {tenders.map((tenders, index) => (
          <div
            key={tenders.id}
            className="list-group-item flex-column flex-md-row d-flex justify-content-between align-items-md-center py-3"
            //d-flex  
          >
            <div className="d-flex align-items-center mb-2 mb-md-0">
              <i className={`${getFileIcon(tenders.file_type_hindi)} fs-4 me-3`}></i>
              <a
                href={tenders.file_path_hindi}
                download>
              <span className="fw-medium text-dark me-2">{tenders.title_hindi}</span>
              </a>
                {/* <div className="text-muted small me-3 mb-2 mb-sm-0">
                दिनांक: {formatDate(tenders.createdtime)}
           
            </div> */}



              {/* Show 'New' badge for the first 3 tenders (or adjust as needed) */}
              {index < 3 && (
                <span className="badge bg-warning rounded-pill fw-bold text-dark blink-badge ">
                  नया
                </span>
              )}
            </div>
            
            <div className="d-flex align-items-center flex-wrap justify-content-end">
             
              <a
                href={tenders.file_path_hindi}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm btn-danger fw-bold rounded-pill px-3 me-2 mb-2 mb-sm-0"
              >
                देखें
              </a>
              <a
                href={tenders.file_path_hindi}
                download
                className="btn btn-sm btn-warning fw-bold rounded-pill px-3 mb-2 mb-sm-0"
              >
                डाउनलोड करें
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};

export default Tender;