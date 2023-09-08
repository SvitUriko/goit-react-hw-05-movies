import { fetchReviewsMovie } from "api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const Reviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState(null);

    useEffect(() => {
        if (!movieId) return; 
        async function fetchReviews() {
          try {
            const fetchedReviewsMovie = await fetchReviewsMovie(movieId);
            setReviews(fetchedReviewsMovie);
          } catch (error) {
            console.log(error);
          }
        }
        fetchReviews();
      }, [movieId]);

      const hasReviews = reviews && reviews.length > 0;

      return(
        <div>
            {hasReviews ? (
                <ul>
                {reviews.map(({ id, author, content }) => (
                    <li key={id}>
                    <h4>Author: {author}</h4>
                    <p>{content}</p>
                    </li>
                ))}
                </ul>
            ) : (
                <p>We don't have any reviews for this movie.</p>
            )}
        </div>
      )
}

export default Reviews;