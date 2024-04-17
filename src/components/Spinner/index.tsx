import React from 'react';

import { Arc, Container } from './styles';

interface ISpinnerProps {
  size?: 'sm' | 'md' | 'lg';
}

const Spinner: React.FC<ISpinnerProps> = ({ size = 'md' }) => (
  <Container size={size}>
    <Arc />
  </Container>
);

export default Spinner;
