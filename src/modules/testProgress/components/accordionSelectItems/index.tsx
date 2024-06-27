import React, { ReactNode } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  Box,
  AccordionIcon,
  AccordionPanel,
} from '@chakra-ui/react';

interface IAccordionSelectItemsProps {
  title: string;
  children: ReactNode;
}

const AccordionSelectItems: React.FC<IAccordionSelectItemsProps> = ({
  children,
  title,
}) => (
  <Accordion allowToggle>
    <AccordionItem>
      <h2>
        <AccordionButton
          marginTop="1rem"
          border="2px solid #000"
          borderRadius={7}
        >
          <Box
            fontWeight="bold"
            fontSize={12}
            textTransform="uppercase"
            as="span"
            flex="1"
            textAlign="left"
          >
            {title}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>{children}</AccordionPanel>
    </AccordionItem>
  </Accordion>
);

export default AccordionSelectItems;
