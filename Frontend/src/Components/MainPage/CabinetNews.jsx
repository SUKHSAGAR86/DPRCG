import React from "react";
import { Link } from "react-router-dom";
import news1 from "../../assets/image/News1.jpg";
import news2 from "../../assets/image/News2.jpg";

const CabinetNews = () => {
  return (
    <div className="pt-2 pb-2" style={{ backgroundColor: "rgb(242, 242, 242)" }}>
      <div className="container text-center mb-3">
        <h3 className="headline fw-bold text-dark">मंत्री मंडल समाचार</h3>
      </div>

      <div className="container-fluid">
        <div className="row gx-4 gy-4">
          {/* Left Column */}
           <div className="col-12 col-md-4">
            <Link to="/news/1" className="text-decoration-none text-dark">
              <div className="card h-100 shadow-lg p-2" style={{ cursor: "pointer", height: "24rem" }}>
                <img src={news1} alt="News 2" className="card-img-top" />
                <div className="card-body">
                  <p style={{ fontSize: "15px" }}>
                    लोक निर्माण मंत्री और भास्कराचार्य संस्थान प्रमुख के बीच उच्च स्तरीय बैठक हुई ..
                  </p>
                  <p className="bi bi-clock text-center" style={{ fontSize: "11px", color: "gray" }}>
                    19/05/2025 20:15
                  </p>
                </div>
              </div>
            </Link>
          </div>

          {/* Middle Column */}
          <div className="col-12 col-md-4">
            <Link to="/news/2" className="text-decoration-none text-dark">
              <div className="card h-100 shadow-lg p-2" style={{ cursor: "pointer", height: "24rem" }}>
                <img src={news1} alt="News 2" className="card-img-top" />
                <div className="card-body">
                  <p style={{ fontSize: "15px" }}>
                    लोक निर्माण मंत्री और भास्कराचार्य संस्थान प्रमुख के बीच उच्च स्तरीय बैठक हुई ..
                  </p>
                  <p className="bi bi-clock text-center" style={{ fontSize: "11px", color: "gray" }}>
                    19/05/2025 20:15
                  </p>
                </div>
              </div>
            </Link>
          </div>

          {/* Right Column (Stacked Cards) */}
          <div className="col-12 col-md-4">
            <div className="d-flex flex-column gap-3">
              {/* Card 1 */}
              <Link to="/news/3" className="text-decoration-none text-dark">
                <div className="card shadow-lg p-2">
                  <div className="row g-0 align-items-center">
                    <div className="col-5">
                      <img src={news2} alt="News 3" className="img-fluid rounded"
                        style={{ height: "8rem", objectFit: "cover" }} />
                    </div>
                    <div className="col-7 ps-2">
                      <div className="mb-1 badge bg-danger text-white" style={{ fontSize: "10px" }}>
                        उप मुख्यमंत्री
                      </div>
                      <p style={{ fontSize: "11px", fontWeight: "bold", cursor: "pointer" }}>
                        उप मुख्यमंत्री श्री शुक्ल से हडको सीएमडी श्री कुलश्रेष्ठ ने की सौजन्य भेंट ..
                      </p>
                      <p className="bi bi-clock" style={{ fontSize: "11px", color: "gray" }}>
                        19/05/2025 20:15
                      </p>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Card 2 */}
              <Link to="/news/4" className="text-decoration-none text-dark">
                <div className="card shadow-lg p-2">
                  <div className="row g-0 align-items-center">
                    <div className="col-5">
                      <img src={news2} alt="News 4" className="img-fluid rounded"
                        style={{ height: "8rem", objectFit: "cover" }} />
                    </div>
                    <div className="col-7 ps-2">
                      <div className="mb-1 badge bg-danger text-white" style={{ fontSize: "10px" }}>
                        उप मुख्यमंत्री
                      </div>
                      <p style={{ fontSize: "11px", fontWeight: "bold", cursor: "pointer" }}>
                        उप मुख्यमंत्री श्री शुक्ल से हडको सीएमडी श्री कुलश्रेष्ठ ने की सौजन्य भेंट ..
                      </p>
                      <p className="bi bi-clock" style={{ fontSize: "11px", color: "gray" }}>
                        19/05/2025 20:15
                      </p>
                    </div>
                  </div>
                </div>
              </Link>

              {/* More Button */}
              <Link to="/news/all" className="btn btn-primary mt-2 fw-bold align-self-start">
                More &gt;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CabinetNews;
