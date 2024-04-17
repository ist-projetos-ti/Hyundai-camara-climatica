import React, { useEffect } from 'react';
import { Heading } from '@chakra-ui/react';

import { Container, Content } from './styles';

const Dashboard: React.FC = () => {
  useEffect(() => {
    document.title = 'Dashboard';
  }, []);

  return (
    <Container>
      <Content>
        <Heading>Dashboard</Heading>
      </Content>
    </Container>
  );
};

export default Dashboard;
