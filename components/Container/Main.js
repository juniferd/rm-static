import styled from 'styled-components';
import { mediaQuery } from '../mediaQueries';
import {
  collapsedSidebarWidth,
  expandedSidebarWidth,
  smSpacing,
  lgSpacing,
} from '../constants';

const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: ${props => props.collapsedSidebar ? collapsedSidebarWidth : expandedSidebarWidth};
  padding: ${smSpacing} ${lgSpacing};
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
