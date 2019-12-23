import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  height: 50px;
`;

const Input = styled.input.attrs(() => ({ type: 'range' }))`
  appearance: none;
  background-color: transparent;
  box-sizing: content-box;
  height: 14px;
  margin: 18px 0;
  outline: none;
  padding: 0;
  width: 100%;

  &:focus {
    outline: none;
  }

  /* Chrome Shadow Elements */

  &::-webkit-slider-runnable-track {
    animate: 0.2s;
    background: ${p => p.theme.components.range.emptyColor};
    border-radius: 20px;
    border: none;
    cursor: pointer;
    height: 4px;
    transition: .2s ease-in-out;
    width: 100%;
  }

  &::-webkit-slider-thumb {
    appearance: none;
    background: ${p => p.theme.colors.primary};
    border-radius: 50px;
    cursor: pointer;
    height: 14px;
    margin: -5px 0 0 0;
    transition: .2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    width: 14px;
  }

  &:focus::-webkit-slider-thumb {
    transition: .2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    transform: scale(1.6);
  }

  /* Firefox Shadow Elements */

  &::-moz-range-track {
    animate: 0.2s;
    background: ${p => p.theme.components.range.emptyColor};
    border-radius: 20px;
    border: none;
    cursor: pointer;
    height: 4px;
    transition: .2s ease-in-out;
    width: 100%;
  }

  &::-moz-range-thumb {
    appearance: none;
    background: ${p => p.theme.colors.primary};
    border: none;
    border-radius: 50px;
    cursor: pointer;
    height: 14px;
    margin-top: -5px;
    transition: .2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    transform: translate3d(0, 0, 10px);
    width: 14px;
  }

  &:focus::-moz-range-thumb {
    transition: .2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    transform: scale(1.6);
  }

  &::-moz-focus-outer {
    border: 0;
  }
`;

const Fill = styled.div`
  background-color: ${p => p.theme.colors.primary};
  border-radius: 20px 0 0 20px;
  height: 4px;
  margin: 0;
  padding: 0;
  pointer-events: none;
  position: absolute;
  top: calc(50% - 2px);

  -moz-top: calc(50% - 2px);
`;

export const Range = ({
  max,
  min,
  name,
  onChange,
  value,
}) => {
  const handleChange = (ev) => {
    const newValue = ev.target.value;
    onChange(newValue, name);
  };

  const percentage = ((value - min) * 100) / (max - min);

  return (
    <Wrapper>
      <Input
        max={max}
        min={min}
        name={name}
        onChange={handleChange}
        value={value}
      />
      <Fill style={{ width: `${percentage}%` }} />
    </Wrapper>
  );
};

Range.defaultProps = {
  max: 1,
  min: 0,
  name: '',
  onChange: () => {},
  value: 0,
};

Range.propTypes = {
  max: PropTypes.number,
  min: PropTypes.number,
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Range;
