import React, { FC, MouseEventHandler, MouseEvent } from 'react';
import styled, { useTheme } from 'styled-components';
import { CrossIcon } from '../ui-lib';
import { getPropOnCondition } from '../services/helpers';

interface ITagProps extends ITagButtonProps {
  tag: string,
  handleClick?: (e: MouseEvent<HTMLButtonElement>, tag: string) => void,
  deactivateTag?: MouseEventHandler<SVGSVGElement>,
}

interface ITagButtonProps {
  isActive?: boolean;
  isFollowing?: boolean;
  isTagInSetting?: boolean;
  pointer?: boolean;
}

const Button = styled.button<ITagButtonProps>`

    padding: 0;
    border: none;
    font-family: ${({ theme }) => theme.text18Sans.family};
    font-weight: ${({ theme }) => theme.text18Sans.weight};
    font-size: ${({ theme }) => theme.text18Sans.size}px;
    line-height: ${({ theme }) => theme.text18Sans.height}px;
    cursor: ${({ pointer }) => getPropOnCondition(pointer, 'inherit', 'pointer')};
    display: flex;
    align-items: center;    
    background-color: transparent;
    color: ${({ theme, isActive, isFollowing }) => getPropOnCondition(!isActive, theme.button.blue.default, getPropOnCondition(!isFollowing, theme.button.red.default, theme.secondaryText))};

    :active {
      outline: none;
    }
  `;

const Tag: FC<ITagProps> = ({
  tag, handleClick = () => {}, isActive, isFollowing, deactivateTag, pointer, isTagInSetting,
}) => {
  const theme = useTheme();

  return (
    <Button
      isActive={isActive}
      isFollowing={isFollowing}
      isTagInSetting={isTagInSetting}
      pointer={pointer}
      type='button'
      key={tag}
      onClick={(e) => handleClick(e, tag)}>
      #
      {tag}
      {' '}
      {isActive && deactivateTag && <CrossIcon color={theme.markedText} onClick={deactivateTag} />}
      {isTagInSetting && deactivateTag
      && <CrossIcon color={theme.secondaryText} onClick={deactivateTag} />}
    </Button>
  );
};

Tag.defaultProps = {
  handleClick: undefined,
  deactivateTag: undefined,
  pointer: false,
  isActive: false,
  isFollowing: false,
  isTagInSetting: false,
};

export default Tag;
