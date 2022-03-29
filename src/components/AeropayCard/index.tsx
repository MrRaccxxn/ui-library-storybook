import React from 'react';
import styled from 'styled-components';
import { theme } from '../../Theme';
import { Text } from '../Text';
const AerolabIcon = require('../../../static/icons/aeropay-2.svg') as string;
const Waves = require('../../../static/images/waves.svg') as string;

export interface IAeropayCard {
  ownerName: string;
  expirationDate: string;
}

const CardContainer = styled.div`
  width: 100%;
  margin: 0;
  background-color: ${theme.colors.neutral[900]};
  width: 264px;
  height: 148px;
  padding: 16px;
  color: ${theme.colors.neutral[0]};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 8px;

  p {
    margin: 0;
  }

  .row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .circleBox {
    background-color: ${theme.colors.neutral[0]};
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }

  .waves {
    content: '';
    width: 100%;
    height: 100%;
    background-size: cover;
    position: absolute;
    
  }
`;

export const AeropayCard = (props: IAeropayCard) => (
  <CardContainer>
    <div className="waves">
      <Waves />
    </div>

    <div className="row">
      <Text>AeroCard</Text>
      <div className="circleBox">
        <AerolabIcon />
      </div>
    </div>
    <div className="row">
      <Text>{props.ownerName}</Text>
      <Text>{props.expirationDate}</Text>
    </div>
  </CardContainer>
);
