import React, { useState, useCallback, FormEvent, useEffect } from 'react';
import { GoChevronLeft } from 'react-icons/go';
import { useHistory } from 'react-router-dom';

import { format } from 'date-fns';

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

interface Props {
  match: {
    params: {
      id: string;
    };
  };
}

interface Course {
  id: string;
  description: string;
  from: Date;
  to: Date;
  students_per_class: number | null;
  category: {
    description: string;
  };
}

const UpdateCourse: React.FC<Props> = ({ match }) => {
  const history = useHistory();

  const [description, setDesciption] = useState('');
  const [category, setCategory] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [students, setStudents] = useState(0);

  useEffect(() => {
    const courseId = match.params.id;

    api.get<Course>(`/courses/${courseId}`).then(({ data }) => {
      setDesciption(data.description);
      setCategory(data.category.description);

      const parsedFrom = format(new Date(data.from), 'yyyy-MM-dd');
      const parsedTo = format(new Date(data.to), 'yyyy-MM-dd');

      setFrom(parsedFrom);
      setTo(parsedTo);

      if (data.students_per_class) {
        setStudents(data.students_per_class);
      }
    });
  }, [match.params.id]);

  const handleSubmit = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();

      const updatedCourse = {
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

      const courseId = match.params.id;

      await api.put(`/courses/${courseId}`, updatedCourse);

      // eslint-disable-next-line no-alert
      alert('Curso atualizado com sucesso!');

      history.replace('/');
    },
    [description, category, from, to, students, history, match.params.id],
  );

  return (
    <Container>
      <Header>
        <BackButtonContainer>
          <GoChevronLeft size={16} color="#4364a8" />
          <BackButton to="/">voltar</BackButton>
        </BackButtonContainer>

        <Title>Atualizar dados do curso</Title>
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

export default UpdateCourse;
