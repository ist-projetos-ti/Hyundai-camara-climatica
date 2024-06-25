/* eslint-disable import/no-unresolved */
import React, { useCallback } from 'react';

import { useForm, Controller } from 'react-hook-form';
import FilterIcon from '@assets/filter.svg?react';

import themeDefaults from '@style/themeDefaults';
import { useTheme } from 'styled-components';
import { Button } from '@chakra-ui/react';
import {
  FilterData,
  filterResolver,
} from '@modules/testHistory/schemas/filter.zod';
import {
  Container,
  LabelTitle,
  DateTimeInputContainer,
  Input,
  LabelContainer,
  Form,
  Section,
  ButtonContainer,
} from './styles';

import DateInput from '../../Filter/DateInput';
import TimeInput from '../../Filter/TimeInput';
// import CarDetails from '../../Filter/CarDetails';
import CarDetails from './CarDetails';

const Filter: React.FC = () => {
  const { control, handleSubmit } = useForm<FilterData>({
    resolver: filterResolver,

    mode: 'all',
  });

  const onSubmit = useCallback((data: any) => {
    // eslint-disable-next-line no-console

    console.log('data: ', data);
  }, []);

  const theme = useTheme();
  return (
    <Container>
      <LabelContainer>
        <FilterIcon color={themeDefaults.colors.petroleumGreen} />

        <LabelTitle>Filter</LabelTitle>
      </LabelContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <DateTimeInputContainer>
          <Controller
            control={control}
            name="date"
            render={({ field: { onChange } }) => (
              <DateInput onChange={onChange} />
            )}
          />

          <Controller
            control={control}
            name="time"
            render={({ field: { onChange } }) => (
              <TimeInput onChange={onChange} />
            )}
          />

          <Controller
            control={control}
            name="testName"
            render={({ field: { onChange } }) => (
              <Input placeholder="Test Name" type="text" onChange={onChange} />
            )}
          />
        </DateTimeInputContainer>
        <Section>
          <Controller
            control={control}
            name="carDetails"
            render={({ field: { onChange } }) => (
              <CarDetails onChange={onChange} />
            )}
          />
        </Section>
        <ButtonContainer>
          <Button
            width="165px"
            bgColor={theme.colors.petroleumGreen}
            type="submit"
            color="white"
          >
            Filter
          </Button>
        </ButtonContainer>
      </Form>
    </Container>
  );
};

export default Filter;
