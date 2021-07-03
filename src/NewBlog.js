import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

export const NewBlog = ({ setBlogs }) => {
    const history = useHistory();
    const [title, setTitle] = useState('');
    const [blogContent, setBlogContent] = useState('');
    console.log('title', title);
    console.log('blogContent', blogContent);
    const handleTitle = (e) => setTitle(e.target.value);
    const handleContent = (e) => setBlogContent(e.target.value);
    const handleSave = () => {
        setBlogs((oldBlogs) => [...oldBlogs, { id: Date.now(), title, content: blogContent }])
        history.push('/blogs')
    }
    return (
        <>
            <Form style={{ margin: '10px' }}>
                <br />
                <Form.Group controlId="formBasicText" >
                    <Form.Control type="text" placeholder="Enter Blog Title" onChange={handleTitle} />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" placeholder="Enter Blog Content" onChange={handleContent} />
                </Form.Group>
                <br />

            </Form>
            <Button variant="primary" type="submit" onClick={handleSave}>
                Save Blog
      </Button>
        </>
    );
}


