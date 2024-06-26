/* eslint-disable arrow-body-style */
/* eslint-disable react/no-unstable-nested-components */
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
import { IUser } from '@modules/users/interfaces';
import { useUser } from '@modules/users/hooks/Users';
import { usePassword } from '@modules/users/hooks/Password';
import {
  Container,
  TableHeader,
  HeaderItem,
  TableBody,
  TableRow,
  TableItem,
} from './styles';

interface IUserTableProps {
  data: IUser[];
}

const UserTable: React.FC<IUserTableProps> = ({ data }) => {
  const { DeleteUser, UpdateUser } = useUser();
  const { ResetPassword } = usePassword();

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
        {data.map((user) => {
          return (
            <TableRow key={user.id}>
              <TableItem width={30}>
                <Editable
                  display="flex"
                  flexDirection="row"
                  alignItems="center"
                  defaultValue={user.hcm_code}
                  fontSize="16px"
                  isPreviewFocusable={false}
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
              </TableItem>
              <TableItem width={30}>
                <Editable
                  display="flex"
                  flexDirection="row"
                  alignItems="center"
                  defaultValue={user.name}
                  fontSize="16px"
                  isPreviewFocusable={false}
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
              </TableItem>
              <TableItem width={25}>
                <Select
                  width={130}
                  placeholder={user.type}
                  onChange={async (value) => {
                    await UpdateUser({
                      id: user.id,
                      type: value.target.value,
                    });
                    window.location.reload();
                  }}
                >
                  {user.type === 'ADMIN' ? (
                    <option value="DEFAULT">DEFAULT</option>
                  ) : (
                    <option value="ADMIN">ADMIN</option>
                  )}
                </Select>
              </TableItem>
              <TableItem width={15}>
                <button
                  onClick={async () => {
                    await ResetPassword(user.id);
                  }}
                >
                  <TfiReload size={30} color={themeDefaults.colors.primary} />
                </button>
              </TableItem>
              <TableItem width={5}>
                <button
                  onClick={async () => {
                    await DeleteUser(user.id);
                  }}
                >
                  <IoTrashOutline
                    size={30}
                    color={themeDefaults.colors.primary}
                  />
                </button>
              </TableItem>
            </TableRow>
          );
        })}
      </TableBody>
    </Container>
  );
};

export default UserTable;
