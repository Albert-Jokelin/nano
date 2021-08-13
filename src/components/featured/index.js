import React, { useState }from 'react'
import { Background, Heading, Input, Button, Form, SubHeading } from './styles/featured'

export default function Featured({ children, ...restProps }){
  return(
    <Background {...restProps}>
      { children }
    </Background>
  )
}

Featured.Heading = function FeaturedHeading ({children, ...restProps}) {
  return (
    <Heading {...restProps}>{ children }</Heading>
  )
}

Featured.SubHeading = function FeaturedSubHeading ({children, ...restProps}) {
  return (
    <SubHeading {...restProps}>{ children }</SubHeading>
  )
}

Featured.Search = function FeatureSearch({ children, ...restProps}) {
  const [search, setSearch] = useState("");

  const handleSubmit = (event) =>{
    event.preventDefault();
  }
  return(
    <Form onSubmit={handleSubmit} { ...restProps }>
      <Input type="text" placeholder="Search"value = {search} onChange={ e => setSearch(e.target.value)}/>
      <Button onClick = {handleSubmit}>search</Button>
    </Form>
  )
}
