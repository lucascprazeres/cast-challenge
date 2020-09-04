import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.header`
  margin-bottom: 64px;

  display: flex;
  justify-content: space-between;
`;

export const MainTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.h1`
  margin-left: 8px;
  font-size: 40px;
  color: #3264a8;
`;

export const SubTitle = styled.h2`
  font-size: 20px;
  margin-top: 16px;
  margin-left: 16px;
  color: #e0040b;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 64px;
`;

export const InputBlock = styled.div`
  width: 548px;
`;

export const SearchBar = styled.input`
  width: 80%;
  height: 56px;
  border-radius: 8px 0 0 8px;
  border: 0;
  padding: 16px;
  font-size: 16px;

  &::placeholder {
    color: #c0c0c4;
    font-size: 16px;
  }
`;

export const SubmitButton = styled.button`
  width: 20%;
  height: 56px;
  border-radius: 0 8px 8px 0;
  border: 0;
  color: #f4ede8;
  font-size: 16px;
  font-weight: bold;
  background: #4364a8;
  transition: background-color 0.4s;

  &:hover {
    background: ${() => shade(0.2, '#4364a8')};
  }
`;

export const CourseList = styled.ul`
  list-style: none;
  width: 504px;

  li {
    margin-bottom: 8px;
    transition: transform 0.4s;
  }

  li:hover {
    transform: translateX(10px);
  }
`;

export const LinkContainer = styled.nav`
  margin-top: 16px;
  display: flex;
  align-items: center;
  transition: transform 0.4s;
  height: 20px;
  cursor: pointer;

  svg {
    margin-left: 4px;
  }

  &:hover {
    transform: translateX(10px);
  }
`;

export const Link = styled.a`
  text-decoration: none;

  font-size: 16px;
  color: #4364a8;
`;
