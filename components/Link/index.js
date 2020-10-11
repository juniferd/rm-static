import Link from 'next/link';
import styled from 'styled-components';
import { blue, lightBlue } from '../colors';

const StyledLink = styled.a`
  color: ${blue};
  transition: all .5s;
  &:hover {
    color: ${lightBlue};
  }
`;

const aLink = ({
  href,
  children,
}) => {
  return (
    <Link href={href} passHref>
      <StyledLink>{children}</StyledLink>
    </Link>
  );
}

export default aLink;
