/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import { Collapse, Button, Input, Textarea } from '@chakra-ui/react';
import { IoIosArrowUp } from 'react-icons/io';
import themeDefaults from '@style/themeDefaults';
import { CiCalendar } from 'react-icons/ci';
import { PiDotsThreeFill } from 'react-icons/pi';
import { IoCarOutline } from 'react-icons/io5';
import { SlSpeedometer } from 'react-icons/sl';
import { GoGear } from 'react-icons/go';
import { BiSolidColorFill } from 'react-icons/bi';
import {
  ButtonAreaColumn,
  ChamberInformationContent,
  Container,
  FormContent,
  HideContent,
  TextAreaColumn,
} from './styles';
import ChamberInformations from '../chamberInformations';
import SelectTestInProgressOption from '../selectTestInProgressOption';

const selectOptions = [
  {
    label: 'vin',
    icon: PiDotsThreeFill,
  },
  {
    label: 'model',
    icon: IoCarOutline,
  },
  {
    label: 'prod.date',
    icon: CiCalendar,
  },
  {
    label: 'mileage',
    icon: SlSpeedometer,
  },
  {
    label: 'engine',
    icon: GoGear,
  },
  {
    label: 'color',
    icon: BiSolidColorFill,
  },
];

const NewTestProgressForm: React.FC = () => {
  const [show, setShow] = useState(false);

  const handleToggle = () => setShow(!show);

  return (
    <>
      <Collapse
        transition={{ exit: { duration: 0.5 }, enter: { duration: 0.5 } }}
        startingHeight="200px"
        in={show}
      >
        <Container>
          <FormContent>
            <TextAreaColumn>
              <Input
                bg={themeDefaults.colors.white}
                hidden={show}
                height="50px"
                placeholder="Basic usage"
              />
              <Textarea
                bg={themeDefaults.colors.white}
                hidden={show}
                height="120px"
                resize="none"
                placeholder="Here is a sample placeholder"
                marginBottom={4}
              />
            </TextAreaColumn>
            <ButtonAreaColumn>
              {selectOptions.map((value, index) => (
                <SelectTestInProgressOption
                  key={index}
                  show={show}
                  Icon={value.icon}
                  label={value.label}
                />
              ))}
            </ButtonAreaColumn>
          </FormContent>
        </Container>
      </Collapse>
      <HideContent>
        <ChamberInformationContent>
          <ChamberInformations
            color={themeDefaults.colors.graphTemp1}
            label="Chamber Temp 1"
            value="19"
            temp
          />
          <ChamberInformations
            color={themeDefaults.colors.graphTemp2}
            label="Chamber Temp 2"
            value="29.4"
            temp
          />
          <ChamberInformations
            color={themeDefaults.colors.graphHumity1}
            label="Chamber Humity 1"
            value="65"
            temp={false}
          />
          <ChamberInformations
            color={themeDefaults.colors.graphHumity2}
            label="Chamber Humity 2"
            value="68.3"
            temp={false}
          />
        </ChamberInformationContent>

        <Button onClick={handleToggle} colorScheme="teal" variant="link">
          Show{' '}
          <IoIosArrowUp
            style={{ transform: show ? 'rotate(0deg)' : 'rotate(180deg)' }}
          />
        </Button>
      </HideContent>
    </>
  );
};

export default NewTestProgressForm;
