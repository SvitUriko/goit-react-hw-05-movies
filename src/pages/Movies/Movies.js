import { fetchSearchMovie } from 'api';
import { FilmList } from 'components/FilmList/FilmList';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [films, setFilms] = useState([]);
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) return;

    async function getMovies() {
      try {
        const films = await fetchSearchMovie(query);
        setFilms(films);
      } catch (error) {
        console.error(error);
      }
    }
    getMovies();
  }, [query]);

  return (
    <div>
      <Searchbar />
      <FilmList films={films} />
    </div>
  );
};

export default Movies;
