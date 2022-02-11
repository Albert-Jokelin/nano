import React, { useState }from 'react'
import { Background, Title } from './styles/filter'

export default function Filter({ children, ...restProps }){
  // Create a collapsible vertical pane to the left side of the view.
  return(
   <Background { ...restProps }>
     { children }
   </Background>
    )
}

Filter.Title = function Filtertitle ({ children, ...restProps }) {
  const [isOpen, setIsOpen] = useState(true);
  if(isOpen === true)
    return(
      <Title onClick={() => setIsOpen(isOpen)} { ...restProps }>{ children }</Title>
    )
  return(<Title onClick={() => setIsOpen(!isOpen)} { ...restProps } />)
}
