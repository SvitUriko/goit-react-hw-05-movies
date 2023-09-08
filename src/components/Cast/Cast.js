import { fetchCastMovie } from "api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { List, Wrap } from "./Cast.styled";

const Cast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState(null);

    useEffect(() => {
        if (!movieId) return; 
        async function fetchCast() {
          try {
            const fetchedCastMovie = await fetchCastMovie(movieId);
            setCast(fetchedCastMovie);
          } catch (error) {
            console.log(error);
          }
        }
        fetchCast();
      }, [movieId]);

      const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

      return(
        <Wrap>
            {cast && (
            <ul>
                {cast.map(({ id, profile_path, name, character }) => (
                <li key={id}>
                    <img src={profile_path ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                            : defaultImg
                            }
                            width={150}
                            alt="actor"
                        />
                    <p>{name}</p>
                    <p>{character}</p>
                </li> ))}
            </ul>
            )}
        </Wrap>
       
      )
}

export default Cast;