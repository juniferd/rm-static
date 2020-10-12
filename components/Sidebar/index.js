import styled from 'styled-components';
import {
  collapsedSidebarWidth,
  expandedSidebarWidth,
  smSpacing
} from '../constants';
import { green } from '../colors';

const StyledSidebar = styled.div`
  display: flex;
  flex-direction: column;
  width: ${props => props.collapsed ? collapsedSidebarWidth : expandedSidebarWidth};
  padding: ${smSpacing};
  background: ${green};
  height: 100vh;
  position: fixed;
`;

const Sidebar = ({
  collapsed,
  children,
  title,
}) => (
  <StyledSidebar collapsed={collapsed}>
    <h2>{title}</h2>
    {children}
  </StyledSidebar>
)

export default Sidebar;
