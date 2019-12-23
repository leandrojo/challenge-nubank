import React from 'react';
import { Provider } from 'react-redux';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';

import configureStore from './store';
import theme from './theme';

import { Estimate, Simulate } from './enhancers';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Rubik";
    src: url("/assets/fonts/Rubik/Rubik-Light.ttf");
    font-weight: 300;
  }

  @font-face {
    font-family: "Rubik";
    src: url("/assets/fonts/Rubik/Rubik-Regular.ttf");
  }

  @font-face {
    font-family: "Rubik";
    src: url("/assets/fonts/Rubik/Rubik-Italic.ttf");
    font-style: italic;
  }

  @font-face {
    font-family: "Rubik";
    src: url("/assets/fonts/Rubik/Rubik-Bold.ttf");
    font-weight: bold;
  }

  @font-face {
    font-family: "Rubik";
    src: url("/assets/fonts/Rubik/Rubik-BoldItalic.ttf");
    font-style: italic;
    font-weight: bold;
  }

  html {
    marign: 0;
    padding: 0;
  }

  body {
    background-color: ${p => p.theme.backgroundColor};
    margin: 0;
    padding: 0;

    h1, h2, h3, h4, h5 {
      color: ${p => p.theme.typography.heading.color};
      font-family: ${p => p.theme.fontFamily};
      margin: 0;
    }

    a {
      font-family: ${p => p.theme.fontFamily};
    }

    b, i, p, span {
      color: ${p => p.theme.typography.paragraph.color};
      font-family: ${p => p.theme.fontFamily};
      margin: 0;
    }
  }

  * {
    box-sizing: border-box;
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  margin: 128px auto 64px;
  max-width: 1328px;
  position: relative;

  @media(max-width: 959px) {
    grid-template-columns: 1fr;
    margin: 0;
    width: 100%;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  position: relative;
  margin: 64px 32px;
`;

export const store = configureStore();

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Content>
          <Wrapper>
            <Simulate />
          </Wrapper>
          <Wrapper>
            <Estimate />
          </Wrapper>
        </Content>
      </>
    </ThemeProvider>
  </Provider>
);

export default App;
