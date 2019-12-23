import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const StyledPane = styled.div`
  ${p => p.theme.components.pane}

  display: flex;
  flex-direction: column;
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  width: 100%;

  ${({ elevation }) => {
    switch (elevation) {
      case 2:
        return css`
          box-shadow:
            0 3px 6px rgba(0,0,0,0.16),
            0 3px 6px rgba(0,0,0,0.23);
        `;
      case 3:
        return css`
          box-shadow:
            0 10px 20px rgba(0,0,0,0.19),
            0 6px 6px rgba(0,0,0,0.23);
        `;
      case 4:
        return css`
          box-shadow:
            0 14px 28px rgba(0,0,0,0.25),
            0 10px 10px rgba(0,0,0,0.22);
        `;
      case 5:
        return css`
          box-shadow:
            0 19px 38px rgba(0,0,0,0.30),
            0 15px 12px rgba(0,0,0,0.22);
        `;
      case 1:
      default: {
        return css`
          box-shadow:
            0 1px 3px rgba(0,0,0,0.12),
            0 1px 2px rgba(0,0,0,0.24);
        `;
      }
    }
  }}
`;

const StyledHeader = styled.header`
  display: flex;
  flex: 1;
  justify-content: center;
  
`;

const StyledContent = styled.div`
  padding: 30px;
`;

const Pane = ({ children, elevation, ...props }) => (
  <StyledPane {...props} elevation={elevation}>
    {children}
  </StyledPane>
);

Pane.Content = StyledContent;
Pane.Header = StyledHeader;

Pane.defaultProps = {
  children: null,
  elevation: 1,
};

Pane.propTypes = {
  children: PropTypes.node,
  elevation: PropTypes.number,
};

export default Pane;
