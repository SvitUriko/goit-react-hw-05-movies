import { Search, Form, Input, Button } from "./Searchbar.styled";

export const Searchbar = ({ onSubmit }) =>{
    return  <Search >
                 <Form 
                    onSubmit={evt => {
                        evt.preventDefault();
                        onSubmit(evt.target.elements.query.value);
                        evt.target.reset();
                    }}>
                    
                    <Input
                        type="text"
                        name="query"
                        placeholder="Search movies"
                    />    
                    <Button  type="submit"></Button>
                 </Form>
            </Search>
}