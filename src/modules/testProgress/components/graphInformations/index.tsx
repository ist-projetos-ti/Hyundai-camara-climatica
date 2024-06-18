import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import themeDefaults from '@style/themeDefaults';
import {
  Container,
  ElapsedTimeContent,
  InformationContent,
  NavigationButton,
} from './styles';
import TimeInformations from '../timeInformations';
import ContentTimeStyled from '../contentTimeStyled';

const GraphInformations: React.FC = () => (
  <Container>
    <InformationContent>
      <TimeInformations date={new Date()} label="Start:" time={new Date()} />
      <TimeInformations
        date={new Date()}
        label="Scheduled End:"
        time={new Date()}
      />
      <ElapsedTimeContent>
        <h3>Test Elapsed Time:</h3>
        <ContentTimeStyled label="Hour" time1={0} time2={0} />
        <b>:</b>
        <ContentTimeStyled label="Minute" time1={0} time2={0} />
        <b>:</b>
        <ContentTimeStyled label="Second" time1={0} time2={0} />
      </ElapsedTimeContent>
    </InformationContent>
    <NavigationButton>
      <p>Thermocouple Data</p>
      <FaArrowRightLong color={themeDefaults.colors.primary} />
    </NavigationButton>
  </Container>
);

export default GraphInformations;
