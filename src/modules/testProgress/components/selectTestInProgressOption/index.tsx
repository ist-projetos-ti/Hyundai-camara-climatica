/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { IconType } from 'react-icons';
import { Container } from './styles';

interface ISelectTestInProgressOptionProps {
  label: string;
  Icon: IconType;
  show: boolean;
}

const SelectTestInProgressOption: React.FC<
  ISelectTestInProgressOptionProps
> = ({ Icon, label, show }) => (
  <Container onClick={() => {}} show={show}>
    <Icon size={20} />
    <p>{label}</p>
  </Container>
);

export default SelectTestInProgressOption;
