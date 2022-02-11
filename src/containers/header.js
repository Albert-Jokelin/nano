import React from 'react'
import Header from '../components/header'
import logo from '../logo.jpg'
import * as ROUTES from '../constants/routes';

export function HeaderContainer(){
  return (
    <Header>
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME}src={logo}/>
        <Header.TextLink to={ROUTES.MARKETPLACE}>Marketplace</Header.TextLink>
        <Header.TextLink to={ROUTES.ERROR}>Create</Header.TextLink>
        <Header.TextLink to={ROUTES.ERROR}>Resources</Header.TextLink>
        <Header.Login> Login or Signup </Header.Login>
      </Header.Frame>
    </Header>
  )
}
