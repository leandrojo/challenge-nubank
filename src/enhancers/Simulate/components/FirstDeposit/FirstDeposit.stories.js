/* eslint-disable import/no-extraneous-dependencies */

import React, { useState } from 'react';

import FirstDeposit from './FirstDeposit';

export default {
  title: 'FirstDeposit',
};

export const common = () => {
  const [value, onChange] = useState(0);
  return (
    <FirstDeposit
      css={`
        background: #fff;
        display: block;
        padding: 20px;
  
        p {
          margin: 10px 0;
        }
      `}
      onChange={onChange}
      value={value}
    />
  );
};

common.story = {
  name: 'default',
};

export const initialValue = () => {
  const [value, onChange] = useState(5000);
  return (
    <FirstDeposit
      css={`
        background: #fff;
        display: block;
        padding: 20px;
  
        p {
          margin: 10px 0;
        }
      `}
      onChange={onChange}
      value={value}
    />
  );
};

initialValue.story = {
  name: 'with initial value',
};
