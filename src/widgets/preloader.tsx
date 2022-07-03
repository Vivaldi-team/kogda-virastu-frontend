import React, { FC } from 'react';
import styled from 'styled-components';
import { PreloaderIcon } from '../ui-lib';

const PreloaderContainer = styled.div`
        display: flex;
        align-items: start;
        width: 32px;
        height: 32px;
        animation: 1s rotate360 infinite linear;
        @keyframes rotate360 {
          to { transform: rotate(360deg); }
        }
    `;
const Preloader: FC<{
  color: string
}> = ({ color }) => (
  <PreloaderContainer>
    <PreloaderIcon color={color} />
  </PreloaderContainer>
);

export default Preloader;
