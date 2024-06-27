/* eslint-disable consistent-return */
/* eslint-disable no-return-assign */
/* eslint-disable array-callback-return */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/no-array-index-key */
import React, { useCallback, useState } from 'react';
import {
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Line,
  Brush,
} from 'recharts';
import { graphData } from '@utils/faker-graph-data';
import {
  Slider,
  SliderMark,
  SliderTrack,
  SliderThumb,
  Box,
} from '@chakra-ui/react';
import { TiMediaPause } from 'react-icons/ti';
import SelectGraphItem from '../selectGraphItem';
import {
  Container,
  SliderContent,
  ThermocoupleGraphContent,
  SliderInformations,
} from './styles';

const hoursLabel: [{ hour: number }] = [];

for (let hora = 0; hora <= 72; hora += 2) {
  hoursLabel.push({ hour: hora });
}

interface ICheckedItemsProps {
  isCheck: boolean;
  datakey: string;
  color: string;
}

interface IThermocoupleGraph {
  isTestHistory?: boolean;
}

const ThermocoupleDataGraph: React.FC<IThermocoupleGraph> = ({
  isTestHistory,
}) => {
  const [fakeData] = useState(graphData);
  const [sliderValue, setSliderValue] = useState(0);
  const [sliderInformationData] = useState<[{ hour: number }]>(hoursLabel);
  const [checkedItems, setCheckedItems] = useState<ICheckedItemsProps[]>([
    { datakey: 'temp1', isCheck: false, color: '#aabbcc' },
    { datakey: 'temp2', isCheck: false, color: '#aabbcc' },
    { datakey: 'temp3', isCheck: false, color: '#aabbcc' },
    { datakey: 'temp4', isCheck: false, color: '#aabbcc' },
    { datakey: 'temp5', isCheck: false, color: '#aabbcc' },
    { datakey: 'temp6', isCheck: false, color: '#aabbcc' },
    { datakey: 'temp7', isCheck: false, color: '#aabbcc' },
    { datakey: 'temp8', isCheck: false, color: '#aabbcc' },
  ]);

  const newCheckedItems = useCallback(
    (index: number, value: boolean) => {
      const aux = [...checkedItems];
      aux[index].isCheck = value;
      return setCheckedItems(aux);
    },
    [checkedItems]
  );

  const newColor = useCallback(
    (index: number, color: string) => {
      const aux = [...checkedItems];
      aux[index].color = color;
      return setCheckedItems(aux);
    },
    [checkedItems]
  );

  return (
    <Container isTestHistory={isTestHistory}>
      <SelectGraphItem
        changeColor={(value, index) => newColor(index, value)}
        checked={(check) =>
          check.map((value, index) => newCheckedItems(index, value))
        }
      />
      <ThermocoupleGraphContent>
        <ResponsiveContainer
          width="100%"
          height={isTestHistory ? '85%' : '80%'}
        >
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
            {checkedItems.map((value, index) => {
              if (value.isCheck) {
                return (
                  <Line
                    key={index}
                    type="linear"
                    dataKey={value.datakey}
                    stroke={value.color}
                    yAxisId="right"
                    strokeWidth={2}
                    dot={false}
                  />
                );
              }

              return <></>;
            })}

            <Brush startIndex={0} endIndex={15} height={15} />
          </LineChart>
        </ResponsiveContainer>
        <SliderContent>
          <SliderInformations>
            {sliderInformationData.map((value, index) => (
              <div>
                <p key={index}>
                  {value.hour.toString().length === 1
                    ? 0 + value.hour.toString()
                    : value.hour}
                </p>
                {index === 36 ? <></> : <p>|</p>}
              </div>
            ))}
          </SliderInformations>
          <Slider
            onChange={(val) => setSliderValue(val)}
            width="98%"
            height="50%"
            defaultValue={0}
            min={0}
            max={72}
            step={2}
            marginLeft={2}
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
      </ThermocoupleGraphContent>
    </Container>
  );
};

export default ThermocoupleDataGraph;
