/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import HorizontalDots from '@assets/horizontalDots.svg?react';
import Car from '@assets/car.svg?react';
import SpeedTest from '@assets/speedTest.svg?react';
import ColorIcon from '@assets/colorIcon.svg?react';
import Calendar from '@assets/simpleCalendar.svg?react';
import SettingsIcon from '@assets/settings.svg?react';

import { Select } from '@chakra-ui/react';

import { Container, Selector, Button, DateInputBox } from './styles';

export enum FilterType {
  VIN = 'vin',
  PROD_DATE = 'prodDate',
  MODEL = 'model',
  ENGINE = 'engine',
  MILEAGE = 'mileage',
  COLOR = 'color',
}

interface IFilterItems {
  name: FilterType;
  label: string;
  icon: any;
  options: {
    label: string;
    value: string;
  }[];
}

const filterItems: IFilterItems[] = [
  {
    name: FilterType.VIN,
    label: 'VIN',
    icon: <HorizontalDots />,
    options: [
      { label: '4S3BMHB68B3286050', value: '4S3BMHB68B3286050' },
      { label: '4S3BMHB68B3286051', value: '4S3BMHB68B3286051' },
    ],
  },
  {
    name: FilterType.PROD_DATE,
    label: 'Prod. Date',
    icon: <Calendar />,
    options: [
      { label: '2023', value: '2023' },
      { label: '2024', value: '2024' },
    ],
  },
  {
    name: FilterType.MODEL,
    label: 'Model',
    icon: <Car />,
    options: [
      { label: 'HB20 Comfort', value: 'HB20 Comfort' },
      { label: 'HB21 Comfort', value: 'HB21 Comfort' },
    ],
  },
  {
    name: FilterType.ENGINE,
    label: 'Engine',
    icon: <SettingsIcon />,
    options: [
      { label: '1.0T AT6', value: '1.0T AT6' },
      { label: '1.0T AT7', value: '1.0T AT7' },
    ],
  },
  {
    name: FilterType.MILEAGE,
    label: 'Mileage',
    icon: <SpeedTest />,
    options: [
      { label: '25.000', value: '25.000' },
      { label: '30.000', value: '30.000' },
    ],
  },
  {
    name: FilterType.COLOR,
    label: 'Color',
    icon: <ColorIcon />,
    options: [
      { label: 'white', value: 'white' },
      { label: 'black', value: 'black' },
    ],
  },
];

interface FilterItem {
  fieldName: FilterType;
  value: string | undefined;
}

interface ICarDetails {
  vin?: string | undefined;
  prodDate?: string | undefined;
  model?: string | undefined;
  engine?: string | undefined;
  mileage?: string | undefined;
  color?: string | undefined;
}

interface CarDetailsProps {
  onChange: (...event: any[]) => void;
}

const CarDetails: React.FC<CarDetailsProps> = ({ onChange }) => {
  const [showBox, setShowBox] = useState(false);

  const [values, setValues] = useState<FilterItem[]>([
    {
      fieldName: FilterType.VIN,
      value: undefined,
    },
    { fieldName: FilterType.PROD_DATE, value: undefined },
    { fieldName: FilterType.MODEL, value: undefined },
    { fieldName: FilterType.ENGINE, value: undefined },
    { fieldName: FilterType.MILEAGE, value: undefined },
    { fieldName: FilterType.COLOR, value: undefined },
  ]);
  const [selectedItem, setSelectedItem] = useState(FilterType.VIN);

  return (
    <Container>
      {filterItems.map((item, index) => (
        <Selector
          selected={item.name === selectedItem}
          filledDate={!!values[index].value}
          key={item.name}
        >
          <Button
            type="button"
            onClick={() => {
              if (selectedItem !== item.name) {
                setShowBox(true);
              } else {
                setShowBox(!showBox);
              }
              setSelectedItem(item.name);
            }}
          >
            {item.icon}

            {values[index].value ? (
              <p>{values[index].value}</p>
            ) : (
              <p> {item.label} </p>
            )}
          </Button>
          <DateInputBox
            selected={item.name === selectedItem && showBox}
            onBlur={() => {
              setShowBox(false);
            }}
          >
            <Select
              borderRadius={15}
              width={300}
              height={43}
              onChange={(event) => {
                if (event.target.value !== 'none') {
                  const updatedValues = values;
                  updatedValues[index].value = event.target.value;
                  setValues(updatedValues);
                  const objectArray: ICarDetails = values.reduce(
                    (acc, element) => {
                      acc[element.fieldName] = element.value;
                      return acc;
                    },
                    {} as Record<FilterType, any>
                  );
                  onChange(objectArray);
                  setShowBox(false);
                }
              }}
            >
              <option value="none" disabled selected>
                Select...
              </option>
              {item.options.map((option) => (
                <option value={option.value} key={option.value}>
                  {option.label}
                </option>
              ))}
            </Select>
          </DateInputBox>
        </Selector>
      ))}
    </Container>
  );
};

export default CarDetails;
