import React from 'react';
import { Button } from '../../src/components/Button';
import { Text } from '../../src/components/Text';
import { AerolabIcon } from '../../static/icons/aeropay-1.svg';

export default {
  title: 'Button',
  component: Button,
};

export const Default = () => (
  <Button variant="default" disabled={false}>
    <Text>
      Redeem for&nbsp;
      <AerolabIcon className="icon" />
      &nbsp;12.500
    </Text>
  </Button>
);
