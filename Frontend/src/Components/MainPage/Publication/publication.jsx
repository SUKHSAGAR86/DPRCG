
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from "../Navbar/NavBar";
import TobBar from "../Topbar/Topbar";
import Logosection from "../LogoSection/Logosection";
import "./publication.css"

const Publication = () => {
  const [publication, setPublication] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPublication = async () => {
      try {

        const response = await axios.get('http://localhost:3081/api/publication/get-publication');
        setPublication(response.data);
      } catch (err) {
        console.error('Error fetching publication:', err);
        setError('Failed to load publication. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchPublication();
  }, []); 

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '50vh' }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="ms-3 text-muted">Loading publication...</p>
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

  if (publication.length === 0) {
    return (
      <div className="alert alert-info text-center m-5" role="alert">
        No publication available at the moment.
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

  return (
  <div>
    <TobBar/>
    <Logosection/>
    <Navbar/>
    <div className="container py-5">
      <h3 className="text-center mb-5 fw-bold text-white bg-primary p-2">
        <i className="bi-journal-album me-3"></i>&nbsp;प्रकाशन
      </h3>
      <div className="list-group shadow-sm rounded-3">
        {publication.map((publication, index) => (
          <div
            key={publication.id}
            className="list-group-item flex-column flex-md-row d-flex justify-content-between align-items-md-center py-3"
            //d-flex  
          >
            <div className="d-flex align-items-center mb-2 mb-md-0">
              <i className={`${getFileIcon(publication.file_type_hindi)} fs-4 me-3`}></i>
              <a
                href={publication.file_path_hindi}
                download>
              <span className="fw-medium text-dark me-2">{publication.title_hindi}</span>
              </a>
                {/* <div className="text-muted small me-3 mb-2 mb-sm-0">
                दिनांक: {formatDate(publication.createdtime)}
           
            </div> */}



              {/* Show 'New' badge for the first 3 publication (or adjust as needed) */}
              {index < 3 && (
                <span className="badge bg-warning rounded-pill fw-bold text-dark blink-badge ">
                  नया
                </span>
              )}
            </div>
            
            <div className="d-flex align-items-center flex-wrap justify-content-end">
             
              <a
                href={publication.file_path_hindi}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm btn-danger fw-bold rounded-pill px-3 me-2 mb-2 mb-sm-0"
              >
                देखें
              </a>
              <a
                href={publication.file_path_hindi}
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

export default Publication;