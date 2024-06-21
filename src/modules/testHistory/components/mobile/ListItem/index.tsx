/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

import { CgInfo } from 'react-icons/cg';

import {
  Container,
  HeaderItem,
  WrapButton,
  Label,
  TextItem,
  TestBox,
  DateLabel,
  Button,
} from './styles';

const ListItem: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <Container>
      <HeaderItem>
        <WrapButton
          isActive={isActive}
          onClick={() => {
            setIsActive(!isActive);
          }}
        >
          <MdOutlineKeyboardArrowRight size={16} />
        </WrapButton>
        <Label>Test </Label>
      </HeaderItem>
      <TextItem> Test name 01XJLY - SS</TextItem>
      <TestBox isActive={isActive}>
        <TextItem>Test description example HjdLdl_056698</TextItem>
        <TextItem>
          Started at <DateLabel> 2022/08/19 16:00:45 </DateLabel>
        </TextItem>
        <TextItem>
          Ended at <DateLabel variety> 2022/08/19 16:00:45 </DateLabel>
        </TextItem>
        <TextItem>Duration of 00:00:01</TextItem>
        <Button>
          <CgInfo size={18} /> View Test
        </Button>
      </TestBox>
    </Container>
  );
};

export default ListItem;
