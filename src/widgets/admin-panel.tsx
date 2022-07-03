import React, {
  FC,
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
  @media screen and (max-width:719px) {
    width: 500px;
  }
  @media screen and (max-width: 420px) {
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
    justify-content: space-between;
    border-bottom: solid 1px #cccccc;
    padding-top: 8px;
    padding-bottom: 8px;
    @media screen and (max-width:719px) {
        width: 500px;
    }

     @media screen and (max-width: 420px) {
         width:320px;
         flex-direction: column;
     }

`;

const User = styled.div`
    display: flex;
    flex-direction: row;
`;

const AdminPanel: FC = () => {
  const { users } = useSelector((state) => state.all);
  const dispatch = useDispatch();

  const onChange = (username: string, roles: string[] | undefined) => {
    let rolesValue = [];
    if (roles && roles.includes('admin')) {
      rolesValue = ['user'];
    } else {
      rolesValue = ['user', 'admin'];
    }
    dispatch(patchUserRolesThunk(username, rolesValue));
  };

  return (
    <ListContainer>
      <Title>Список пользователей</Title>
      <List>
        {
          users?.map((user) => (
            <UserContainer key={nanoid(10)}>
              <User>
                <AvatarIcon name={user.username ?? ''} image={user.image} size='small' distance={0} color='' />
                <RegularText size='medium' weight={400}>
                  {user.username}
                </RegularText>
              </User>
              <RegularText size='medium' weight={400}>
                {user.roles?.includes('admin') ? 'Админ' : 'Пользователь'}
              </RegularText>
              <InputCheckbox
                checked={user.roles?.includes('admin')}
                type='checkbox'
                name='Cделать админом'
                labelText='Cделать админом'
                onChange={() => onChange(user.username, user.roles)} />
            </UserContainer>
          ))
        }
      </List>
    </ListContainer>
  );
};

export default AdminPanel;
