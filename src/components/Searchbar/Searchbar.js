import { useSearchParams } from 'react-router-dom';
import { Search, Form, Input, Button } from './Searchbar.styled';

export const Searchbar = () => {
  const [, setSearchParams] = useSearchParams();

  const handleSubmit = evt => {
    evt.preventDefault();
    const query = evt.target.elements.query.value;

    if (!query.trim()) {
      console.error('The field cannot be empty. Enter your search query.');
      return;
    }
    setSearchParams({ query });

    evt.target.reset();
  };

  return (
    <Search>
      <Form onSubmit={handleSubmit}>
        <Input type="text" name="query" placeholder="Search movies" required />
        <Button type="submit"></Button>
      </Form>
    </Search>
  );
};
