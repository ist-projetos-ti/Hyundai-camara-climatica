/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable arrow-body-style */
import React, { useState } from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import themeDefaults from '@style/themeDefaults';
import {
  Button,
  ButtonGroup,
  Editable,
  EditableInput,
  EditablePreview,
  Flex,
  IconButton,
  Input,
  Select,
  useEditableControls,
} from '@chakra-ui/react';
import { TfiReload } from 'react-icons/tfi';
import { IoTrashOutline } from 'react-icons/io5';
import { IUser } from '@modules/users/interfaces';
import { useUser } from '@modules/users/hooks/Users';
import { CheckIcon } from '@components/Form/Input/styles';
import { FaRegEdit } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import { usePassword } from '@modules/users/hooks/Password';
import {
  ButtonContent,
  ButtonStyled,
  Container,
  ItemContent,
  ItemTop,
  OpenItemContent,
  TableContent,
  TableItem,
} from './styles';

interface IUserTableProps {
  data: IUser[];
}

const UserTableMobile: React.FC<IUserTableProps> = ({ data }) => {
  const { DeleteUser, UpdateUser } = useUser();
  const { ResetPassword } = usePassword();

  const [openRows, setOpenRows] = useState(Array(data.length).fill(false));

  const handleToggle = (index: number) => {
    const newOpenRows = [...openRows];
    newOpenRows[index] = !newOpenRows[index];
    setOpenRows(newOpenRows);
  };

  function EditableControls() {
    const {
      isEditing,
      getSubmitButtonProps,
      getCancelButtonProps,
      getEditButtonProps,
    } = useEditableControls();

    return isEditing ? (
      <ButtonGroup justifyContent="center" size="sm" marginRight={3}>
        <IconButton
          marginLeft={3}
          icon={<CheckIcon />}
          {...getSubmitButtonProps()}
        />
        <IconButton
          marginLeft={3}
          icon={<IoMdClose />}
          {...getCancelButtonProps()}
        />
      </ButtonGroup>
    ) : (
      <Flex justifyContent="center" alignItems="center">
        <IconButton
          size="sm"
          marginRight={5}
          marginLeft={3}
          icon={<FaRegEdit size={22} color={themeDefaults.colors.primary} />}
          {...getEditButtonProps()}
        />
      </Flex>
    );
  }

  return (
    <Container>
      <TableContent>
        {data.map((user, index) => {
          return (
            <TableItem key={user.id}>
              <ItemTop>
                <ButtonStyled
                  onClick={() => {
                    handleToggle(index);
                  }}
                >
                  <MdKeyboardArrowRight
                    size={20}
                    color={themeDefaults.colors.primary}
                  />
                </ButtonStyled>
                <h1>User</h1>
              </ItemTop>
              <ItemContent>
                <Editable
                  marginTop={5}
                  display="flex"
                  flexDirection="row"
                  alignItems="center"
                  defaultValue={user.hcm_code}
                  fontSize="16px"
                  isPreviewFocusable={false}
                  border="2px solid #E7E7E7 "
                  borderRadius="10px"
                  height="45px"
                  onSubmit={async (newData) => {
                    await UpdateUser({
                      id: user.id,
                      hcm_code: newData,
                    });
                  }}
                >
                  <EditableControls />
                  <EditablePreview />
                  <Input as={EditableInput} />
                </Editable>
              </ItemContent>
              <OpenItemContent height={openRows[index] ? 13 : 0}>
                <ItemContent>
                  <Editable
                    marginTop={5}
                    display="flex"
                    flexDirection="row"
                    alignItems="center"
                    defaultValue={user.name}
                    fontSize="16px"
                    isPreviewFocusable={false}
                    border="2px solid #E7E7E7 "
                    borderRadius="10px"
                    height="45px"
                    onSubmit={async (newData) => {
                      await UpdateUser({
                        id: user.id,
                        name: newData,
                      });
                    }}
                  >
                    <EditableControls />
                    <EditablePreview />
                    <Input as={EditableInput} />
                  </Editable>
                  <Select marginTop={5} placeholder={user.type}>
                    {user.type === 'ADMIN' ? (
                      <option value="DEFAULT">DEFAULT</option>
                    ) : (
                      <option value="ADMIN">ADMIN</option>
                    )}
                  </Select>
                </ItemContent>
                <ButtonContent>
                  <Button
                    colorScheme="teal"
                    variant="outline"
                    leftIcon={<TfiReload />}
                    onClick={async () => {
                      await ResetPassword(user.id);
                    }}
                  >
                    Reset password
                  </Button>
                  <Button
                    onClick={async () => {
                      await DeleteUser(user.id);
                    }}
                    colorScheme="red"
                    leftIcon={<IoTrashOutline />}
                  >
                    Delete User
                  </Button>
                </ButtonContent>
              </OpenItemContent>
            </TableItem>
          );
        })}
      </TableContent>
    </Container>
  );
};

export default UserTableMobile;
