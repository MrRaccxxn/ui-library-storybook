import React from 'react';
import { Text } from '../Text';
import {
  BottomCard,
  BoxIcon,
  IntroCard,
  IntroCardBackground,
  TitleAndIcon,
  TopCard,
} from './CardStyled';

export interface IWalkthroughCard {
  imageSrc: string;
  title: string;
  description: string;
  backgroundColor: string;
}

export const WalkthroughCard = (props: IWalkthroughCard) => {
  return (
    <IntroCardBackground>
      <IntroCard>
        <TopCard backgroundColor={props.backgroundColor}>
          <img alt={props.title} src={props.imageSrc}></img>
        </TopCard>
        <BottomCard>
          <TitleAndIcon>
            <BoxIcon></BoxIcon>
            <Text variant="h3" gradientColor="linear-gradient(102.47deg, #176FEB -5.34%, #FF80FF 106.58%)">{props.title}</Text>
          </TitleAndIcon>

          <Text>{props.description}</Text>
        </BottomCard>
      </IntroCard>
    </IntroCardBackground>
  );
};
