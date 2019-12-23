const fontFamily = 'Rubik, sans-serif';

const theme = {
  backgroundColor: '#f5f5f5',
  colors: {
    primary: '#7f39b7',
    grayExtraDark: '#555',
    grayDark: '#767676',
    gray: '#999',
    grayLight: '#ccc',
    grayExtraLight: '#FAFAFA',
  },
  fontFamily,
  fontSize: '1em',
  typography: {
    heading: {
      color: '#252226',
    },
    paragraph: {
      color: '#716d73',
    },
  },
};

theme.components = {
  input: {
    css: {
      backgroundColor: 'transparent',
      fontFamily,
      fontSize: '1.4em',
      fontWeight: 300,
    },
  },
  pane: {
    backgroundColor: '#fff',
  },
  range: {
    emptyColor: theme.colors.grayLight,
  },
};

export default theme;
