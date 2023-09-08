import { Item, ItemLink, List } from "./FilmList.styled";

export const FilmList = ({ films }) => {
    return (
      <List>
        {films.map(({ id, title }) => (
          <Item key={id}>
            <ItemLink to={`/movies/${id}`}>{title}</ItemLink>
          </Item>
        ))}
      </List>
    );
  };