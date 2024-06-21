import React, { useState } from 'react';
import { Collapse, Button, Input, Textarea } from '@chakra-ui/react';
import { IoIosArrowUp } from 'react-icons/io';
import themeDefaults from '@style/themeDefaults';
import {
  ButtonAreaColumn,
  ChamberInformationContent,
  Container,
  FormContent,
  HideContent,
  TextAreaColumn,
} from './styles';
import ChamberInformations from '../chamberInformations';

const NewTestProgressForm: React.FC = () => {
  const [show, setShow] = useState(false);

  const handleToggle = () => setShow(!show);

  return (
    <>
      <Collapse
        transition={{ exit: { duration: 1 }, enter: { duration: 1 } }}
        startingHeight="20%"
        in={show}
      >
        <Container>
          <FormContent>
            <TextAreaColumn>
              <Input hidden={show} height="30px" placeholder="Basic usage" />
              <Textarea
                hidden={show}
                height="100px"
                resize="none"
                placeholder="Here is a sample placeholder"
              />
            </TextAreaColumn>
            <ButtonAreaColumn />
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
