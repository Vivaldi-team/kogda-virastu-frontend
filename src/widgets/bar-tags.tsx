import React, { FC } from 'react';
import styled from 'styled-components';
import { nanoid } from '@reduxjs/toolkit';
import { useSelector } from '../services/hooks';

import Tag from './tag';

type TBarTags = {
  tagList: string[],
  handleClick?: (ev:React.MouseEvent, tag: string) => void,
};

type TLists = {
  isHasImage?: boolean,
  rowReverse?: boolean,
};

const Lists = styled.ul<TLists>`
    display: flex;
    box-sizing:border-box;
    flex-wrap:wrap;
    //flex-direction: ${({ rowReverse }) => rowReverse && 'row-reverse'};
    gap: 4px 24px;
    white-space: pre-line;
    padding:0;
    // @media screen and (max-width:768px) {
    //     ${({ isHasImage }) => isHasImage && 'margin-left: -60px'}
    //  }
     @media screen and (max-width:600px) {
        margin:0;
        flex-direction: row;
     }
`;

Lists.defaultProps = {
  isHasImage: false,
  rowReverse: false,
};

const List = styled.li`
    list-style-type: none;
`;

const BarTags: FC<TBarTags & TLists> = ({
  tagList,
  handleClick = () => {},
  isHasImage = false,
  rowReverse = false,
}) => {
  const { selectedTags, followTags } = useSelector((state) => state.view);

  return (
    <Lists isHasImage={isHasImage} rowReverse={rowReverse}>
      {tagList.map((tag) => (
        <List key={nanoid(10)}>
          <Tag
            tag={tag}
            isActive={!!selectedTags?.includes(tag)}
            isFollowing={!!followTags?.includes(tag)}
            handleClick={handleClick} />
        </List>
      ))}
    </Lists>
  );
};

BarTags.defaultProps = {
  isHasImage: false,
  rowReverse: false,
  handleClick: undefined,
};

export default BarTags;
