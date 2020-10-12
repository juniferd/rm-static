import styled from 'styled-components';
import { collapsedSidebarWidth, expandedSidebarWidth, lgSpacing } from '../constants';

// TODO: media queries
const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: ${props => props.collapsedSidebar ? collapsedSidebarWidth : expandedSidebarWidth};
  padding: 0 ${lgSpacing};
`;

const Main = ({ collapsedSidebar, children }) => (
  <StyledMain collapsedSidebar={collapsedSidebar}>{children}</StyledMain>
);

export default Main;
