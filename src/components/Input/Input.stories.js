/* eslint-disable import/no-extraneous-dependencies */

import React, { useState } from 'react';

import Input from './Input';

export default {
  title: 'components/Input',
};

export const custom = () => <Input placeholder="Custom Placeholder" />;

custom.story = {
  name: 'default custom',
};

export const money = () => {
  const [value, setValue] = useState('1000.00');
  return <Input isMoney onChange={setValue} value={value} />;
};

money.story = {
  name: 'money',
};

const moneyFormatter = {
  precision: 2,
  separator: ',',
  delimiter: '.',
  unit: 'R$',
};

export const BRL = () => {
  const [value, setValue] = useState('1000,00');
  return <Input isMoney onChange={setValue} value={value} moneyFormatter={moneyFormatter} />;
};

BRL.story = {
  name: 'money formatter',
};
