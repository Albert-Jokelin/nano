import React from 'react'
import { Background, Heading } from './styles/featured'

export default function Featured({ children }){
  return(
    <Background>
      { children }
    </Background>
  )
}

Featured.Heading = function FeaturedHeading ({children, ...restProps}) {
  return (
    <Heading {...restProps}>{ children }</Heading>
  )
}
