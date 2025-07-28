

import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios
import HiNewsItem from './hiNewsItem'; 

function HiGetNews() {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getNews = async () => {
            try {
                // Use axios.get instead of fetch
                const response = await axios.get("http://localhost:3081/api/procedure/get-higetnews");
                // Axios automatically parses JSON, so data is directly in response.data
                setNews(response.data);
            } catch (error) {
                console.error("Error fetching news:", error);
                // Axios errors often have a .response property for HTTP errors
                setError(error.response ? error.response.data : error.message);
            } finally {
                setLoading(false);
            }
        };

        getNews();
    }, []); // Empty dependency array means this runs once on component mount

    if (loading) {
        return <div>Loading news...</div>;
    }

    if (error) {
        // Render error differently if it's an object from the backend
        return <div>Error: {typeof error === 'object' ? JSON.stringify(error) : error}</div>;
    }

    return (
        <div className="news-list">
            <h1>Latest News</h1>
            {news.length > 0 ? ( // Check if news array has data before mapping
                news.map((item) => (
                    <HiNewsItem
                        key={item.id} // Important for React list rendering
                        id={item.id}
                        title_hindi={item.title_hindi}
                        content_hindi={item.content_hindi}
                        news_date={item.news_date}
                        image_link={item.image_link}
                    />
                ))
            ) : (
                <div>No news available.</div>
            )}
        </div>
    );
}

export default HiGetNews;