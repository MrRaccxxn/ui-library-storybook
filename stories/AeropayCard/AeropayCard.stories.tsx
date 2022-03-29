import React from 'react';
import { AeropayCard } from '../../src/components/AeropayCard';

export default {
  title: 'AeropayCard',
  component: AeropayCard,
};

export const Default = () => (
  <AeropayCard ownerName={'Pedro'} expirationDate={'07/23'}></AeropayCard>
);
