import styled from "@emotion/styled";
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  height: ${props => props.theme.spacing(15)};
  display: flex;
  padding-left: ${props => props.theme.spacing(10)};
  padding-right: ${props => props.theme.spacing(10)};
  box-shadow: 2px 3px 5px ${props => props.theme.colors.bgColor};
  background-color: ${props => props.theme.colors.secondbgColor};
`

export const Nav = styled.nav`
    height: 100%;
  display: flex;
  align-items: stretch;
`

export const LinkNav = styled(NavLink)`
  border-radius: ${props => props.theme.spacing(1)};
  text-decoration: none;
  color: ${props => props.theme.colors.darkColor};
  font-weight: 500;
  font-size: ${props => props.theme.spacing(5)};
  margin-right: ${props => props.theme.spacing(5)};
  display: flex;
  align-items: center;

  &.active {
    color: ${prop => prop.theme.colors.bgColor};
  }

  :hover:not(.active),
  :focus-visible:not(.active){
    color: ${prop => prop.theme.colors.accentGreenColor};
  }
`;