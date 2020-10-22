import { css } from 'styled-components';
import styled from 'styled-components';
import Link from '../Link';
import RmLogo from '../../public/images/icons/rmLogo.svg';
import {
  collapsedSidebarWidth,
  expandedSidebarWidth,
  smSpacing,
  mdSpacing,
  lgSpacing,
} from '../constants';
import { mediaQuery } from '../mediaQueries';

const StyledSidebar = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
  width: ${props => props.collapsed ? collapsedSidebarWidth : expandedSidebarWidth};
  padding: ${lgSpacing} 0;
  background: ${props => props.theme && props.theme.sidebarBackground};
  height: 100vh;
  position: fixed;
  > * {
    margin-bottom: ${smSpacing};
  }
  > ul {
    padding: 0;
  }
  ${mediaQuery.tablet`
    width: ${collapsedSidebarWidth};    
  `}
`;

const LinkContainerTablet = css`
  justify-content: center;
  background: ${props => props.theme && props.theme.sidebarLinkBackground};
  height: 60px;
  margin: 0;
  padding: ${lgSpacing};
  &:hover {
    background: ${props => props.theme && props.theme.sidebarLinkBackgroundHover};
  }
`;

const LinkContainer = styled.li`
  list-style: none;
  padding: 0;
  margin: 0 ${smSpacing} ${mdSpacing};
  > * {
    display: flex;
    align-items: center;
    text-decoration: none;
    font-size: 16px;
    color: ${props => props.theme && props.theme.sidebarLink};
    &:active {
      color: ${props => props.theme && props.theme.sidebarLinkActive};
      svg {
        fill: ${props => props.theme && props.theme.sidebarLinkActive};
      }
    }
    &:visited {
      color: ${props => props.theme && props.theme.sidebarLinkVisited};
      svg {
        fill: ${props => props.theme && props.theme.sidebarLinkVisited};
      }
    }
    &:hover {
      color: ${props => props.theme && props.theme.sidebarLinkHover};
      svg {
        fill: ${props => props.theme && props.theme.sidebarLinkHover};
      }
    }
    ${mediaQuery.tablet`${LinkContainerTablet}`}
  }

  ${mediaQuery.tablet`
    margin: 0;
    border-top: 1px solid rgba(255, 255, 255, .25);
    &:last-child {
      border-bottom: 1px solid rgba(255, 255, 255, .25);
    }
  `}
`;

const LinkTitle = styled.span`
  margin-left: ${smSpacing};
  ${mediaQuery.tablet`
    display: none;    
  `}
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 0;
`;

const Logo = styled(RmLogo)`
  fill: ${props => props.theme && props.theme.sidebarLogo};
  width: 50px;
  ${mediaQuery.tablet`
    width: 40px;
  `}
`;
const SvgContainer = styled.div`
  > svg {
    fill: ${props => props.theme && props.theme.sidebarLink};
    width: 32px;
    height: 32px;
    ${mediaQuery.tablet`
      width: 40px;
      height: 40px;
    `}
  }
`;

const Sidebar = ({
  collapsed,
  children,
  links,
}) => {
  return (
    <StyledSidebar collapsed={collapsed}>
      <LogoContainer>
        <Link href="/"><Logo /></Link>
      </LogoContainer>
      <ul>
        {links.map(({ Component, ...link }) => (
          <LinkContainer key={`link-${link.title}`}>
            <Link href={link.href} onClick={link.onClick}>
              {Component ? (
                <SvgContainer>
                  <Component />
                </SvgContainer>
              ) : null}
              <LinkTitle>{link.title}</LinkTitle>
            </Link>
          </LinkContainer>
        ))}
      </ul>
      {children}
    </StyledSidebar>
  )
}

export default Sidebar;
