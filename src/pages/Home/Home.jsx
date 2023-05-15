import { useState, useEffect } from "react";
import API from 'services/api';
import { Loader } from "components/Loader/Loader";
import { BASE_IMAGE_URL, PlACEHOLDER_IMAGE_URL } from 'constants/constants';
import { HomeTitle, MoviesList } from "./Home.styled";
import { MoviesItem } from "components/MoviesItem/MoviesItem";
import { PaginationMUI } from 'components/Pagination/Pagination';
import { Box } from "components/Box/Box";

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getTrendinngMovies();

    async function getTrendinngMovies() {
      try {
        const data = await API.fetchTrendingMovies(page);
        console.log(data, "data");

        const {results, total_pages} = data;
        setTrendingMovies(results);
        setPages(total_pages);

      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      };
    };
  }, [page]);

  const handleChangePage = (e, value) => {
        setPage(value);
    };

  return (
    <Box pb="52px" as="main">
      <HomeTitle>Trending today</HomeTitle>

      {isLoading && <Loader />} 

      <MoviesList>
        {trendingMovies.map(({ id, title, poster_path, vote_average }) => (
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

      <PaginationMUI
        page={page}
        pages={pages}
        onClick={handleChangePage} />
    </Box>
  );
};

export default Home;