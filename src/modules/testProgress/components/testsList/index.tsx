/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Divider } from '@chakra-ui/react';
import themeDefaults from '@style/themeDefaults';
import { testData } from '@utils/faker-graph-data';
import {
  Columns,
  Container,
  DividerArea,
  FirstColumn,
  IRLampsColumn,
  ListArea,
  SecondColumn,
  ThermocouplesColumn,
  TitleArea,
} from './styles';
import TestsListComponent from '../testsListComponent';

const TestsList: React.FC = () => (
  <Container>
    <TitleArea>
      <h2>IR Lamps</h2>
      <h2>thermocouples</h2>
    </TitleArea>
    <ListArea>
      <IRLampsColumn>
        <TestsListComponent label="IR Lamp 01" temperature={20} />
        <TestsListComponent label="IR Lamp 01" />
      </IRLampsColumn>
      <DividerArea>
        <Divider
          orientation="vertical"
          borderColor={themeDefaults.colors.primary}
          borderWidth={1.3}
          variant="dashed"
        />
      </DividerArea>
      <ThermocouplesColumn>
        <Columns>
          <FirstColumn>
            {testData
              .filter((num) => num.id % 2 === 0)
              .map((value, index) => (
                <TestsListComponent
                  key={index}
                  label={value.label}
                  temperature={value.temperature}
                />
              ))}
          </FirstColumn>
          <DividerArea>
            <Divider
              orientation="vertical"
              borderColor={themeDefaults.colors.primary}
              borderWidth={1.3}
              variant="dashed"
            />
          </DividerArea>
          <SecondColumn>
            {testData
              .filter((num) => num.id % 2 !== 0)
              .map((value, index) => (
                <TestsListComponent
                  key={index}
                  label={value.label}
                  temperature={value.temperature}
                />
              ))}
          </SecondColumn>
        </Columns>
      </ThermocouplesColumn>
    </ListArea>
  </Container>
);

export default TestsList;
