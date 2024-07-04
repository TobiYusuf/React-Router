import React, { useState } from 'react';

const Filter = ({ onFilter }) => {
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState('');

  const handleFilterClick = () => {
    onFilter({ title, rating: Number(rating) });
  };

  return (
    <div>
      <input 
        type="text" 
        placeholder="Filter by title" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
      />
      <input 
        type="number" 
        placeholder="Filter by rating" 
        value={rating} 
        onChange={(e) => setRating(e.target.value)} 
      />
      <button onClick={handleFilterClick} style={{ marginTop: '20px' }}>
        Apply Filter
      </button>
    </div>
  );
};

export default Filter;
