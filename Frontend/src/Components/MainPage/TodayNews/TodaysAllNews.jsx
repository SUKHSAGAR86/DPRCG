
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Spinner, Alert, Card, Row, Col, Container } from 'react-bootstrap';

import Navbar from "../Navbar/NavBar";
import TobBar from "../Topbar/Topbar";
import Logosection from "../LogoSection/Logosection";

import defaultImg from '../../../assets/image/default_news.jpg';

const TodayAllNews = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTodayPosts = async () => {
    try {
      const response = await axios.get('http://localhost:3081/api/todaynews/get-todaynews');
      setPosts(response.data);
    } catch {
      setError('Failed to fetch posts.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTodayPosts();
  }, []);

  return (
  <div>
     <TobBar />
      <Logosection />
      <Navbar />
      <Container className="py-4">
      <h2 className="text-center mb-4 fw-bold bg-primary-subtle p-2 rounded bi-calendar4-range">&nbsp;आज की समाचार</h2>

      {loading && (
        <div className="text-center my-4">
          <Spinner animation="border" variant="primary" />
          <p>Loading posts...</p>
        </div>
      )}

      {error && <Alert variant="danger">{error}</Alert>}

      <Row>
        {posts.map((post, idx) => (
          <Col md={6} lg={4} key={idx} className="mb-4">
            <Card className="shadow-sm h-100">
              <Card.Img
                variant="top"
                src={
                  post.imageUrl
                    ? `http://localhost:3081/api/posts/images/${post.imageUrl}`
                    : defaultImg
                }
                alt={post.title_hindi || 'News image'}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <Card.Body>
                <Card.Title className="text-primary" style={{ fontSize: '1.1rem' }}>
                  {post.title_hindi || 'No Title'}
                </Card.Title>
              </Card.Body>
              <Card.Footer className="text-muted text-end" style={{ fontSize: '0.8rem' }}>
                Published on: {new Date(post.publish_date).toLocaleDateString()} <br />
                {post.publishedtime}
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>

      {!loading && posts.length === 0 && (
        <div className="text-center text-muted mt-5">No posts found for today.</div>
      )}
    </Container>
  </div>
  );
};

export default TodayAllNews;
