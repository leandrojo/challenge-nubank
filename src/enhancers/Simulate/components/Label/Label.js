import styled from 'styled-components';

const Label = styled.label`
  color: ${p => p.theme.colors.grayDark};
  display: block;
  font-family: ${p => p.theme.fontFamily};
  font-size: 1.2rem;
  font-weight: 300;
  pointer-events: none;
`;

export default Label;
