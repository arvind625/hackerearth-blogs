import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';

export const Blogs = ({ blogs }) => {
  const history = useHistory();
  const location = useLocation();
  console.log('history', history);
  console.log('location', location);
  const handleBlog = (blog) => {
    blog.link ? window.open(blog.link, '_blank') : history.push(`blogs/${blog.title}`, {
      title: blog.title,
      content: blog.content
    });
  }
  return (
    <>

      <div style={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
      }}>
        {
          blogs.map((blog) => (
            <Card key={blog.id} style={{ width: '22rem', height: '22rem', margin: '10px 3px 10px 3px' }}>
              <Card.Img variant="top" src={blog.img} style={{ height: '14rem' }} />
              <Card.Body>
                <Card.Title>{blog.title}</Card.Title>
                <Button variant="primary" onClick={() => handleBlog(blog)}>Go to Blog</Button>
              </Card.Body>
            </Card>))
        }
      </div>

    </>
  )
}