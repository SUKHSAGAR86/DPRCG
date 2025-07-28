import React from 'react';

function HiNewsItem({ 
    id, 
    title_hindi, 
    content_hindi, 
    news_date, 
    image_link 
}) {
    // You can format the date here if needed
    const formattedDate = new Date(news_date).toLocaleDateString('en-IN'); // Example: Indian date format

    return (
        <div className="news-item">
            {image_link && <img src={image_link} alt={title_hindi} style={{ maxWidth: '100px', height: 'auto' }} />}
            <h2>{id}</h2>
            <h2>{title_hindi}</h2>
            <p>{content_hindi}</p>
            <p>Date: {formattedDate}</p>
            {/* You can add a link to a detailed view if you have one */}
            {/* <a href={`/news/${id}`}>Read More</a> */}
        </div>
    );
}

export default HiNewsItem;