
// src/App.js
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from "axios"
import "./App.css"
import Modal from './Modal';
const App = () => {
  const dispatch = useDispatch();
  const [movies, setmovies] = useState([]);
  const [selectedMovieshow, setSelectedMovieshow] = useState(false);
  const [title, settitle] = useState("");
  const [searchTerm, setsearchTerm] = useState("matrix")
  const [searhdata, setsearchdata] = useState("")
  const [sortOrder, setSortOrder] = useState('asc');
  const apiMoviesData = async () => {
    try {
      const x = await axios.get(`https://www.omdbapi.com/?apikey=4ddc1f70&s=${searchTerm}`)
      console.log(x.data.Search)
      setmovies(x.data.Search)
    }
    catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    apiMoviesData()
  }, [searchTerm]);

  const onView = (a) => {
    const l = movies.filter((c) => c.imdbID == a)
    settitle(l[0])

  }
  const onDelete = (a) => {
    const l = movies.filter((c) => c.imdbID != a)
    setmovies(l)
  }

  const handleSort = () => {
    const sortedMovies = [...movies].sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.Title.localeCompare(b.Title);
      } else {
        return b.Title.localeCompare(a.Title);
      }
    });

    setmovies(sortedMovies);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "grey" }}>
        <input type="text" value={searhdata} placeholder="Search..." onChange={(e) => setsearchdata(e.target.value)} />
        <button onClick={() => setsearchTerm(searhdata)}>Apply</button>
        <button onClick={() => setsearchdata("")}>Clear</button>
        <button onClick={handleSort}>Sort</button>
      </div>
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
          {movies && movies.map((movie, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{movie.Title}</td>
                <td><img src={movie.Poster} alt="" /></td>
                <td>
                  <button onClick={() => { setSelectedMovieshow(true); onView(movie.imdbID) }}>View</button>
                  <button onClick={() => onDelete(movie.imdbID)}>Delete</button>
                </td>
              </tr>

            )
          })}
        </tbody>
      </table>
      {selectedMovieshow ? <Modal data={title} setSelectedMovieshow={setSelectedMovieshow} /> : ""}
    </div>
  );
};

export default App;
