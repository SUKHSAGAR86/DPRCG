import React from 'react';
import newsImage from '../../assets/image/News1.jpg'; // ✅ Make sure this path is correct

const TodayNews = () => {
  // Static News Data (can be replaced with API data later)
  const newsData = [
    {
      text: 'डॉ. जितेंद्र सिंह सीपीजीआरएएमएस की अर्धवार्षिक प्रगति और लोक शिकायतों के प्रभावी निवारण...',
      image: newsImage,
    },
    {
      text: 'प्रशासनिक सुधार और लोक शिकायत विभाग ने जून 2025 महीने के लिए केंद्रीय मंत्रालयों/विभा...',
      image: newsImage,
    },
    {
      text: 'डॉ. जितेंद्र सिंह सीपीजीआरएएमएस की अर्धवार्षिक प्रगति और लोक शिकायतों के प्रभावी निवारण...',
      image: newsImage,
    },
    {
      text: 'डॉ. जितेंद्र सिंह सीपीजीआरएएमएस की अर्धवार्षिक प्रगति और लोक शिकायतों के प्रभावी निवारण...',
      image: newsImage,
    },
    {
      text: 'डॉ. जितेंद्र सिंह सीपीजीआरएएमएस की अर्धवार्षिक प्रगति और लोक शिकायतों के प्रभावी निवारण...',
      image: newsImage,
    },
    {
      text: 'प्रशासनिक सुधार और लोक शिकायत विभाग ने जून 2025 महीने के लिए केंद्रीय मंत्रालयों/विभा...',
      image: newsImage,
    },
    {
      text: 'डॉ. जितेंद्र सिंह सीपीजीआरएएमएस की अर्धवार्षिक प्रगति और लोक शिकायतों के प्रभावी निवारण...',
      image: newsImage,
    },
    {
      text: 'डॉ. जितेंद्र सिंह सीपीजीआरएएमएस की अर्धवार्षिक प्रगति और लोक शिकायतों के प्रभावी निवारण...',
      image: newsImage,
    },
  ];

  // Divide into two columns
  const half = Math.ceil(newsData.length / 2);
  const leftNews = newsData.slice(0, half);
  const rightNews = newsData.slice(half);

  // Render a single card
  const renderNewsCard = (item, index) => (
    <div
      key={index}
      className="card mb-3 shadow-lg rounded-4 border-0 mt-1"
      style={{ maxWidth: '100%' }}
    >
      <div className="row g-0">
        <div className="col-5">
          <img
            src={item.image}
            className="img-fluid rounded-start h-100"
            alt="News"
          />
        </div>
        <div className="col-7">
          <div className="card-body p-3">
            <p className="card-text small mb-0">{item.text}</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="">
      {/* Section Title */}
      <div className="main-highlight section-title rounded-2 mb-2">
        आज का समाचार
      </div>

      <div className="row mt-1">
        {/* Left Column */}
        <div className="col-md-6 col-12">
          {leftNews.map((item, index) => renderNewsCard(item, index))}
        </div>

        {/* Right Column */}
        <div className="col-md-6 col-12">
          {rightNews.map((item, index) => renderNewsCard(item, index + half))}
        </div>
      </div>

      {/* View More */}
      <div className="text-start mb-3 mt-2">
        <a href="#" className="text-danger fw-bold text-decoration-none">
          और देखें +
        </a>
      </div>
    </div>
  );
};

export default TodayNews;
