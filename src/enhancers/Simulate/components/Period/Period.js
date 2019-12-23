import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  Box,
  Range,
} from 'components';

import Label from '../Label';

const Wrapper = styled(Box)`
  flex: none;
  flex-direction: column;
`;

const Meta = styled.span`
  color: ${p => p.theme.colors.primary};
  font-size: 1.2em;
  font-weight: 300;
  margin: 16px 0 12px;
`;

const Period = ({ css, onChange, value }) => {
  const handleChange = v => onChange(parseInt(v, 0));

  return (
    <Wrapper css={css}>
      <Label>For</Label>
      <Meta>{`${value} month${value === 1 ? '' : 's'}`}</Meta>
      <Range min={1} max={240} onChange={handleChange} value={value} />
    </Wrapper>
  );
};

Period.defaultProps = {
  css: {},
  onChange: () => {},
  value: 60,
};

Period.propTypes = {
  css: PropTypes.shape({}),
  onChange: PropTypes.func,
  value: PropTypes.number,
};

export default Period;
