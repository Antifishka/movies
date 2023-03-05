import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import API from '../../services/api';
import { toast } from 'react-toastify';
import { MoviesList } from "./Movies.styled";
import { SearchForm } from "components/SearchForm/SearchForm";
import { Loader } from "components/Loader/Loader";
import { MoviesItem } from "components/MoviesItem/MoviesItem";
import { BASE_IMAGE_URL, PlACEHOLDER_IMAGE_URL } from 'constants/constants';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('search') ?? '');
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!query) {
      //Первый рендер, query это пустая строка, не делаем fetch 
      return;
    }
    setIsLoading(true);
    getSearchMovies();

    async function getSearchMovies() {
      try {
        const fetchMovies = await API.fetchSearchMovies(query);
        console.log(fetchMovies);
        setMovies(fetchMovies);

      } catch (error) {
        console.log(error);
        toast.error(`Sorry, there are no movies matching your search query. Please try again.`);
      } finally {
        setIsLoading(false);
      };
    };
  }, [query]);

  const handleFormSubmit = (query) => {
    console.log(query);

    setQuery(query);
    setMovies([]);
  };

  const updateQueryString = (value) => {
    setSearchParams(value !== '' ? { search: value } : {});
  };
  
  return (
    <main>
      <SearchForm onSubmit={handleFormSubmit} onChange={updateQueryString} />

      {isLoading && <Loader />} 

      <MoviesList>
        {movies.map(({ id, title, poster_path, vote_average }) => (
          <MoviesItem 
            key={id}
            id={id}
            title={title} 
            imagePath={poster_path
              ? BASE_IMAGE_URL + poster_path
              : PlACEHOLDER_IMAGE_URL} 
            vote={vote_average
              ? vote_average.toFixed(1)
              : `No vote`
          } />
        ))}
      </MoviesList>
    </main>
  );
};

export default Movies;