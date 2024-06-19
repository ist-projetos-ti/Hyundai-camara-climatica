/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable eqeqeq */
/* eslint-disable array-callback-return */
/* eslint-disable arrow-body-style */
/* eslint-disable jsx-a11y/aria-proptypes */
/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import themeDefaults from '@style/themeDefaults';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Brush,
} from 'recharts';
import { graphData } from '@utils/faker-graph-data';
import {
  Slider,
  SliderTrack,
  SliderThumb,
  Box,
  SliderMark,
} from '@chakra-ui/react';
import { TiMediaPause } from 'react-icons/ti';
import {
  ChamberGraphContent,
  ChamberInformationContent,
  Container,
  GraphContent,
  SliderContent,
  SliderInformations,
} from './styles';

import ChamberInformations from '../chamberInformations';

const data = [
  {
    color: themeDefaults.colors.graphTemp1,
    label: 'Chamber Temp 1',
    value: '20',
    temp: true,
  },
  {
    color: themeDefaults.colors.graphTemp2,
    label: 'Chamber Temp 2',
    value: '20',
    temp: true,
  },
  {
    color: themeDefaults.colors.graphHumity1,
    label: 'Chamber Humity 1',
    value: '20',
    temp: false,
  },
  {
    color: themeDefaults.colors.graphHumity2,
    label: 'Chamber Humity 2',
    value: '20',
    temp: false,
  },
];

const hoursLabel: [{ hour: number }] = [];

for (let hora = 0; hora <= 72; hora += 2) {
  hoursLabel.push({ hour: hora });
}

const ChamberGraph: React.FC = () => {
  const [fakeData] = useState(graphData);
  const [sliderValue, setSliderValue] = useState(0);
  const [sliderInformationData] = useState<[{ hour: number }]>(hoursLabel);

  return (
    <Container>
      <ChamberInformationContent>
        {data.map(({ color, label, temp, value }, index) => (
          <ChamberInformations
            key={index}
            color={color}
            label={label}
            value={value}
            temp={temp}
          />
        ))}
      </ChamberInformationContent>
      <ChamberGraphContent>
        <GraphContent>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={fakeData}>
              <CartesianGrid strokeOpacity={0.5} />
              <XAxis fontSize={10} strokeOpacity={0} dataKey="time" />
              <YAxis
                fontSize={10}
                strokeOpacity={1}
                yAxisId="left"
                orientation="left"
              />
              <YAxis
                fontSize={10}
                strokeOpacity={1}
                yAxisId="right"
                orientation="right"
              />
              <Tooltip />
              <Line
                type="linear"
                dataKey="temp1"
                stroke={themeDefaults.colors.graphTemp1}
                yAxisId="right"
                strokeWidth={2}
                dot={false}
              />
              <Line
                type="linear"
                dataKey="temp2"
                stroke={themeDefaults.colors.graphTemp2}
                yAxisId="right"
                strokeWidth={2}
                dot={false}
              />
              <Line
                type="linear"
                dataKey="humity1"
                stroke={themeDefaults.colors.graphHumity1}
                yAxisId="left"
                strokeWidth={2}
                dot={false}
              />
              <Line
                type="linear"
                dataKey="humity2"
                stroke={themeDefaults.colors.graphHumity2}
                yAxisId="left"
                strokeWidth={2}
                dot={false}
              />
              <Brush startIndex={0} endIndex={15} height={15} />
            </LineChart>
          </ResponsiveContainer>
        </GraphContent>
        <SliderContent>
          <SliderInformations>
            {sliderInformationData.map((value, index) => {
              return (
                <div>
                  <p key={index}>
                    {value.hour.toString().length === 1
                      ? 0 + value.hour.toString()
                      : value.hour}
                  </p>
                  {index === 36 ? <></> : <p>|</p>}
                </div>
              );
            })}
          </SliderInformations>
          <Slider
            onChange={(val) => setSliderValue(val)}
            width="100%"
            height="50%"
            defaultValue={0}
            min={0}
            max={72}
            step={1}
          >
            <SliderMark
              value={sliderValue}
              textAlign="center"
              bg="blue.500"
              color="white"
              mt="5"
              ml="-6"
              w="12"
            >
              {sliderValue}h
            </SliderMark>
            <SliderTrack height={3} bg="#D9D9D9" />
            <SliderThumb bg="#0B99A4" width="34px" height="15px">
              <Box size={16} color="#fff" as={TiMediaPause} />
            </SliderThumb>
          </Slider>
        </SliderContent>
      </ChamberGraphContent>
    </Container>
  );
};

export default ChamberGraph;
