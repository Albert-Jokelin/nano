import React, { useState }from 'react'
import { Link as ReachRouterLink } from 'react-router-dom';
import { Background, Heading, Input, Button, Form, SubHeading, ButtonHolder } from './styles/featured'

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

Featured.ButtonHolder = function FeaturedButtonHolder({ children, ...restProps})
{
  return(
    <ButtonHolder {...restProps}>
      { children }
    </ButtonHolder>
  )
}

Featured.Button = function FeaturedButton({ to, children, ...restProps})
{
  return(
    <ReachRouterLink to={to} style={{ textDecoration: 'none' }}>
      <Button { ...restProps }> { children }</Button>
    </ReachRouterLink>
  )
}
