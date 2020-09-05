import React from 'react';
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

const CreateCourse: React.FC = () => {
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
        <Form>
          <InputBlock>
            <Label htmlFor="description">nome do curso</Label>
            <Input name="description" />
          </InputBlock>

          <InputBlock>
            <Label htmlFor="category">categoria</Label>
            <Input name="category" />
          </InputBlock>

          <DateInputGroup>
            <DateInputBlock>
              <Label htmlFor="from">inicio</Label>
              <DateInput name="from" type="date" />
            </DateInputBlock>

            <DateInputBlock>
              <Label htmlFor="to">fim</Label>
              <DateInput name="to" type="date" />
            </DateInputBlock>
          </DateInputGroup>

          <NumberInputBlock>
            <Label htmlFor="students_per_class">
              Vagas por turma (opcional)
            </Label>
            <NumberInput type="number" name="students_per_class" />
          </NumberInputBlock>

          <Button>criar curso</Button>
        </Form>
      </Content>
    </Container>
  );
};

export default CreateCourse;
