/* eslint-disable import/no-extraneous-dependencies */

import React, { useState } from 'react';

import Range from './Range';

export default {
  title: 'components/Range',
};

export const shortInterval = () => {
  const [value, setValue] = useState(0);

  return (
    <>
      <Range
        min={1}
        max={5}
        onChange={setValue}
        value={value}
      />
      <p>{`Min: 1 | Max: 5 | Value: ${value}`}</p>
    </>
  );
};

shortInterval.story = {
  name: 'short interval',
};

export const largeInterval = () => {
  const [value, setValue] = useState(0);

  return (
    <>
      <Range
        min={1}
        max={1000}
        onChange={setValue}
        value={value}
      />
      <p>{`Min: 1 | Max: 1000 | Value: ${value}`}</p>
    </>
  );
};

largeInterval.story = {
  name: 'large interval',
};

export const initialValue = () => {
  const [value, setValue] = useState(10);

  return (
    <>
      <Range
        min={1}
        max={20}
        onChange={setValue}
        value={value}
      />
      <p>{`Min: 1 | Max: 20 | Initial Value: 10 | Value: ${value}`}</p>
    </>
  );
};

initialValue.story = {
  name: 'with initial value',
};
