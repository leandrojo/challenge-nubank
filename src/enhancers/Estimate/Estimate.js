import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Decimal from 'decimal.js';
import styled from 'styled-components';

import { toMoney } from 'common';
import { Pane } from 'components';

const Container = styled(Pane)`
  @media(max-width: 959px) {
    width: calc(100vw - 64px);
  }
`;

const HeadingImage = styled.img`
  height: 115px;
  margin: -56px 0 0;
  width: auto;
`;

const Description = styled.p`
  font-size: 0.9rem;
  line-height: 1.35rem;
  letter-spacing: -0.01em;
  margin: 2em 0;
`;

const Meta = styled.p`
  font-size: 0.9rem;
  line-height: 1.35rem;
  letter-spacing: -0.01em;
  margin: 0.65em 0;
`;

const Result = styled.span`
  color: ${p => p.theme.colors.primary};
  font-size: 3rem;
  font-weight: 300;

  @media(max-width: 959px) {
    font-size: 2rem;
  }
`;

const Estimate = ({ period, tax, ...rest }) => {
  const gross = new Decimal(rest.gross);

  return (
    <Container>
      <Pane.Header>
        <HeadingImage alt="relaxing" src="/assets/images/relaxing.png" />
      </Pane.Header>
      <Pane.Content>
        <Meta>{`after ${period} months you would have`}</Meta>
        <Result>
          {toMoney(gross.minus(tax).toFixed(2))}
        </Result>
        <Meta>{`(gross amount ${toMoney(gross.toFixed(2))})`}</Meta>
        <Description>
            This estimate does not constitute a guarantee of future earnings.
            It is only an estimate based on today’s Interbank Deposit rate for the
            entire period that your deposit would remain in your NuConta account,
            and considering no withdrawals.
        </Description>
      </Pane.Content>
    </Container>
  );
};

Estimate.propTypes = {
  period: PropTypes.number.isRequired,
  tax: PropTypes.number.isRequired,
};

function mapStateToProps(state) {
  const { input, output } = state.simulate.payload;

  return {
    ...output,
    period: input.period,
  };
}

export default connect(mapStateToProps)(Estimate);
