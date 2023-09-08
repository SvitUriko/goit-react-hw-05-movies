import { fetchDetailsMovie } from "api";
import { useEffect, useState } from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { AdLink, AdWrapper, ButtonBack, Section, Wrapper } from "./MovieDetails.styled";


const MovieDetails = () => {
    const location = useLocation();
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
  
    useEffect(() => {
      if (!movieId) return; 
      async function fetchMovie() {
        try {
          const fetchedDetailsMovie = await fetchDetailsMovie(movieId);
          setMovie(fetchedDetailsMovie);
        } catch (error) {
          console.log(error);
        }
      }
      fetchMovie();
    }, [movieId]);
  
    const backLinkHref = location?.state?.from ?? '/';
    
    const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
    
    return (
      <Section>
        <ButtonBack to={backLinkHref}>
          <AiOutlineArrowLeft />
          Go back
        </ButtonBack>
        {movie && (
          <div>  
            <Wrapper>
                <img src={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                    : defaultImg
                    }
                    width={250}
                    alt="poster"
                />
                <div>
                    <h1>{movie.title}</h1>
                    <p>User Score:{Math.round(movie.vote_average * 10)}%</p>
                    <h2>Overview</h2>
                    <p>{movie.overview}</p>
                    <h3>Genres</h3>
                    <p>{movie.genres.map(({ name }) => name).join(' ')}</p>
                </div>
            </Wrapper>    
            <AdWrapper>
                <p>Additional information</p>
                <ul>
                    <li>
                    <AdLink to="cast">Cast</AdLink>
                    </li>
                    <li>
                    <AdLink to="reviews">Reviews</AdLink>
                    </li>
                </ul>   
            </AdWrapper>
            <Outlet />
         </div>   
        )}
      </Section>
    );
  };
  
  export default MovieDetails;