import { useLocation } from 'react-router-dom';
import { Item, ItemLink, List } from './FilmList.styled';

export const FilmList = ({ films }) => {
  const location = useLocation();
  return (
    <List>
      {films.map(({ id, title }) => (
        <Item key={id}>
          <ItemLink to={`/movies/${id}`} state={{ from: location }}>
            {title}
          </ItemLink>
        </Item>
      ))}
    </List>
  );
};
