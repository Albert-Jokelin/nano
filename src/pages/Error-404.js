import React from 'react';
//import ReactRouter from 'react-router';
import { HeaderContainer } from '../containers/header';
import FooterContainer from '../containers/footer';
import Featured from '../components/featured'

export default function Error404(){
  return(
    <>
      <HeaderContainer />
      <Featured img="../images/error404/mountain.jpg">
        <Featured.Heading>Uncharted Territory</Featured.Heading>
        <Featured.SubHeading>Error-404<br></br>The page you're looking for doesn't exist</Featured.SubHeading>
      </Featured>
      <FooterContainer />
    </>
  )
}
