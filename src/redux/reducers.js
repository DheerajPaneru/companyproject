// src/redux/reducers.js
const initialState = {
    movies: [],
    error: null,
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_MOVIES_SUCCESS':
        return { ...state, movies: action.payload, error: null };
      case 'FETCH_MOVIES_FAILURE':
        return { ...state, movies: [], error: action.payload };
      // Add more cases for other actions
      default:
        return state;
    }
  };
  
  export default rootReducer;
  