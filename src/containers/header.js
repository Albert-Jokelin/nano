import React from 'react'
import Header from '../components/header'
import logo from '../logo.jpg'
import * as ROUTES from '../constants/routes';

export function HeaderContainer(){
  return (
    <Header>
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME}src={logo}/>
        <Header.TextLink to="/Marketplace">Marketplace</Header.TextLink>
        <Header.TextLink>Create</Header.TextLink>
        <Header.TextLink>Community</Header.TextLink>
        <Header.TextLink>Blog</Header.TextLink>
        <Header.Login> Login or Signup </Header.Login>
      </Header.Frame>
    </Header>
  )
}
