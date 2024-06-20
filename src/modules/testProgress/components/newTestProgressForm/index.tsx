import React from 'react';
import { Input, Textarea } from '@chakra-ui/react';
import { ButtonAreaColumn, Container, TextAreaColumn } from './styles';

const NewTestProgressForm: React.FC = () => (
  <Container>
    <TextAreaColumn>
      <Input height="54px" placeholder="Basic usage" />
      <Textarea
        height="132px"
        resize="none"
        placeholder="Here is a sample placeholder"
      />
    </TextAreaColumn>
    <ButtonAreaColumn />
  </Container>
);

export default NewTestProgressForm;
