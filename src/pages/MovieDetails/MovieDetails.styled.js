import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Section = styled.section`
  padding-left: 40px;
  padding-top: 20px;
`;

export const ButtonBack = styled(Link)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
  padding: 2px 4px;
  margin-bottom: 10px;

  background-color: #f5f5f5;
  color: black;

  border: 1px solid black;
  border-radius: 4px;

  text-decoration: none;

  &:active {
    background-color: orange;
    color: white;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px 0;
`;

export const AdWrapper = styled.div`
  padding: 20px 0;
  box-shadow: 2px 0px 0px 2px rgba(125, 125, 125, 1);
`;


export const AdLink = styled(Link)`
  font-size: 18px;
  font-weight: 600;
  color: #1e6ace;

  text-decoration: none;
`;
