import React from 'react';
//import ReactRouter from 'react-router';
import { HeaderContainer } from '../containers/header';
import FooterContainer from '../containers/footer';
//import Filter from '../components/filter'
import { CardContainer } from '../containers/card'


export default function Marketplace(){
  return (
    <>
    <HeaderContainer/>
    {/* <Filter>
      <Filter.Title>Filters</Filter.Title>
    </Filter> */}
    <h1 styles="marginLeft:20px;fontSize:2em;">Explore</h1>
    <CardContainer />
    <FooterContainer />
    </>
  );
}
