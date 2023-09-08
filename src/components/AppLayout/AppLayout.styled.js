import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.header`
  box-shadow: 1px 1px 4px 2px rgba(124, 124, 124, 0.7);
`;

export const Nav = styled.nav`
  padding-left: 40px;
`;

export const List = styled.ul`
  display: flex;
  gap: 20px;
  margin-top: 0;
  font-size: 24px;
`;

export const Item = styled.li`
  padding: 10px 0;
`;

export const Link = styled(NavLink)`
  color: #000000;

  text-decoration: none;

  &.active {
    color: orange;
  }
`;