import React from 'react';
//import ReactRouter from 'react-router';
import { HeaderContainer } from '../containers/header';
import FooterContainer from '../containers/footer';
import FeaturedContainer from '../containers/featured';

export default function Home(){
  return (
    <>
    <HeaderContainer/>
    <FeaturedContainer img="../images/home/artwork.jpg"/>
    <FooterContainer />
    </>
  );
}
