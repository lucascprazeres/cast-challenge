import React, { useState, useCallback, FormEvent } from 'react';
import { GoChevronLeft } from 'react-icons/go';
import {
  Container,
  Header,
  Title,
  BackButtonContainer,
  BackButton,
  Form,
  Input,
  Button,
  Content,
  Label,
  DateInput,
  DateInputGroup,
  InputBlock,
  DateInputBlock,
  NumberInputBlock,
  NumberInput,
} from './styles';
import api from '../../services/api';

const CreateCourse: React.FC = () => {
  const [description, setDesciption] = useState('');
  const [category, setCategory] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [students, setStudents] = useState(0);

  const handleSubmit = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();

      const course = {
        description,
        category,
        from,
        to,
        students_per_class: students,
      };

      setDesciption('');
      setCategory('');
      setFrom('');
      setTo('');
      setStudents(0);

      await api.post('/courses', course);
    },
    [description, category, from, to, students],
  );

  return (
    <Container>
      <Header>
        <BackButtonContainer>
          <GoChevronLeft size={16} color="#4364a8" />
          <BackButton to="/">voltar</BackButton>
        </BackButtonContainer>

        <Title>Cadastre um novo curso</Title>
      </Header>

      <Content>
        <Form onSubmit={handleSubmit}>
          <InputBlock>
            <Label htmlFor="description">nome do curso</Label>
            <Input
              name="description"
              value={description}
              onChange={e => setDesciption(e.target.value)}
            />
          </InputBlock>

          <InputBlock>
            <Label htmlFor="category">categoria</Label>
            <Input
              name="category"
              value={category}
              onChange={e => setCategory(e.target.value)}
            />
          </InputBlock>

          <DateInputGroup>
            <DateInputBlock>
              <Label htmlFor="from">inicio</Label>
              <DateInput
                type="date"
                name="from"
                value={from}
                onChange={e => setFrom(e.target.value)}
              />
            </DateInputBlock>

            <DateInputBlock>
              <Label htmlFor="to">fim</Label>
              <DateInput
                type="date"
                name="to"
                value={to}
                onChange={e => setTo(e.target.value)}
              />
            </DateInputBlock>
          </DateInputGroup>

          <NumberInputBlock>
            <Label htmlFor="students">Vagas por turma (opcional)</Label>
            <NumberInput
              type="number"
              name="students"
              value={students}
              onChange={e => setStudents(Number(e.target.value))}
            />
          </NumberInputBlock>

          <Button>criar curso</Button>
        </Form>
      </Content>
    </Container>
  );
};

export default CreateCourse;
