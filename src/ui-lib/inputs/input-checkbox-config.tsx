import styled from 'styled-components';
import React, {
  FC, ChangeEventHandler,
} from 'react';
import { LabelStyle } from './text-fields-styles';
import { TInputFieldType } from '../../types/styles.types';

const InputStyle = styled.input<{ error: boolean }>`
height: 20px;
width: 20px;
 `;

const ContainerInput = styled.div`
  max-width: 190px;
  margin: 0;
  padding: 0;
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
     @media screen and (max-width:768px) {
        font-size: 16px;
     }
 `;

interface IInputCheckboxInterface {
  type: TInputFieldType;
  name: string;
  checked: boolean;
  labelText: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

const InputCheckbox :FC<IInputCheckboxInterface> = ({
  type, name, onChange,
  checked = false, labelText = '',
}: IInputCheckboxInterface) => (
  <ContainerInput>
    <InputStyle
      checked={checked}
      error={false}
      type={type}
      name={name}
      onChange={onChange} />
    <LabelStyle>
      {labelText}
    </LabelStyle>
  </ContainerInput>
);

InputCheckbox.defaultProps = {
  onChange: undefined,
};

export default InputCheckbox;
