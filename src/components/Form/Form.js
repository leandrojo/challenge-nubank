import styled from 'styled-components';

export function styleProps(props) {
  return props.css;
}

const Form = styled.form`
  display: flex;
  flex: 1;
  flex-direction: column;

  ${styleProps};
`;

Form.defaultProps = {
  css: {},
};

export default Form;
