import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  Box, Flex, Input, NumberControl,
} from 'components';

import Label from '../Label';

const Wrapper = styled(Box)`
  flex: none;
  flex-direction: column;
`;

const moneyFormatter = {
  precision: 0,
  separator: ',',
  delimiter: '.',
  unit: 'R$',
};

const FirstDeposit = ({ css, onChange, value }) => {
  const [disable, setDisable] = useState([false, false]);

  const handleChange = (v) => {
    onChange((typeof v !== 'number' || Number.isNaN(v)) ? 0 : v);
  };

  const handleClickDecrement = () => {
    onChange((() => {
      if (value >= 2000) return value - 1000;
      if (value >= 1000) return value - 500;

      setDisable([true, false]);

      return 500;
    })());
  };

  const handleClickIncrement = () => {
    onChange((() => {
      if (value >= 1000) return value + 1000;
      return value + 500;
    })());

    setDisable([false, false]);
  };

  useEffect(() => {
    if (Number.isNaN(value) || value <= 500) {
      setDisable([true, false]);
      return;
    }

    setDisable([false, false]);
  }, [value]);

  return (
    <Wrapper css={css}>
      <Label>First deposit</Label>
      <Flex>
        <Box>
          <Input
            isMoney
            moneyFormatter={moneyFormatter}
            name="firstDeposit"
            onChange={handleChange}
            value={value}
          />
        </Box>
        <Box css={{ flex: 'inherit', width: '148px' }}>
          <NumberControl
            disabled={disable}
            onClickDecrement={handleClickDecrement}
            onClickIncrement={handleClickIncrement}
          />
        </Box>
      </Flex>
    </Wrapper>
  );
};

FirstDeposit.defaultProps = {
  css: {},
  onChange: () => {},
  value: 1000,
};

FirstDeposit.propTypes = {
  css: PropTypes.shape({}),
  onChange: PropTypes.func,
  value: PropTypes.number,
};

export default FirstDeposit;
