import React from 'react';
//import ReactRouter from 'react-router';
import { HeaderContainer } from '../containers/header';
import FooterContainer from '../containers/footer';
import Filter from '../components/filter'
import { CardContainer } from '../containers/card'


export default function Marketplace(){
  return (
    <>
    <HeaderContainer/>
    <Filter>
      <Filter.Title>Filters</Filter.Title>
    </Filter>
    <CardContainer />
    <FooterContainer />
    </>
  );
}
