import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { greySecondary, mainBgColor, popupMessage } from '../../constants/colors';

type TInputFieldsetProps = {
  rowGap: number;
};

export const FormContainer = styled.div`
  padding: 16px 0 0 0;
  max-width: 540px;
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormTitle = styled.h2`
  margin: 0 0 40px 0;
  color: ${({ theme }) => theme.primaryText};
  font-size: ${({ theme }) => theme.secondLevelHeading.size}px;
  font-family: ${({ theme }) => theme.secondLevelHeading.family};
  font-weight: ${({ theme }) => theme.secondLevelHeading.weight};
  line-height: ${({ theme }) => theme.secondLevelHeading.height}px;

  @media(max-width: 768px) {
    font-size: ${({ theme }) => theme.secondLevelHeadingMobile.size}px;
    font-family: ${({ theme }) => theme.secondLevelHeadingMobile.family};
    font-weight: ${({ theme }) => theme.secondLevelHeadingMobile.weight};
    line-height: ${({ theme }) => theme.secondLevelHeadingMobile.height}px;
  }
`;

export const FormLoginLink = styled(Link)`
  margin: 0 0 24px 0;
  text-decoration: none;
  color: ${({ theme }) => theme.markedText};
  font-size: ${({ theme }) => theme.text18Sans.size}px;
  font-family: ${({ theme }) => theme.text18Sans.family};
  font-weight: ${({ theme }) => theme.text18Sans.weight};
  line-height: ${({ theme }) => theme.text18Sans.height}px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 98%;
`;

export const InputFieldset = styled.fieldset<TInputFieldsetProps>`
  padding: 0;
  margin: 0 0 24px 0;
  display: flex;
  flex-direction: column;
  row-gap: ${(props) => props.rowGap}px;
  box-sizing: border-box;
  border: none;
`;

export const ButtonContainer = styled.div`
  align-self: flex-end;
`;
export const ContainerInvite = styled.div`
  display: grid;
  gap: 8px;
  width: 100%;
  grid-template-columns: 240px 290px;
  align-items: center;
  position: relative;
  
  @media(max-width: 600px) {
    grid-template-columns: 240px;
    grid-template-rows: 1fr 1fr;
  }
`;

export const MessageCopySuccess = styled.span`
  position: absolute;
  top: -30px;
  left: 30%;
  color: ${mainBgColor};
  border-radius: 32px;
  padding: 4px 16px;
  background-color: ${popupMessage};
  font-size: ${({ theme }) => theme.text16Sans.size}px;
  font-family: ${({ theme }) => theme.text16Sans.family};
  font-weight: ${({ theme }) => theme.text16Sans.weight};
  line-height: ${({ theme }) => theme.text16Sans.height}px;
`;

export const ButtonsWrapper = styled.span`
  display: flex;
  flex-direction: column;
  gap: 24px
`;

export const InviteCode = styled.span`
  font-size: ${({ theme }) => theme.text18Sans.size}px;
  font-family: ${({ theme }) => theme.text18Sans.family};
  font-weight: ${({ theme }) => theme.text18Sans.weight};
  line-height: ${({ theme }) => theme.text18Sans.height}px;
  color: ${greySecondary};
  word-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-decoration: underline;
  text-decoration-style: dashed;
  
}
 
`;
export const LinkStyle = styled(Link)`
    color: ${((props) => props.theme.markedText)};
    text-decoration-style: dashed;
    @media(max-width: 600px) {
    grid-column: span 2;

  }
`;
