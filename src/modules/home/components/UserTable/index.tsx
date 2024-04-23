/* eslint-disable arrow-body-style */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import {
  useEditableControls,
  ButtonGroup,
  IconButton,
  Flex,
  Editable,
  EditablePreview,
  Input,
  EditableInput,
  Select,
} from '@chakra-ui/react';
import { CheckIcon } from '@components/Form/Input/styles';
import { FaRegEdit } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import { TfiReload } from 'react-icons/tfi';
import { IoTrashOutline } from 'react-icons/io5';
import themeDefaults from '@style/themeDefaults';
import {
  Container,
  TableHeader,
  HeaderItem,
  TableBody,
  TableRow,
  TableItem,
} from './styles';

const UserTable: React.FC = () => {
  function EditableControls() {
    const {
      isEditing,
      getSubmitButtonProps,
      getCancelButtonProps,
      getEditButtonProps,
    } = useEditableControls();

    return isEditing ? (
      <ButtonGroup justifyContent="center" size="sm" marginRight={3}>
        <IconButton icon={<CheckIcon />} {...getSubmitButtonProps()} />
        <IconButton icon={<IoMdClose />} {...getCancelButtonProps()} />
      </ButtonGroup>
    ) : (
      <Flex justifyContent="center" alignItems="center">
        <IconButton
          size="sm"
          marginRight={5}
          icon={<FaRegEdit size={22} color={themeDefaults.colors.primary} />}
          {...getEditButtonProps()}
        />
      </Flex>
    );
  }

  return (
    <Container>
      <TableHeader>
        <HeaderItem width={30}>User HCM</HeaderItem>
        <HeaderItem width={30}>Name</HeaderItem>
        <HeaderItem width={25}>User Group</HeaderItem>
        <HeaderItem width={15}>Reset Password</HeaderItem>
        <HeaderItem width={5} />
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableItem width={30}>
            <Editable
              display="flex"
              flexDirection="row"
              alignItems="center"
              defaultValue="2112341"
              fontSize="16px"
              isPreviewFocusable={false}
            >
              <EditableControls />
              <EditablePreview />
              <Input as={EditableInput} />
            </Editable>
          </TableItem>
          <TableItem width={30}>
            <Editable
              display="flex"
              flexDirection="row"
              alignItems="center"
              defaultValue="José Augusto Silva"
              fontSize="16px"
              isPreviewFocusable={false}
            >
              <EditableControls />
              <EditablePreview />
              <Input as={EditableInput} />
            </Editable>
          </TableItem>
          <TableItem width={25}>
            <Select width={130} placeholder="Operador">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </TableItem>
          <TableItem width={15}>
            <button>
              <TfiReload size={30} color={themeDefaults.colors.primary} />
            </button>
          </TableItem>
          <TableItem width={5}>
            <button>
              <IoTrashOutline size={30} color={themeDefaults.colors.primary} />
            </button>
          </TableItem>
        </TableRow>
      </TableBody>
    </Container>
  );
};

export default UserTable;
