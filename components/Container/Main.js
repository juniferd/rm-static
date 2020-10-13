import styled from 'styled-components';
import { mediaQuery } from '../mediaQueries';
import {
  collapsedSidebarWidth,
  expandedSidebarWidth,
  lgSpacing,
} from '../constants';

const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: ${props => props.collapsedSidebar ? collapsedSidebarWidth : expandedSidebarWidth};
  padding: 0 ${lgSpacing};
  ${mediaQuery.mobile(`
    margin-left: ${collapsedSidebarWidth};    
  `)}
  ${mediaQuery.tablet(`
    margin-left: ${collapsedSidebarWidth};    
  `)}
`;

const Main = ({ collapsedSidebar, children }) => (
  <StyledMain collapsedSidebar={collapsedSidebar}>{children}</StyledMain>
);

export default Main;
