import styled from 'styled-components';

const SvgContainer = styled.div`
  display: inline;
  > svg {
    fill: ${props => props.fill || props.theme && props.theme.text || 'black'};
    width: ${props => props.width || '24px'};
    transform: translate(0, 25%);
  }
`;

const Svg = ({
  Component,
  fill,
  width,
}) => (
  <SvgContainer fill={fill} width={width}>
    <Component />
  </SvgContainer>
);

export default Svg;
