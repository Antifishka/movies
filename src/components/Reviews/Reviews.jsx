import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import API from "../../services/api";
import { ReviewsList, ReviewsItem, ReviewsTitle, Message } from "./Reviews.styled";

const Reviews = () => {
  const { movieId } = useParams(); 
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getMovieReviews();

    async function getMovieReviews() {
        const fetchReviews = await API.fetchMovieReviews(movieId);
        console.log(fetchReviews);
        setReviews(fetchReviews);
    };
  }, [movieId]);

  return (
    <>
      {reviews.length > 0
        ? <ReviewsList>
            {reviews.map(({ id, author, content }) => 
              <ReviewsItem key={id}>
                <ReviewsTitle>Author: {author}</ReviewsTitle>  
                <p>{content}</p>
              </ReviewsItem>)} 
          </ReviewsList >
        : <Message>We don't have any reviews for this movie</Message>}
    </>
  );
};
export default Reviews;