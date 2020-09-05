import React from 'react';
import { GoTrashcan, GoPencil } from 'react-icons/go';

import { Link } from 'react-router-dom';
import {
  Container,
  Description,
  CourseHeader,
  CourseFooter,
  StudentNumber,
  Period,
  CourseOptions,
} from './styles';

interface CourseProps {
  description: string;
  students: number | null;
  start: string;
  end: string;
  to: string;
  deleteCourse: () => void;
}

const Course: React.FC<CourseProps> = ({
  description,
  students,
  start,
  end,
  to,
  deleteCourse,
}) => {
  return (
    <Container>
      <CourseHeader>
        <Description>{description}</Description>

        <CourseOptions>
          <Link to={to}>
            <GoPencil size={16} color="#4364a8" onClick={deleteCourse} />
          </Link>
          <GoTrashcan size={16} color="#e0040b" onClick={deleteCourse} />
        </CourseOptions>
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
    </Container>
  );
};

export default Course;
