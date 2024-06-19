/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import HorizontalDots from '@assets/horizontalDots.svg?react';
import Car from '@assets/car.svg?react';
import SpeedTest from '@assets/speedTest.svg?react';
import ColorIcon from '@assets/colorIcon.svg?react';
import Calendar from '@assets/simpleCalendar.svg?react';

import { Select } from '@chakra-ui/react';
import { FiSettings } from 'react-icons/fi';

import { Container, Selector, Button, DateInputBox } from './styles';

export enum FilterType {
  VIN = 'VIN',
  PROD_DATE = 'Prod. Date',
  MODEL = 'Model',
  ENGINE = 'Engine',
  MILEAGE = 'Mileage',
  COLOR = 'Color',
}

interface IFilterItems {
  name: FilterType;
  icon: any;
  options: {
    label: string;
    value: string;
  }[];
}

const filterItems: IFilterItems[] = [
  {
    name: FilterType.VIN,
    icon: <HorizontalDots />,
    options: [
      { label: '4S3BMHB68B3286050', value: '4S3BMHB68B3286050' },
      { label: '4S3BMHB68B3286051', value: '4S3BMHB68B3286051' },
    ],
  },
  {
    name: FilterType.PROD_DATE,
    icon: <Calendar />,
    options: [
      { label: '2023', value: '2023' },
      { label: '2024', value: '2024' },
    ],
  },
  {
    name: FilterType.MODEL,
    icon: <Car />,
    options: [
      { label: 'HB20 Comfort', value: 'HB20 Comfort' },
      { label: 'HB21 Comfort', value: 'HB21 Comfort' },
    ],
  },
  {
    name: FilterType.ENGINE,
    icon: <FiSettings />,
    options: [
      { label: '1.0T AT6', value: '1.0T AT6' },
      { label: '1.0T AT7', value: '1.0T AT7' },
    ],
  },
  {
    name: FilterType.MILEAGE,
    icon: <SpeedTest />,
    options: [
      { label: '25.000', value: '25.000' },
      { label: '30.000', value: '30.000' },
    ],
  },
  {
    name: FilterType.COLOR,
    icon: <ColorIcon />,
    options: [
      { label: 'white', value: 'white' },
      { label: 'black', value: 'black' },
    ],
  },
];

interface IValues {
  vin: string | undefined;
  prodDate: string | undefined;
  model: string | undefined;
  engine: string | undefined;
  mileage: string | undefined;
  color: string | undefined;
}

const CarSettings: React.FC = () => {
  const [showBox, setShowBox] = useState(false);
  const [values, setValues] = useState<IValues>({
    vin: undefined,
    prodDate: undefined,
    model: undefined,
    engine: undefined,
    mileage: undefined,
    color: undefined,
  });
  const [selectedItem, setSelectedItem] = useState(FilterType.VIN);

  return (
    <Container>
      {filterItems.map((item) => (
        <Selector
          selected={item.name === selectedItem}
          filledDate={!!values[item.name]}
          key={item.name}
        >
          <Button
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

            {values[item.name] ? (
              <p>{values[item.name]}</p>
            ) : (
              <p> {item.name} </p>
            )}
          </Button>
          <DateInputBox selected={item.name === selectedItem && showBox}>
            <Select
              borderRadius={15}
              width={300}
              height={43}
              onClick={(event) => {
                const updatedValues = values;
                updatedValues[item.name] = event.target.value;
                setValues(updatedValues);
              }}
              // {...register('type')}
            >
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

export default CarSettings;
