import styled from 'styled-components';
import { smSpacing, lgSpacing } from '../constants';
import Link from '../Link';

const BreadcrumbContainer = styled.ul`
  display: inline;
  padding: ${lgSpacing} 0 ${lgSpacing};
  margin: 0 0 ${lgSpacing};
  list-style: none;
  border-bottom: 1px solid ${props => props.theme && props.theme.sidebarLogo};
`;

const Crumb = styled.li`
  display: inline;
  font-size: ${lgSpacing};
  &:not(:last-child) {
    margin-right: ${smSpacing};
    &:after {
      content: "/";
      color: ${props => props.theme && props.theme.sidebarLogo};
      margin-left: ${smSpacing};
    }
  }
  > a {
    text-decoration: none;
  }
`;

const Breadcrumbs = ({
  breadcrumbs,
}) => {
  return (
    <BreadcrumbContainer>
      {breadcrumbs.map(breadcrumb => (
        <Crumb>
          {breadcrumb.link ? (
            <Link href={breadcrumb.link}>{breadcrumb.text}</Link>
          ) : (
            <span>{breadcrumb.text}</span>
          )}
        </Crumb>
      ))}
    </BreadcrumbContainer>
  );
};

export default Breadcrumbs;
