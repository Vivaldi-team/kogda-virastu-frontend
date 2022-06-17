import React, {
  FC, useEffect,
} from 'react';
import { nanoid } from '@reduxjs/toolkit';
import styled from 'styled-components';
import {
  AvatarIcon, RegularText,
} from '../ui-lib';
import InputCheckbox from '../ui-lib/inputs/input-checkbox-config';
import { useDispatch, useSelector } from '../services/hooks';
import { patchUserRolesThunk } from '../thunks';

const Title = styled.h2`
  width:100%;
  font-size: ${({ theme: { secondLevelHeading: { size } } }) => `${size}px`} ;
  font-family: ${({ theme: { secondLevelHeading: { family } } }) => family};
  line-height: ${({ theme: { secondLevelHeading: { height } } }) => `${height}px`} ;
  font-weight: ${({ theme: { secondLevelHeading: { weight } } }) => weight};
  color: ${({ theme: { primaryText } }) => primaryText};
  margin: 0;
  text-align: center;
`;

const ListContainer = styled.div`
  max-width: 720px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  @media screen and (max-width: 320px) {
    width: 320px;
  }
`;

const List = styled.ul`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  margin: 0;
  padding: 16px 0 0 0;
  align-items: center;
`;

const UserContainer = styled.div`
    width: 720px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-bottom: solid 1px #cccccc;
    padding-top: 8px;
    padding-bottom: 8px;
    word-break:break-all;
    text-overflow: ellipsis;
    @media screen and (max-width:719px) {
        width: 500px;
    }

     @media screen and (max-width: 320px) {
         width:320px;
         flex-direction: column;
     }

`;

const AdminPanel: FC = () => {
  const { users } = useSelector((state) => state.all);
  const dispatch = useDispatch();

  const onChange = (username: string, roles: string[]) => {
    dispatch(patchUserRolesThunk(username, roles));
  };

  return (
    <ListContainer>
      <Title>Список пользователей</Title>
      <List>
        {
          users?.map((user) => (
            <UserContainer key={nanoid(10)}>
              <AvatarIcon name={user.username ?? ''} image={user.image} size='small' distance={0} color='' />
              <RegularText size='medium' weight={400}>
                {user.username}
              </RegularText>
              <RegularText size='medium' weight={400}>
                {user.roles?.includes('admin') ? 'Администратор' : 'Пользователь'}
              </RegularText>
              <InputCheckbox
                checked={user.roles?.includes('admin') ? true : false}
                type='checkbox'
                name='Cделать администратором'
                labelText='Cделать администратором'
                onChange={() => onChange(user.username, user.roles?.includes('admin') ? ['user'] : ['user', 'admin'])} />
            </UserContainer>
          ))
        }
      </List>
    </ListContainer>
  );
};

export default AdminPanel;
