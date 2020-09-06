import React, { useMemo } from 'react';
import { GoTrashcan, GoPencil } from 'react-icons/go';

import { Link } from 'react-router-dom';
import { format } from 'date-fns';

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
  start: Date;
  end: Date;
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
  const parsedStartDate = useMemo(() => {
    return format(start, 'MM/dd');
  }, [start]);

  const parsedEndDate = useMemo(() => {
    return format(end, 'MM/dd');
  }, [end]);

  return (
    <Container>
      <CourseHeader>
        <Description>{description}</Description>

        <CourseOptions>
          <Link to={to}>
            <GoPencil size={16} color="#4364a8" />
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
          {parsedStartDate} - {parsedEndDate}
        </Period>
      </CourseFooter>
    </Container>
  );
};

export default Course;
