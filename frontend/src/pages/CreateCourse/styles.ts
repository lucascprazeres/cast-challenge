import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { shade } from 'polished';

export const Container = styled.div``;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;

  margin-bottom: 64px;
`;

export const BackButtonContainer = styled.div`
  display: flex;
  align-items: center;
  transition: transform 0.4s;

  &:hover {
    transform: translateX(-10px);
  }
`;

export const BackButton = styled(Link)`
  text-decoration: none;
  color: #4364a8;
`;

export const Title = styled.h1`
  font-size: 32px;
  color: #4364a8;
  margin-right: 64px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 32px;
  border-radius: 16px;
  background-color: #e6e6ed;

  width: 640px;
`;

export const InputBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin-bottom: 16px;
`;

export const Label = styled.label`
  font-size: 16px;
  align-self: flex-start;
  margin-bottom: 8px;
  color: #4364a8;
`;

export const Input = styled.input`
  width: 100%;
  height: 48px;
  border: 0;
  border-radius: 16px;
  padding: 16px;
`;

export const DateInputGroup = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
  margin-top: 16px;
`;

export const DateInputBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 48%;
  margin-bottom: 16px;
`;

export const DateInput = styled.input`
  width: 100%;
  height: 48px;
  border: 0;
  border-radius: 16px;
  margin-bottom: 8px;
  padding: 16px;
`;

export const NumberInputBlock = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  width: 80%;
  margin-bottom: 16px;
`;

export const NumberInput = styled.input`
  width: 30%;
  height: 48px;
  border: 0;
  border-radius: 16px;
  padding: 16px;
`;

export const Button = styled.button`
  margin-top: 32px;
  margin-right: 64px;
  align-self: flex-end;
  width: 160px;
  height: 48px;
  border: 0;
  border-radius: 8px;
  color: #f4ede8;
  font-size: 16px;
  font-weight: bold;
  background-color: #4364a8;
  transition: background-color 0.4s;

  &:hover {
    background-color: ${() => shade(0.2, '#4364a8')};
  }
`;
