// src/redux/actions.js
export const fetchMovies = (searchTerm) => async (dispatch) => {
    try {
      
      const response = await fetch(`https://www.omdbapi.com/?apikey=4ddc1f70&s=${searchTerm}`);
     let   data = await response.json();

      dispatch({ type: 'FETCH_MOVIES_SUCCESS', payload: data.Search || [] });
      
    } catch (error) {
      dispatch({ type: 'FETCH_MOVIES_FAILURE', payload: error.message });
    }
  };
  