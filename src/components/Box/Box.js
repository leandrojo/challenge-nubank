import styled from 'styled-components';

export function styleProps(props) {
  return props.css;
}

export const Flex = styled.div`
  display: flex;
  flex-direction: row;
`;

const Box = styled.div`
  display: flex;
  flex: 1;

  ${styleProps};
`;

Box.defaultProps = {
  css: {},
};

export default Box;
