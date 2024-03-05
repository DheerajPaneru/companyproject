// src/components/MovieItem.js
import React from 'react';

const MovieItem = ({ movie, onView, onDelete }) => {
  return (
    <tr>
      <td>{movie.Title}</td>
      <td>{movie.Poster}</td>
      <td>
        <button onClick={() => onView(movie)}>View</button>
        <button onClick={() => onDelete(movie)}>Delete</button>
      </td>
    </tr>
  );
};

export default MovieItem;
