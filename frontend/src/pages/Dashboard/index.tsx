import React from 'react';

import { GiBoomerang } from 'react-icons/gi';

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
} from './styles';

import Course from '../../components/Course';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Header>
        <TitleContainer>
          <GiBoomerang size={48} color="#4364a8" />
          <Title>Cursos Cast</Title>
        </TitleContainer>
        <SubTitle>Veja as nossas turmas de formação</SubTitle>
      </Header>

      <Content>
        <Form>
          <InputBlock>
            <SearchBar placeholder="Digite o curso que você deseja acessar" />
            <SubmitButton>Pesquisar</SubmitButton>
          </InputBlock>
        </Form>

        <CourseList>
          <Course
            description="NodeJS"
            students={null}
            start="12/09"
            end="14/09"
          />
          <Course
            description="NodeJS"
            students={13}
            start="12/09"
            end="14/09"
          />
          <Course
            description="NodeJS"
            students={10}
            start="12/09"
            end="14/09"
          />
          <Course
            description="NodeJS"
            students={20}
            start="12/09"
            end="14/09"
          />
        </CourseList>
      </Content>
    </Container>
  );
};

export default Dashboard;
