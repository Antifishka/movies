import axios from "axios";

const apiInstance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        api_key: 'e09f06c48afcb3ebfd8a25b0b6965d1e',
        language: 'en-US',
        // page: `${page}`,
    },
});

async function fetchTrendingMovies() {
    const response = await apiInstance.get('trending/movie/day');
     
    const trendingMovies = response.data.results;

    if (!trendingMovies.length) {
        throw new Error(`Sorry, there are no movies.`)
    }

    return trendingMovies;
};

async function fetchMovieById(id) {
    const { data } = await apiInstance.get(`movie/${id}`);

    return data;
}

async function fetchSearchMovies(query) {
    const response = await apiInstance.get(`search/movie?query=${query}`);

    const searchMovies = response.data.results;

    if (!searchMovies.length) {
        throw new Error(`Sorry, there are no movies matching your search query. Please try again.`)
    }

    return searchMovies;
}

async function fetchMovieCredits(id) {
    const response = await apiInstance.get(`movie/${id}/credits`);

    const cast = response.data.cast;

    if (!cast.length) {
        throw new Error(`Not found cast...`)
    }

    return cast;
}

async function fetchMovieReviews(id) {
    const response = await apiInstance.get(`movie/${id}/reviews`);

    const reviews = response.data.results;

    return reviews;
};

const api = {
    fetchTrendingMovies,
    fetchMovieById,
    fetchSearchMovies,
    fetchMovieCredits,
    fetchMovieReviews,
};

export default api;