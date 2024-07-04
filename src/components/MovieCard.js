import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <Card style={{ width: '18rem', marginTop: '20px' }}>
      <Card.Img variant="top" src={movie.posterURL} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>
          {movie.description}
        </Card.Text>
        <Card.Text>
          Rating: {movie.rating}
        </Card.Text>
        <Link to={`/movie/${movie.id}`}>View Details</Link>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
