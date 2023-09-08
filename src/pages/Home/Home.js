import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "api";
import { Title, Wrap } from "./Home.styled";
import { FilmList } from "components/FilmList/FilmList";


const Home = () => {
    const [films, setFilms] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function getFilms() {
          try {
            setLoading(true);
            const films = await fetchTrendingMovies();
            setFilms(films);
          } catch (error) {
            console.log(error);
          } finally {
            setLoading(false);
          }
        }
        getFilms();
      }, []);

    return (  
      <Wrap>
          <Title>Trending day</Title>
          {loading ? (
          <div>LOADING...</div>
          ) : (
          <FilmList films={films} />
          )}
      </Wrap>
      )
  };
  
  export default Home;
