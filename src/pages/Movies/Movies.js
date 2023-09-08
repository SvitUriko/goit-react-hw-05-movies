import { fetchSearchMovie } from "api";
import { FilmList } from "components/FilmList/FilmList";
import { Searchbar } from "components/Searchbar/Searchbar";
import { useEffect, useState } from "react";


const Movies = () => {
    const [query, setQuery] = useState('');
    const [films, setFilms] = useState([]);

    const changeQuery = (newQuery) => {
        if (!newQuery.trim()) {
          console.error("The field cannot be empty. Enter your search query.");
          return;
        }
        setQuery(`${Date.now()}/${newQuery}`);
      };

    useEffect(() => {
     async  function getMovies() {
        try {
        const dividerPosition = query.indexOf('/');
        const actualQuery = query.slice(dividerPosition + 1);
        const data = await fetchSearchMovie(actualQuery);
        setFilms(data);
        
        if (!query) {
            return;
        }
        } catch (error) {
        console.error(error);
        }
    }
        getMovies();
    
    }, [query]);

    return(
        <div>
            <Searchbar onSubmit={changeQuery} />
            <FilmList films={films}/>
        </div>
    )

}

export default Movies;