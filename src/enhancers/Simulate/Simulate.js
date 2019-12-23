import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as simulate from 'store/simulate/simulate.actions';

import {
  Form,
} from 'components';

import { FirstDeposit, Period } from './components';

const Simulate = ({ onChange, ...state }) => {
  useEffect(() => {
    onChange({ ...state });
  }, []);

  return (
    <Form autoComplete="off" css={{ justifyContent: 'flex-end' }}>
      <FirstDeposit
        css={{ marginBottom: '28px' }}
        onChange={initialAmount => onChange({ ...state, initialAmount })}
        value={state.initialAmount}
      />
      <Period
        css={{ marginBottom: '24px' }}
        onChange={period => onChange({ ...state, period })}
        value={state.period}
      />
    </Form>
  );
};

Simulate.defaultProps = {
  onChange: () => {},
};

Simulate.propTypes = {
  onChange: PropTypes.func,
};

function mapStateToProps(state) {
  const { input } = state.simulate.payload;

  return {
    ...input,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onChange: (state) => {
      dispatch(simulate.input(state));
    },
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Simulate);
