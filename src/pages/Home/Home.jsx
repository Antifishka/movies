import { useState, useEffect } from "react";
import API from '../../services/api';
import { Loader } from "components/Loader/Loader";
import { BASE_IMAGE_URL, PlACEHOLDER_IMAGE_URL } from 'constants/constants';
import { HomeTitle, MoviesList } from "./Home.styled";
import { MoviesItem } from "components/MoviesItem/MoviesItem";
// import { Pagination } from "components/Pagination/Pagination";

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getTrendinngMovies();

    async function getTrendinngMovies() {
      try {
        const fetchMovies = await API.fetchTrendingMovies();
        console.log(fetchMovies);
        setTrendingMovies(fetchMovies);

      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      };
    };
  }, []);

  return (
    <main>
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

      {/* <Pagination/> */}
    </main>
  );
};

export default Home;