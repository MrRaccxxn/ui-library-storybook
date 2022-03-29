import React from 'react';
import { WalkthroughCard } from '../../src/components/WalkthroughCard';
const Image = require('../../static/illustrations/walkthroug-3-responsive.png') as string;

export default {
  title: 'WalkthroughCard',
  component: WalkthroughCard,
};

export const Default = () => (
  <WalkthroughCard
    backgroundColor="linear-gradient(to bottom right, #7296EB, #EAC0E9)"
    imageSrc={Image}
    title={'TITLE'}
    description={'Short two liner sentence. Walkthrough card.'}
  ></WalkthroughCard>
);
