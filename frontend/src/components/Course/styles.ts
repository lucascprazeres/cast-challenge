import styled from 'styled-components';

export const Container = styled.li`
  height: 96px;
  width: 100%;
  background: #fff;

  border-radius: 16px;

  padding: 16px;

  a {
    text-decoration: none;
  }
`;

export const Description = styled.h2`
  font-size: 16px;
  color: #00165d;
`;

export const CourseHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 32px;
`;

export const CourseOptions = styled.div`
  > svg {
    margin-left: 8px;
    cursor: pointer;
  }
`;

export const CourseFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StudentNumber = styled.p`
  color: #c0c0c4;
  font-size: 15px;
  font-weight: bold;

  strong {
    margin-left: 4px;
    color: #4364a8;
  }
`;

export const Period = styled.p`
  color: #c0c0c4;
  font-size: 15px;
`;
