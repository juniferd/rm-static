import Link from 'next/link';
import styled from 'styled-components';

const StyledLink = styled.a`
  color: ${props => props.theme && props.theme.primaryLink};
  transition: all .5s;
  &:active {
    color: ${props => props.theme && props.theme.primaryLinkActive};
  }
  &:visited {
    color: ${props => props.theme && props.theme.primaryLinkVisited};
  }
  &:hover {
    cursor: pointer;
    color: ${props => props.theme && props.theme.primaryLinkHover};
  }
`;

const aLink = ({
  href,
  onClick,
  children,
}) => {
  return (
    href ? (
      <Link href={href} passHref>
        <StyledLink>{children}</StyledLink>
      </Link>
    ) : (
      <StyledLink onClick={onClick}>{children}</StyledLink>
    )
  );
}

export default aLink;
