// src/components/MoviesList.js
import React from 'react';
import MovieItem from './MovieItem';

const MoviesList = ({ movies, onView, onDelete }) => {
  return (
    <>
    <table>
      <thead>
        <tr>
          <th>Sr.No</th>
          <th>Movie Title</th>
          <th>Movie Poster</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {movies&&movies.map((movie, index) => (
          <MovieItem key={index} movie={movie} onView={onView} onDelete={onDelete} />
        ))}
      </tbody>
    </table>
    </>
  );
};

export default MoviesList;
