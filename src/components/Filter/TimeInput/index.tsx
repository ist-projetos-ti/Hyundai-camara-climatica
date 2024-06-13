/* eslint-disable import/no-unresolved */
import React, { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormControl } from '@chakra-ui/react';
// import Input from '@components/Form/Input';
import { PiClockCountdown } from 'react-icons/pi';

import {
  Container,
  DateSelector,
  SubmitButton,
  DateInputBox,
  DateDivider,
  InputGroup,
  Form,
  InputLabel,
  DateLabel,
  Button,
  InputBundle,
} from './styles';
import { TimeFilterData, timeFilterResolver } from './timeFilter.zod';
import Input from './Input';

const TimeInput: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState(true);
  const [initialDate, setInitialDate] = useState<string | null>(null);
  const [finalDate, setFinalDate] = useState<string | null>(null);

  const [showInitialDateBox, setShowInitialDateBox] = useState(false);
  const [showFinalDateBox, setShowFinalDateBox] = useState(false);

  const {
    handleSubmit: handleInitialDateSubmit,
    register: initialDateRegister,
    clearErrors: initialTimeClearErrors,
    formState: { errors: initialDateErrors },
  } = useForm<TimeFilterData>({
    resolver: timeFilterResolver,
    mode: 'all',
  });

  const {
    handleSubmit: handleFinalDateSubmit,
    register: finalDateRegister,
    clearErrors: finalTimeClearErrors,
    formState: { errors: finalDateErrors },
  } = useForm<TimeFilterData>({
    resolver: timeFilterResolver,
    mode: 'all',
  });

  const onInitialDateSubmit = useCallback(
    async (data: TimeFilterData) => {
      setInitialDate(
        `${data.hour_h1}${data.hour_h2}:${data.minute_m1}${data.minute_m2}:${data.second_s1}${data.second_s2}`
      );
      if (JSON.stringify(initialDateErrors) === '{}')
        setShowInitialDateBox(false);
    },
    [initialDateErrors]
  );

  const onFinalDateSubmit = useCallback(
    async (data: TimeFilterData) => {
      setFinalDate(
        `${data.hour_h1}${data.hour_h2}:${data.minute_m1}${data.minute_m2}:${data.second_s1}${data.second_s2}`
      );

      if (JSON.stringify(finalDateErrors) === '{}') setShowFinalDateBox(false);
    },
    [finalDateErrors]
  );

  return (
    <Container>
      <DateSelector
        selected={selectedItem}
        onClick={() => setSelectedItem(true)}
        filledDate={!!initialDate}
      >
        <Button
          onClick={() => {
            setShowInitialDateBox(!showInitialDateBox);
            setShowFinalDateBox(false);
            initialTimeClearErrors();
            finalTimeClearErrors();
          }}
        >
          <PiClockCountdown size={19} />
          {initialDate ? <DateLabel> {initialDate}</DateLabel> : <p>Start</p>}
        </Button>
        <DateInputBox selected={showInitialDateBox}>
          <Form onSubmit={handleInitialDateSubmit(onInitialDateSubmit)}>
            <InputGroup>
              <InputLabel>Hour</InputLabel>
              <InputBundle>
                <FormControl isInvalid={!!initialDateErrors.hour_h1}>
                  <Input
                    register={initialDateRegister}
                    name="hour_h1"
                    type="text"
                    maxLength={1}
                    errors={initialDateErrors.hour_h1}
                  />
                </FormControl>

                <FormControl isInvalid={!!initialDateErrors.hour_h2}>
                  <Input
                    register={initialDateRegister}
                    name="hour_h2"
                    type="text"
                    maxLength={1}
                    errors={initialDateErrors.hour_h2}
                  />
                </FormControl>
              </InputBundle>
            </InputGroup>
            <DateDivider>:</DateDivider>
            <InputGroup>
              <InputLabel>Minute</InputLabel>
              <InputBundle>
                <FormControl isInvalid={!!initialDateErrors.minute_m1}>
                  <Input
                    name="minute_m1"
                    type="text"
                    maxLength={1}
                    register={initialDateRegister}
                    errors={initialDateErrors.minute_m1}
                  />
                </FormControl>
                <FormControl isInvalid={!!initialDateErrors.minute_m2}>
                  <Input
                    name="minute_m2"
                    type="text"
                    maxLength={1}
                    register={initialDateRegister}
                    errors={initialDateErrors.minute_m2}
                  />
                </FormControl>
              </InputBundle>
            </InputGroup>
            <DateDivider>:</DateDivider>

            <InputGroup>
              <InputLabel>Second</InputLabel>
              <InputBundle>
                <FormControl isInvalid={!!initialDateErrors.second_s1}>
                  <Input
                    name="second_s1"
                    type="text"
                    maxLength={1}
                    register={initialDateRegister}
                    errors={initialDateErrors.second_s1}
                  />
                </FormControl>

                <FormControl isInvalid={!!initialDateErrors.second_s2}>
                  <Input
                    name="second_s2"
                    type="text"
                    maxLength={1}
                    register={initialDateRegister}
                    errors={initialDateErrors.second_s2}
                  />
                </FormControl>
              </InputBundle>
            </InputGroup>
            <SubmitButton type="submit">Ok →</SubmitButton>
          </Form>
        </DateInputBox>
      </DateSelector>

      {initialDate && finalDate && <DateDivider>{'>'}</DateDivider>}

      <DateSelector
        selected={!selectedItem}
        onClick={() => setSelectedItem(false)}
        filledDate={!!finalDate}
      >
        <Button
          onClick={() => {
            setShowFinalDateBox(!showFinalDateBox);
            initialTimeClearErrors();
            setShowInitialDateBox(false);
            finalTimeClearErrors();
          }}
        >
          <PiClockCountdown size={19} />
          {finalDate ? <DateLabel> {finalDate}</DateLabel> : <p>End</p>}
        </Button>

        <DateInputBox selected={showFinalDateBox}>
          <Form onSubmit={handleFinalDateSubmit(onFinalDateSubmit)}>
            <InputGroup>
              <InputLabel>Hour</InputLabel>
              <InputBundle>
                <FormControl isInvalid={!!finalDateErrors.hour_h1}>
                  <Input
                    register={finalDateRegister}
                    name="hour_h1"
                    type="text"
                    maxLength={1}
                    errors={finalDateErrors.hour_h1}
                  />
                </FormControl>
                <FormControl isInvalid={!!finalDateErrors.hour_h1}>
                  <Input
                    register={finalDateRegister}
                    name="hour_h2"
                    type="text"
                    maxLength={1}
                    errors={finalDateErrors.hour_h2}
                  />
                </FormControl>
              </InputBundle>
            </InputGroup>

            <DateDivider>:</DateDivider>
            <InputGroup>
              <InputLabel>Minute</InputLabel>
              <InputBundle>
                <FormControl isInvalid={!!finalDateErrors.minute_m1}>
                  <Input
                    name="minute_m1"
                    type="text"
                    maxLength={1}
                    register={finalDateRegister}
                    errors={finalDateErrors.minute_m1}
                  />
                </FormControl>
                <FormControl isInvalid={!!finalDateErrors.minute_m1}>
                  <Input
                    name="minute_m2"
                    type="text"
                    maxLength={1}
                    register={finalDateRegister}
                    errors={finalDateErrors.minute_m1}
                  />
                </FormControl>
              </InputBundle>
            </InputGroup>
            <DateDivider>:</DateDivider>

            <InputGroup>
              <InputLabel>Second</InputLabel>
              <InputBundle>
                <FormControl isInvalid={!!finalDateErrors.second_s1}>
                  <Input
                    name="second_s1"
                    type="text"
                    maxLength={1}
                    register={finalDateRegister}
                    errors={finalDateErrors.second_s1}
                  />
                </FormControl>
                <FormControl isInvalid={!!finalDateErrors.second_s2}>
                  <Input
                    name="second_s2"
                    type="text"
                    maxLength={1}
                    register={finalDateRegister}
                    errors={finalDateErrors.second_s2}
                  />
                </FormControl>
              </InputBundle>
            </InputGroup>
            <SubmitButton type="submit">Ok →</SubmitButton>
          </Form>
        </DateInputBox>
      </DateSelector>
    </Container>
  );
};

export default TimeInput;
