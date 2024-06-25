/* eslint-disable arrow-body-style */
/* eslint-disable jsx-a11y/control-has-associated-label */
import { PopoverTrigger, PopoverContent, Popover, Box } from '@chakra-ui/react';
import React, { useState } from 'react';
import { HexColorPicker } from 'react-colorful';

interface IRGBPickerProps {
  selectColor(color: string): void;
}

const RGBPicker: React.FC<IRGBPickerProps> = ({ selectColor }) => {
  const [color, setColor] = useState('#aabbcc');

  return (
    <Popover placement="right">
      <PopoverTrigger>
        <Box
          as="button"
          height="15px"
          width="15px"
          borderRadius="4px"
          bg={color}
        />
      </PopoverTrigger>
      <PopoverContent w={0}>
        <HexColorPicker
          color={color}
          onChange={(newColor) => {
            selectColor(newColor);
            setColor(newColor);
          }}
        />
      </PopoverContent>
    </Popover>
  );
};

export default RGBPicker;
