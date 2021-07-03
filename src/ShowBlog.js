import React from 'react';
import { Card } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
export const ShowBlog = () => {
    const location = useLocation();
    return (
        <>

            <Card>
                <Card.Body>
                    <Card.Title>{location.state.title}</Card.Title>
                    <Card.Text>{location.state.content} </Card.Text>
                </Card.Body>
            </Card>
        </>
    );

}