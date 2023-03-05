import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import API from "../../services/api";
import { BASE_IMAGE_URL, PlACEHOLDER_IMAGE_URL } from 'constants/constants';
import { CastItem } from "./CastItem/CastItem";
import { CastList } from "./Cast.styled";

const Cast = () => { 
  const { movieId } = useParams(); 
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getMovieCredits();

    async function getMovieCredits() {
      try {
        const fetchCast = await API.fetchMovieCredits(movieId);
        
        const actors = fetchCast.length > 16 ? fetchCast.slice(0, 16) : fetchCast;
        console.log(actors);
        setCast(actors);

      } catch (error) {
        console.log(error);
      };
    };
  }, [movieId]);

  if (!cast) return null;

  return (
    <CastList>
      {cast.map(({ id, profile_path, original_name, character }) => 
        <CastItem
          key={id}
          imagePath={
            profile_path
              ? BASE_IMAGE_URL + profile_path
              : PlACEHOLDER_IMAGE_URL}
          name={original_name}
          character={character}
        />)
      } 
    </CastList>
  );
};
 
export default Cast;