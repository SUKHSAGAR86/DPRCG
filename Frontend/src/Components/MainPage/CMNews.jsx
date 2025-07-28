import React from 'react';
import newsImg1 from '../../assets/image/News1.jpg'; // adjust path as needed


const newsData = [
  {
    title: 'मुख्यमंत्री डॉ. यादव ने पूर्व केंद्रीय मंत्री श्री अनिल माधव दवे की पुण्यतिथि पर दी श्रद्धांजलि',
    excerpt:
      'मुख्यमंत्री डॉ. यादव ने पूर्व केंद्रीय मंत्री श्री अनिल माधव दवे की पुण्यतिथि पर दी श्रद्धांजलि...',
    time: '19/05/2025 19:35',
    image: newsImg1,
  },
  {
    title: 'मुख्यमंत्री डॉ. यादव ने पूर्व केंद्रीय मंत्री श्री अनिल माधव दवे की पुण्यतिथि पर दी श्रद्धांजलि',
    excerpt:
      'मुख्यमंत्री डॉ. यादव ने पूर्व केंद्रीय मंत्री श्री अनिल माधव दवे की पुण्यतिथि पर दी श्रद्धांजलि...',
    time: '19/05/2025 19:35',
    image: newsImg1,
  },
  {
    title: 'मुख्यमंत्री डॉ. यादव ने पूर्व केंद्रीय मंत्री श्री अनिल माधव दवे की पुण्यतिथि पर दी श्रद्धांजलि',
    excerpt:
      'मुख्यमंत्री डॉ. यादव ने पूर्व केंद्रीय मंत्री श्री अनिल माधव दवे की पुण्यतिथि पर दी श्रद्धांजलि...',
    time: '19/05/2025 19:35',
    image: newsImg1,
  },
  {
    title: 'मुख्यमंत्री डॉ. यादव ने पूर्व केंद्रीय मंत्री श्री अनिल माधव दवे की पुण्यतिथि पर दी श्रद्धांजलि',
    excerpt:
      'मुख्यमंत्री डॉ. यादव ने पूर्व केंद्रीय मंत्री श्री अनिल माधव दवे की पुण्यतिथि पर दी श्रद्धांजलि...',
    time: '19/05/2025 19:35',
    image: newsImg1,
  },
];

const CMNews = () => {
  return (
    <div className="pt-3 " style={{ backgroundColor: 'rgb(244, 248, 248)' }}>
      <div className="text-center mb-3">
        <h3 className="fw-bold">मुख्यमंत्री समाचार</h3>
      </div>

      <div className="container-fluid">
        <div className="row g-4">
          {newsData.map((news, index) => (
            <div className="col-md-6" key={index}>
              <div className="card shadow-lg rounded-2 h-100">
                <div className="d-flex flex-column flex-md-row bg-white overflow-hidden rounded-2 h-100">
                  <img
                    src={news.image}
                    alt="मुख्यमंत्री समाचार"
                    className="img-fluid"
                    style={{
                      width: '100%',
                      maxWidth: '12rem',
                      objectFit: 'cover',
                      borderRadius: '5%',
                    }}
                  />
                  <div className="p-3 d-flex flex-column justify-content-between">
                    <div>
                      <h6 className="fw-bold mb-2" style={{ fontSize: '13px', cursor: 'pointer' }}>
                        {news.title}
                      </h6>
                      <p className="mb-2" style={{ fontSize: '11px' }}>
                        {news.excerpt}
                      </p>
                    </div>
                    <p className="text-muted mb-0" style={{ fontSize: '11px' }}>
                      <i className="bi bi-clock me-1"></i>
                      {news.time}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-start mb-3 mt-4">
          <a href="#" className="text-danger fw-bold text-decoration-none">
            और देखें +
          </a>
        </div>
      </div>
    </div>
  );
};

export default CMNews;
