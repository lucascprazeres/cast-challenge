import React, { useState, useCallback, FormEvent } from 'react';

import { GiBoomerang } from 'react-icons/gi';

import { GoChevronRight } from 'react-icons/go';
import {
  Container,
  Header,
  Title,
  TitleContainer,
  Form,
  InputBlock,
  SearchBar,
  SubmitButton,
  SubTitle,
  CourseList,
  Content,
  LinkContainer,
  LinkText,
  MainTextContainer,
} from './styles';

import Course from '../../components/Course';
import api from '../../services/api';

interface Course {
  id: string;
  description: string;
  from: Date;
  to: Date;
  students_per_class: number | null;
}

const Dashboard: React.FC = () => {
  const [search, setSearch] = useState('');
  const [courses, setCourses] = useState<Course[]>([]);

  const handleSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();

      setSearch('');

      const response = await api.get(`/courses`, {
        params: {
          search,
        },
      });

      setCourses(response.data);
    },
    [search, setSearch, setCourses],
  );

  return (
    <Container>
      <Header>
        <MainTextContainer>
          <TitleContainer>
            <GiBoomerang size={48} color="#4364a8" />
            <Title>Cursos Cast</Title>
          </TitleContainer>
          <SubTitle>Veja as nossas turmas de formação.</SubTitle>
        </MainTextContainer>

        <LinkContainer>
          <LinkText to="/create-course">cadastrar novo curso</LinkText>
          <GoChevronRight size={16} color="#4364a8" />
        </LinkContainer>
      </Header>

      <Content>
        <Form onSubmit={handleSubmit}>
          <InputBlock>
            <SearchBar
              placeholder="Digite o curso que você deseja acessar"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            <SubmitButton>Pesquisar</SubmitButton>
          </InputBlock>
        </Form>

        <CourseList>
          {courses.map(course => (
            <Course
              key={course.id}
              description={course.description}
              students={course.students_per_class}
              start="12/09"
              end="14/09"
              to={`update-course/${course.id}`}
            />
          ))}
        </CourseList>
      </Content>
    </Container>
  );
};

export default Dashboard;
