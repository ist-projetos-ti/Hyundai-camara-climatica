import React, { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormControl } from '@chakra-ui/react';
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
import Input from '../Input';

interface IValue {
  initialTime: string | undefined;
  finalTime: string | undefined;
}

interface TimeInputProps {
  onChange: (...event: any[]) => void;
}

const TimeInput: React.FC<TimeInputProps> = ({ onChange }) => {
  const [isStartTimeSelected, setIsStartTimeSelected] = useState(true);
  const [initialTime, setInitialTime] = useState<string | null>(null);
  const [finalTime, setFinalTime] = useState<string | null>(null);

  const [showInitialTimeBox, setShowInitialTimeBox] = useState(false);
  const [showFinalTimeBox, setShowFinalTimeBox] = useState(false);

  const [value, setValue] = useState<IValue>({} as IValue);

  useEffect(() => {
    if (initialTime || finalTime) {
      setValue({
        initialTime: initialTime || undefined,
        finalTime: finalTime || undefined,
      });
    }
  }, [finalTime, initialTime]);

  useEffect(() => {
    onChange(value);
  }, [onChange, value]);

  const {
    handleSubmit: handleInitialTimeSubmit,
    register: initialTimeRegister,
    clearErrors: initialTimeClearErrors,
    formState: { errors: initialTimeErrors },
  } = useForm<TimeFilterData>({
    resolver: timeFilterResolver,
    mode: 'all',
  });

  const {
    handleSubmit: handleFinalTimeSubmit,
    register: finalTimeRegister,
    clearErrors: finalTimeClearErrors,
    formState: { errors: finalTimeErrors },
  } = useForm<TimeFilterData>({
    resolver: timeFilterResolver,
    mode: 'all',
  });

  const onInitialTimeSubmit = useCallback(
    async (data: TimeFilterData) => {
      setInitialTime(
        `${data.hour_h1}${data.hour_h2}:${data.minute_m1}${data.minute_m2}:${data.second_s1}${data.second_s2}`
      );
      if (JSON.stringify(initialTimeErrors) === '{}')
        setShowInitialTimeBox(false);
    },
    [initialTimeErrors]
  );

  const onFinalTimeSubmit = useCallback(
    async (data: TimeFilterData) => {
      setFinalTime(
        `${data.hour_h1}${data.hour_h2}:${data.minute_m1}${data.minute_m2}:${data.second_s1}${data.second_s2}`
      );

      if (JSON.stringify(finalTimeErrors) === '{}') setShowFinalTimeBox(false);
    },
    [finalTimeErrors]
  );

  return (
    <Container>
      <DateSelector selected={isStartTimeSelected} filledDate={!!initialTime}>
        <Button
          type="button"
          onClick={() => {
            setShowInitialTimeBox(!showInitialTimeBox);
            setShowFinalTimeBox(false);
            initialTimeClearErrors();
            finalTimeClearErrors();
            setIsStartTimeSelected(true);
          }}
        >
          <PiClockCountdown size={19} />
          {initialTime ? <DateLabel> {initialTime}</DateLabel> : <p>Start</p>}
        </Button>
        <DateInputBox selected={showInitialTimeBox}>
          <Form>
            <InputGroup>
              <InputLabel>Hour</InputLabel>
              <InputBundle>
                <FormControl isInvalid={!!initialTimeErrors.hour_h1}>
                  <Input
                    register={initialTimeRegister}
                    name="hour_h1"
                    type="text"
                    maxLength={1}
                    errors={initialTimeErrors.hour_h1}
                  />
                </FormControl>

                <FormControl isInvalid={!!initialTimeErrors.hour_h2}>
                  <Input
                    register={initialTimeRegister}
                    name="hour_h2"
                    type="text"
                    maxLength={1}
                    errors={initialTimeErrors.hour_h2}
                  />
                </FormControl>
              </InputBundle>
            </InputGroup>
            <DateDivider>:</DateDivider>
            <InputGroup>
              <InputLabel>Minute</InputLabel>
              <InputBundle>
                <FormControl isInvalid={!!initialTimeErrors.minute_m1}>
                  <Input
                    name="minute_m1"
                    type="text"
                    maxLength={1}
                    register={initialTimeRegister}
                    errors={initialTimeErrors.minute_m1}
                  />
                </FormControl>
                <FormControl isInvalid={!!initialTimeErrors.minute_m2}>
                  <Input
                    name="minute_m2"
                    type="text"
                    maxLength={1}
                    register={initialTimeRegister}
                    errors={initialTimeErrors.minute_m2}
                  />
                </FormControl>
              </InputBundle>
            </InputGroup>
            <DateDivider>:</DateDivider>

            <InputGroup>
              <InputLabel>Second</InputLabel>
              <InputBundle>
                <FormControl isInvalid={!!initialTimeErrors.second_s1}>
                  <Input
                    name="second_s1"
                    type="text"
                    maxLength={1}
                    register={initialTimeRegister}
                    errors={initialTimeErrors.second_s1}
                  />
                </FormControl>

                <FormControl isInvalid={!!initialTimeErrors.second_s2}>
                  <Input
                    name="second_s2"
                    type="text"
                    maxLength={1}
                    register={initialTimeRegister}
                    errors={initialTimeErrors.second_s2}
                  />
                </FormControl>
              </InputBundle>
            </InputGroup>
            <SubmitButton
              type="button"
              onClick={handleInitialTimeSubmit(onInitialTimeSubmit)}
            >
              Ok →
            </SubmitButton>
          </Form>
        </DateInputBox>
      </DateSelector>

      {initialTime && finalTime && <DateDivider>{'>'}</DateDivider>}

      <DateSelector selected={!isStartTimeSelected} filledDate={!!finalTime}>
        <Button
          type="button"
          onClick={() => {
            setShowFinalTimeBox(!showFinalTimeBox);
            initialTimeClearErrors();
            setShowInitialTimeBox(false);
            finalTimeClearErrors();
            setIsStartTimeSelected(false);
          }}
        >
          <PiClockCountdown size={19} />
          {finalTime ? <DateLabel> {finalTime}</DateLabel> : <p>End</p>}
        </Button>

        <DateInputBox selected={showFinalTimeBox}>
          <Form>
            <InputGroup>
              <InputLabel>Hour</InputLabel>
              <InputBundle>
                <FormControl isInvalid={!!finalTimeErrors.hour_h1}>
                  <Input
                    register={finalTimeRegister}
                    name="hour_h1"
                    type="text"
                    maxLength={1}
                    errors={finalTimeErrors.hour_h1}
                  />
                </FormControl>
                <FormControl isInvalid={!!finalTimeErrors.hour_h1}>
                  <Input
                    register={finalTimeRegister}
                    name="hour_h2"
                    type="text"
                    maxLength={1}
                    errors={finalTimeErrors.hour_h2}
                  />
                </FormControl>
              </InputBundle>
            </InputGroup>

            <DateDivider>:</DateDivider>
            <InputGroup>
              <InputLabel>Minute</InputLabel>
              <InputBundle>
                <FormControl isInvalid={!!finalTimeErrors.minute_m1}>
                  <Input
                    name="minute_m1"
                    type="text"
                    maxLength={1}
                    register={finalTimeRegister}
                    errors={finalTimeErrors.minute_m1}
                  />
                </FormControl>
                <FormControl isInvalid={!!finalTimeErrors.minute_m1}>
                  <Input
                    name="minute_m2"
                    type="text"
                    maxLength={1}
                    register={finalTimeRegister}
                    errors={finalTimeErrors.minute_m1}
                  />
                </FormControl>
              </InputBundle>
            </InputGroup>
            <DateDivider>:</DateDivider>

            <InputGroup>
              <InputLabel>Second</InputLabel>
              <InputBundle>
                <FormControl isInvalid={!!finalTimeErrors.second_s1}>
                  <Input
                    name="second_s1"
                    type="text"
                    maxLength={1}
                    register={finalTimeRegister}
                    errors={finalTimeErrors.second_s1}
                  />
                </FormControl>
                <FormControl isInvalid={!!finalTimeErrors.second_s2}>
                  <Input
                    name="second_s2"
                    type="text"
                    maxLength={1}
                    register={finalTimeRegister}
                    errors={finalTimeErrors.second_s2}
                  />
                </FormControl>
              </InputBundle>
            </InputGroup>
            <SubmitButton
              type="button"
              onClick={handleFinalTimeSubmit(onFinalTimeSubmit)}
            >
              Ok →
            </SubmitButton>
          </Form>
        </DateInputBox>
      </DateSelector>
    </Container>
  );
};

export default TimeInput;
