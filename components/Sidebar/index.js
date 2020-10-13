import { useEffect } from 'react';
import gsap from 'gsap';
import styled from 'styled-components';
import Link from '../Link';
import Disapproval from '../../public/images/disapproval.svg';
import {
  collapsedSidebarWidth,
  expandedSidebarWidth,
  smSpacing,
  lgSpacing,
} from '../constants';
import { mediaQuery } from '../mediaQueries';
import { blue, yellow, green } from '../colors';

const StyledSidebar = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  width: ${props => props.collapsed ? collapsedSidebarWidth : expandedSidebarWidth};
  padding: ${lgSpacing} ${smSpacing};
  background: ${green};
  height: 100vh;
  position: fixed;
  > * {
    margin-bottom: ${smSpacing};
  }
  > ul {
    padding: 0;
    margin: ${smSpacing} 0 0;
    li {
      list-style: none;
      padding: 0;
      margin: 0 0 ${smSpacing};
    }
  }
  ${mediaQuery.tablet(`
    width: ${collapsedSidebarWidth};    
  `)}
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled(Disapproval)`
  fill: ${yellow};
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
      duration: 100,
      opacity: 0.25,
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
}

export default Sidebar;
