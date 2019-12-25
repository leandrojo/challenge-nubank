/* eslint-disable react/prop-types */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Icon = styled.button.attrs(() => ({ type: 'button' }))`
  background-color: transparent;
  border: none;
  cursor: pointer;
  flex: 1;
  margin: 5px 0;
  /* outline: none; */
  user-select: none;

  &:focus {
    background-color: rgba(0, 0, 0, .2),
    border-radius: 20px;
  }

  svg {
    width: 56px;
  }

  svg path,
  svg polygon,
  svg rect {
    fill: ${({ theme, disabled }) => (disabled ? theme.colors.grayLight : theme.colors.primary)};
    stroke-width: 0.05;
  }
`;

Icon.defaultProps = {
  onClick: () => {},
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 148px;
`;

const Minus = ({ disabled, onClick }) => (
  <Icon disabled={disabled} role="button" onClick={onClick}>
    <svg viewBox="0 0 20 20">
      <path fill="none" d="M10,1.344c-4.781,0-8.656,3.875-8.656,8.656c0,4.781,3.875,8.656,8.656,8.656c4.781,0,8.656-3.875,8.656-8.656C18.656,5.219,14.781,1.344,10,1.344z M10,17.903c-4.365,0-7.904-3.538-7.904-7.903S5.635,2.096,10,2.096S17.903,5.635,17.903,10S14.365,17.903,10,17.903z M13.388,9.624H6.613c-0.208,0-0.376,0.168-0.376,0.376s0.168,0.376,0.376,0.376h6.775c0.207,0,0.377-0.168,0.377-0.376S13.595,9.624,13.388,9.624z" />
    </svg>
  </Icon>
);

const Plus = ({ disabled, onClick }) => (
  <Icon disabled={disabled} role="button" onClick={onClick}>
    <svg viewBox="0 0 20 20">
      <path fill="none" d="M13.388,9.624h-3.011v-3.01c0-0.208-0.168-0.377-0.376-0.377S9.624,6.405,9.624,6.613v3.01H6.613c-0.208,0-0.376,0.168-0.376,0.376s0.168,0.376,0.376,0.376h3.011v3.01c0,0.208,0.168,0.378,0.376,0.378s0.376-0.17,0.376-0.378v-3.01h3.011c0.207,0,0.377-0.168,0.377-0.376S13.595,9.624,13.388,9.624z M10,1.344c-4.781,0-8.656,3.875-8.656,8.656c0,4.781,3.875,8.656,8.656,8.656c4.781,0,8.656-3.875,8.656-8.656C18.656,5.219,14.781,1.344,10,1.344z M10,17.903c-4.365,0-7.904-3.538-7.904-7.903S5.635,2.096,10,2.096S17.903,5.635,17.903,10S14.365,17.903,10,17.903z" />
    </svg>
  </Icon>
);

// TODO: Create Context API for external state, but imperative.

const NumberControl = ({ disabled, onClickDecrement, onClickIncrement }) => (
  <Wrapper>
    <Minus
      disabled={disabled[0]}
      onClick={onClickDecrement}
    />
    <Plus
      disabled={disabled[1]}
      onClick={onClickIncrement}
    />
  </Wrapper>
);

NumberControl.defaultProps = {
  disabled: [false, false],
  onClickDecrement: () => {},
  onClickIncrement: () => {},
};

NumberControl.propTypes = {
  disabled: PropTypes.arrayOf(PropTypes.bool),
  onClickDecrement: PropTypes.func,
  onClickIncrement: PropTypes.func,
};

export default NumberControl;
