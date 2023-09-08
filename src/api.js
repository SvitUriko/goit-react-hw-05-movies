import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const API_KEY = 'c60ffb21c2ff6432a6fd8f9683b89281';

export const fetchTrendingMovies = async () => {
    const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
    console.log(response.data.results)
    return response.data.results;
  };

export const fetchSearchMovie = async query => {
    const response = await axios.get(`search/movie?query=${query}&api_key=${API_KEY}`);
    console.log(response.data.results);
    return response.data.results;
    };

export const fetchDetailsMovie = async id => {
    const response = await axios.get(`movie/${id}?api_key=${API_KEY}`);
    console.log(response.data);
    return response.data;
    };

export const fetchCastMovie = async id => {
    const response = await axios.get(`movie/${id}/credits?api_key=${API_KEY}`);
    console.log(response.data.cast);
    return response.data.cast;
    };

export const fetchReviewsMovie = async id => {
    const response = await axios.get(`movie/${id}/reviews?api_key=${API_KEY}`);
    console.log(response.data.results);
    return response.data.results;
    };