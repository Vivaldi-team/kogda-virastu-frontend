import React, { FC } from 'react';
import styled from 'styled-components';
import {
  AvatarIcon, FollowButton, HeaderTwoText, UnfollowButton, RegularText,
} from '../ui-lib';
import { TAvatarSizes } from '../types/styles.types';
import { useDispatch } from '../services/hooks';
import {
  unfollowProfileThunk,
  followProfileThunk,
} from '../thunks';

type TProfileWidget = {
  userName: string | undefined,
  isFollow: boolean,
  userImage: string | undefined,
  userBio: string | undefined,

  isUser: boolean,
  size: TAvatarSizes,
  distance: number,
  color: string,
};

const ProfileContainer = styled.div`
    min-width: 304px;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:24px;
    margin-top: 56px;
    margin-bottom: 48px;
    word-break:break-all;
    text-overflow: ellipsis;
    @media screen and (max-width:768px) {
        width:271px;
        margin-top: 48px;
    }

     @media screen and (max-width: 320px) {
         width:280px;
         margin-top:40px;
     }

`;

const ProfileWidgetButton: FC<{
  isUser: boolean,
  isFollow: boolean,

}> = ({
  isUser,
  isFollow,

}) => {
  const dispatch = useDispatch();

  if (isUser) {
    return null;
  }

  return (
    isFollow ? <UnfollowButton onClick={() => dispatch(unfollowProfileThunk())} />
      : <FollowButton onClick={() => dispatch(followProfileThunk())} />
  );
};

const ProfileWidget: FC<TProfileWidget> = ({
  userName,
  userBio,
  isFollow,
  userImage,
  isUser,
  size,
  distance,
  color,
}) => (
  <ProfileContainer>
    <AvatarIcon name={userName ?? ''} image={userImage} size={size} distance={distance} color={color} />
    <HeaderTwoText>{userName}</HeaderTwoText>
    <RegularText size='large' weight={400}>
      {userBio}
    </RegularText>
    <ProfileWidgetButton isUser={isUser} isFollow={isFollow} />
  </ProfileContainer>

);

export default ProfileWidget;
