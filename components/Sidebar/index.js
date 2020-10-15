import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import gsap from 'gsap';
import styled from 'styled-components';
import Link from '../Link';
import Disapproval from '../../public/images/disapproval.svg';
import {
  collapsedSidebarWidth,
  expandedSidebarWidth,
  smSpacing,
  mdSpacing,
  lgSpacing,
} from '../constants';
import { mediaQuery } from '../mediaQueries';
import {
  blue,
  lightBlue,
  yellow,
} from '../colors';

const StyledSidebar = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  width: ${props => props.collapsed ? collapsedSidebarWidth : expandedSidebarWidth};
  padding: ${lgSpacing} 0;
  background: ${yellow};
  height: 100vh;
  position: fixed;
  > * {
    margin-bottom: ${smSpacing};
  }
  > ul {
    padding: 0;
  }
  ${mediaQuery.tablet(`
    width: ${collapsedSidebarWidth};    
  `)}
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
    color: rgba(255, 255, 255, .85);
    &:hover {
      color: white;
    }
    ${mediaQuery.tablet(`
      justify-content: center;
      background: #FFFE099;
      height: 60px;
      margin: 0;
      padding: ${lgSpacing};
      &:hover {
        background: #FFDA85;
      }
    `)}
  }

  ${mediaQuery.tablet(`
    margin: 0;
    border-top: 1px solid rgba(255, 255, 255, .25);
    &:last-child {
      border-bottom: 1px solid rgba(255, 255, 255, .25);
    }
  `)}
`;

const LinkIcon = styled(FontAwesomeIcon)`
  ${mediaQuery.tablet(`
    font-size: 24px;
  `)}
`;


const LinkTitle = styled.span`
  margin-left: ${smSpacing};
  ${mediaQuery.tablet(`
    display: none;    
  `)}
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled(Disapproval)`
  fill: ${lightBlue};
  width: 80px;
  ${mediaQuery.tablet(`
    width: 40px;
  `)}
`;

const Sidebar = ({
  collapsed,
  children,
  links,
}) => {
  useEffect(() => {
    gsap.from('.disapprovalLogo', {
      duration: 10,
      ease: 'power2.inOut',
      yoyo: true,
      repeat: -1,
      css: {
        fill: blue,
      }
    });
  })
  return (
    <StyledSidebar collapsed={collapsed}>
      <LogoContainer>
        <Link href="/"><Logo className="disapprovalLogo" /></Link>
      </LogoContainer>
      <ul>
        {links.map(link => (
          <LinkContainer key={`link-${link.title}`}>
            <Link href={link.href}>
              {link.icon ? (
                <LinkIcon
                  icon={link.icon}
                />
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
