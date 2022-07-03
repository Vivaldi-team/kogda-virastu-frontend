/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { FC } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from '../services/hooks';
import Tag from './tag';
import { unfollowTagThunk } from '../thunks';

const FollowTagsContainer = styled.div`
  margin-bottom: 56px;
  position: relative;
  z-index: 10;

  @media screen and (max-width:768px) {
    margin-bottom: 40px;
  }
`;

const TagList = styled.div`
  max-width: 540px;
  display: flex;
  flex-wrap: wrap;
  column-gap: 24px;
`;

const FollowTags: FC = () => {
  const dispatch = useDispatch();
  const { followTags } = useSelector((state) => state.view);

  const deactivateTag = (e: React.MouseEvent, tag: string) => {
    e.stopPropagation();
    dispatch(unfollowTagThunk(tag));
  };

  if (followTags) {
    return (
      <FollowTagsContainer>
        <TagList>
          {
            followTags?.map((tag) => (
              <Tag
                key={tag}
                tag={tag}
                pointer
                isTagInSetting
                deactivateTag={(e) => deactivateTag(e, tag)} />
            ))
          }
        </TagList>
      </FollowTagsContainer>

    );
  }
  return (
    <div>Loading Tags...</div>
  );
};
export default FollowTags;
