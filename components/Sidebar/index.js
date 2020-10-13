import styled from 'styled-components';
import Link from '../Link';
import {
  collapsedSidebarWidth,
  expandedSidebarWidth,
  smSpacing
} from '../constants';
import { green } from '../colors';

const StyledSidebar = styled.div`
  background: white;
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
  links,
}) => (
  <StyledSidebar collapsed={collapsed}>
    <h2>{title}</h2>
    <ul>
      {links.map(link => (
        <li>
          <Link href={link.href}>
            {link.title}
          </Link>
        </li>
      ))}
    </ul>
    {children}
  </StyledSidebar>
)

export default Sidebar;
