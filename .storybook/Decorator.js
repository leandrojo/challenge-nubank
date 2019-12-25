import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import theme from 'theme';
import { GlobalStyle } from 'App';

export function monospace(text) {
  return `<span style="font-family:monospace;background:#f7f7f7">${text}</span>`;
}

export const InfoPanel = ({ text }) => {
  if (text === false) return null;
  return (
    <div
      style={{
        backgroundColor: '#fff',
        fontColor: '#3c3f40',
        fontSize: 14,
        margin: '8px 0',
        padding: 16,
      }}
    >
      <span dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  );
};

InfoPanel.defaultProps = {
  text: false,
};

InfoPanel.propTypes = {
  text: PropTypes.string.isRequired,
};

export default function Decorator(text = false) {
  return story => (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <InfoPanel text={text} />
        <div style={{ padding: 16 }}>{story()}</div>
      </>
    </ThemeProvider>
  );
}
