import React from 'react';

import { GoTrashcan } from 'react-icons/go';

import {
  Container,
  Description,
  CourseHeader,
  CourseFooter,
  StudentNumber,
  Number,
  Period,
} from './styles';

interface CourseProps {
  description: string;
  students: number | null;
  start: string;
  end: string;
}

const Course: React.FC<CourseProps> = ({
  description,
  students,
  start,
  end,
}) => {
  return (
    <Container>
      <CourseHeader>
        <Description>{description}</Description>

        <GoTrashcan size={16} color="#e0040b" />
      </CourseHeader>

      <CourseFooter>
        <StudentNumber>
          Alunos por turma:
          <Number>{students || 'não informado'}</Number>
        </StudentNumber>

        <Period>
          {start} - {end}
        </Period>
      </CourseFooter>
    </Container>
  );
};

export default Course;
