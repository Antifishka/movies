import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import API from 'services/api';
import { usePaginationContext } from 'context/pagination';
import { toast } from 'react-toastify';
import { MoviesList } from "../Home/Home.styled";
import { SearchForm } from "components/SearchForm/SearchForm";
import { Loader } from "components/Loader/Loader";
import { MoviesItem } from "components/MoviesItem/MoviesItem";
import { PaginationMUI } from 'components/Pagination/Pagination';
import { BASE_IMAGE_URL, PlACEHOLDER_IMAGE_URL } from 'constants/constants';
import { Box } from "components/Box/Box";

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('search') ?? '');
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { page, setPage, setTotalPages } = usePaginationContext();

  useEffect(() => {
    if (!query) {
      //Первый рендер, query это пустая строка, не делаем fetch 
      return;
    }
    setIsLoading(true);
    getSearchMovies();

    async function getSearchMovies() {
      try {
        const data = await API.fetchSearchMovies(query, page);
        console.log(data, "data");
 
        const {results, total_pages} = data;
        setMovies(results);
        setTotalPages(total_pages);

      } catch (error) {
        console.log(error);
        toast.error(`Sorry, there are no movies matching your search query. Please try again.`);
      } finally {
        setIsLoading(false);
      };
    };
  }, [query, page, setTotalPages]);

  const handleFormSubmit = (query) => {
    console.log(query);

    setQuery(query);
    setMovies([]);
    setPage(1);
  };

  const updateQueryString = (value) => {
    setSearchParams(value !== '' ? { search: value } : {});
  };
  
  return (
    <Box pb="52px" as="main">
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

      <PaginationMUI />
    </Box>
  );
};

export default Movies;