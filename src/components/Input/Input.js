import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Masker from 'vanilla-masker';

const StyledInput = styled.input`
  appearance: none;
  border: none;
  box-shadow: none;
  width: 100%;

  ${p => p.theme.components.input.css};

  &:focus {
    border-color: ${props => props.theme.colors.secondary};
    outline: none;
  }
`;

const ref = React.createRef();

const Input = ({
  errors,
  id,
  isMoney,
  label,
  moneyFormatter,
  name,
  onChange,
  pattern,
  value,
  ...rest
}) => {
  const [state, setState] = useState({
    value: '',
  });

  function unformat(v) {
    if (isMoney) {
      return parseFloat(Masker.toNumber(v));
    }

    return v;
  }

  function getValue() {
    return state.value;
  }

  useEffect(() => {
    function format(unformatted) {
      if (isMoney) {
        return Masker.toMoney(Masker.toNumber(unformatted), moneyFormatter);
      }

      if (typeof unformatted === 'string' && pattern !== '') {
        return Masker.toPattern(unformatted, pattern);
      }

      return unformatted;
    }

    setState({
      value: format(value),
    });
  }, [isMoney, moneyFormatter, pattern, value]);

  const handleBlur = () => {};

  const handleFocus = () => {};

  const handleChange = (ev) => {
    onChange(unformat(ev.target.value), name);
  };

  return (
    <StyledInput
      id={id}
      name={name}
      onBlur={handleBlur}
      onChange={handleChange}
      onFocus={handleFocus}
      pattern="\d*"
      ref={ref}
      type="text"
      value={getValue()}
      {...rest}
    />
  );
};

const moneyFormatter = {
  precision: 2,
  separator: '.',
  delimiter: ',',
  unit: 'US$',
};

Input.defaultProps = {
  errors: [],
  id: '',
  isMoney: false,
  label: '',
  moneyFormatter,
  onChange: () => {},
  onError: () => {},
  pattern: '',
  rules: [],
};

const RulePropTypes = PropTypes.oneOfType([PropTypes.string, PropTypes.func]);
const MoneyFormatterPropTypes = PropTypes.shape({
  precision: PropTypes.number,
  separator: PropTypes.string,
  delimiter: PropTypes.string,
  unit: PropTypes.string,
});

Input.propTypes = {
  errors: PropTypes.arrayOf(PropTypes.string),
  id: PropTypes.string,
  isMoney: PropTypes.bool,
  label: PropTypes.string,
  pattern: PropTypes.string,
  moneyFormatter: MoneyFormatterPropTypes,
  name: PropTypes.string.isRequired,
  onError: PropTypes.func,
  onChange: PropTypes.func,
  rules: PropTypes.arrayOf(RulePropTypes),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default Input;
