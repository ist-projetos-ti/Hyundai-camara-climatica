/* eslint-disable arrow-body-style */
import React, { useState } from 'react';
import DrawerNavigation from '@components/DrawerNavigation';
import HeaderMobile from '@components/Header/Mobile/Header';
import FilterIcon from '@assets/filter.svg?react';

import TotalHourMachineLabel from '@modules/testHistory/components/TotalHourMachineLabel';
import ListItem from '@modules/testHistory/components/mobile/ListItem';
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import Filter from '@modules/testHistory/components/mobile/Filter';
import { Container, List, Span } from './styles';

const MobileTestHistoryPage: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<any>();

  return (
    <Container>
      <DrawerNavigation
        closeNavigation={(value) => setOpen(value)}
        openNavigation={open}
      />
      <HeaderMobile
        activateNavigation={(value) => {
          setOpen(value);
        }}
        title="Test History"
      >
        <button ref={btnRef} onClick={onOpen}>
          <FilterIcon width={20} height={20} />
        </button>
        <Drawer
          isOpen={isOpen}
          placement="bottom"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent borderRadius="17px" height="600px">
            <DrawerCloseButton />
            <DrawerHeader
              textAlign="center"
              marginRight="20%"
              padding="20px"
              marginBottom="8px"
            >
              <Span />
            </DrawerHeader>

            <DrawerBody>
              <Filter />
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </HeaderMobile>

      <TotalHourMachineLabel />
      <List>
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </List>
    </Container>
  );
};

export default MobileTestHistoryPage;
