import styled from 'styled-components';
import { lgSpacing } from '../constants';
export { default as Main } from './Main';

const StyledContainer = styled.div`
  margin: 0 ${lgSpacing};
`;

const Container = ({ children }) => (
  <StyledContainer>{children}</StyledContainer>  
);

export default Container;
