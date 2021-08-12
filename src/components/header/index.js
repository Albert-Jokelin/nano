import React from 'react'
import { Container, Logo, Link, Login } from './styles/header'

export default function Header({ children }) {
    return ( children )
}

Header.Frame = function HeaderFrame({ children }){
  return <Container>{children}</Container>
}

Header.Logo = function HeaderLogo({ ...restProps }){
  return <Logo { ...restProps } />
}

Header.TextLink = function HeaderTextLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

Header.Login = function HeaderLogin({ children, ...restProps }){
  return <Login {...restProps}>{ children }</Login>
}
