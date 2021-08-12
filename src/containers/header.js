import React from 'react'
import Header from '../components/header'
import logo from '../logo.jpg'

export function HeaderContainer(){
  return (
    <Header>
      <Header.Frame>
        <Header.Logo src={logo}/>
        <Header.TextLink>Marketplace</Header.TextLink>
        <Header.TextLink>Create</Header.TextLink>
        <Header.TextLink>Community</Header.TextLink>
        <Header.TextLink>Blog</Header.TextLink>
        <Header.Login> Login or Signup </Header.Login>
      </Header.Frame>
    </Header>
  )
}
