import React from 'react'
import { Link as ReachRouterLink } from 'react-router-dom';
import { Container, Logo, Link, Login } from './styles/header'

export default function Header({ children }) {
    return ( children )
}

Header.Frame = function HeaderFrame({ children }){
  return <Container>{children}</Container>
}

Header.Logo = function HeaderLogo({ to, ...restProps }){
  return(
    <ReachRouterLink to={to}>
      <Logo { ...restProps } />
    </ReachRouterLink>
  )
}

Header.TextLink = function HeaderTextLink({ to, children, ...restProps }) {
  return(
      <Link {...restProps}>{children}</Link>
  );
};

Header.Login = function HeaderLogin({ children, ...restProps }){
  return <Login {...restProps}>{ children }</Login>
}
