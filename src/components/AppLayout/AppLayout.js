import { Outlet } from 'react-router-dom';

import { Container, Item, Link, List, Nav } from "./AppLayout.styled";
import { Suspense } from 'react';

export const AppLayout = () => {
    return (
    <div>
      <Container>
        <Nav>
          <List>
            <Item>
              <Link to="/">Home</Link>
            </Item>
            <Item>
              <Link to="/movies">Movies</Link>
            </Item>
          </List>
        </Nav>
      </Container>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
    );
  };