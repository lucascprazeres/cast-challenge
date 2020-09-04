import React, { HTMLAttributes } from 'react';
import { GoTrashcan } from 'react-icons/go';

import { Link } from 'react-router-dom';
import {
  Container,
  Description,
  CourseHeader,
  CourseFooter,
  StudentNumber,
  Period,
} from './styles';

interface CourseProps {
  description: string;
  students: number | null;
  start: string;
  end: string;
  to: string;
}

const Course: React.FC<CourseProps> = ({
  description,
  students,
  start,
  end,
  to,
}) => {
  return (
    <Container>
      <Link to={to}>
        <CourseHeader>
          <Description>{description}</Description>

          <GoTrashcan size={16} color="#e0040b" />
        </CourseHeader>

        <CourseFooter>
          <StudentNumber>
            Alunos por turma:
            <strong>{students || 'não informado'}</strong>
          </StudentNumber>

          <Period>
            {start} - {end}
          </Period>
        </CourseFooter>
      </Link>
    </Container>
  );
};

export default Course;
