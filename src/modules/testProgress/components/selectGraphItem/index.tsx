/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect, useState } from 'react';
import { Checkbox } from '@chakra-ui/react';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { CheckboxContent, Container } from './styles';
import AccordionSelectItems from '../accordionSelectItems';
import RGBPicker from '../rgbPicker';

interface ISelectGraphItemProps {
  checked(boolean: boolean[]): void;
  changeColor(color: string, index: number): void;
}

const data1 = {
  users: [
    { id: 0, name: 'LABEL : IR LAMP 1', color: 'red' },
    { id: 1, name: 'LABEL : IR LAMP 2', color: 'pink' },
    { id: 2, name: 'LABEL : IR LAMP 3', color: 'blue' },
    { id: 3, name: 'LABEL : IR LAMP 4', color: 'green' },
  ],
};

const data2 = {
  users: [
    { id: 4, name: 'LABEL : THERMO 1', color: 'yellow' },
    { id: 5, name: 'LABEL : THERMO 2', color: 'black' },
    { id: 6, name: 'LABEL : THERMO 3', color: 'purple' },
    { id: 7, name: 'LABEL : THERMO 4', color: 'brown' },
  ],
};

const SelectGraphItem: React.FC<ISelectGraphItemProps> = ({
  checked,
  changeColor,
}) => {
  const [checkedItems, setCheckedItems] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [changeCheckedColor, setChangeCheckedColor] = useState<{
    color: string;
    index: number;
  }>();

  const allChecked = checkedItems.every(Boolean);
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked;

  useEffect(() => {
    checked(checkedItems);
  }, [checkedItems, checked]);

  useEffect(() => {
    if (changeCheckedColor)
      changeColor(changeCheckedColor.color, changeCheckedColor.index);
  }, [changeCheckedColor, changeColor]);

  return (
    <Container>
      <Checkbox
        isChecked={allChecked}
        isIndeterminate={isIndeterminate}
        onChange={(e) =>
          setCheckedItems([
            e.target.checked,
            e.target.checked,
            e.target.checked,
            e.target.checked,
            e.target.checked,
            e.target.checked,
            e.target.checked,
            e.target.checked,
          ])
        }
        fontSize={12}
      >
        SELECT ALL
      </Checkbox>
      <AccordionSelectItems title="ir lamps">
        {data1.users.map((data) => (
          <CheckboxContent color={data.color}>
            <MdOutlineRemoveRedEye size={20} />
            <RGBPicker
              selectColor={(value) => {
                setChangeCheckedColor({
                  color: value,
                  index: data.id,
                });
              }}
            />
            <Checkbox
              key={data.id}
              isChecked={checkedItems[data.id]}
              onChange={(e) => {
                setCheckedItems([
                  ...checkedItems.slice(0, data.id),
                  e.target.checked,
                  ...checkedItems.slice(data.id + 1),
                ]);
              }}
            >
              {data.name}
            </Checkbox>
          </CheckboxContent>
        ))}
      </AccordionSelectItems>
      <AccordionSelectItems title="thermocouples">
        {data2.users.map((data) => (
          <CheckboxContent color={data.color}>
            <MdOutlineRemoveRedEye size={20} />
            <RGBPicker
              selectColor={(value) => {
                setChangeCheckedColor({
                  color: value,
                  index: data.id,
                });
              }}
            />
            <Checkbox
              key={data.id}
              isChecked={checkedItems[data.id]}
              onChange={(e) =>
                setCheckedItems([
                  ...checkedItems.slice(0, data.id),
                  e.target.checked,
                  ...checkedItems.slice(data.id + 1),
                ])
              }
            >
              {data.name}
            </Checkbox>
          </CheckboxContent>
        ))}
      </AccordionSelectItems>
    </Container>
  );
};

export default SelectGraphItem;
