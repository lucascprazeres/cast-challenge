import React, { useState, useCallback, FormEvent, useEffect } from 'react';
import { GoChevronLeft } from 'react-icons/go';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
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
import { State } from '../../store';
import { CourseState } from '../../store/modules/course/types';
import {
  saveCourseDraft,
  createCourseRequest,
} from '../../store/modules/course/actions';

const CreateCourse: React.FC = () => {
  const history = useHistory();

  const [description, setDesciption] = useState('');
  const [category, setCategory] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [students, setStudents] = useState(0);

  const dispatch = useDispatch();

  const currentCourseState = useSelector<State, CourseState>(
    state => state.course,
  );

  // loads then courseDraft
  useEffect(() => {
    setDesciption(currentCourseState.description);
    setCategory(currentCourseState.category);
    setFrom(currentCourseState.from);
    setTo(currentCourseState.to);
    setStudents(currentCourseState.students_per_class);
  }, [currentCourseState]);

  const handleSaveDraft = useCallback(() => {
    const draft = {
      description,
      category,
      from,
      to,
      students_per_class: students,
    };

    dispatch(saveCourseDraft(draft));
  }, [dispatch, description, category, from, to, students]);

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

      dispatch(createCourseRequest(course));

      history.replace('/');
    },
    [description, category, from, to, students, history, dispatch],
  );

  return (
    <Container>
      <Header>
        <BackButtonContainer>
          <GoChevronLeft size={16} color="#4364a8" />
          <BackButton to="/" onClick={handleSaveDraft}>
            voltar
          </BackButton>
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
