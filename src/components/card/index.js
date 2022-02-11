import React from "react";
import { Container, Holder, Image, Row, Column } from './styles/card'

export default function Card({ children, ...restProps }){
  return(
    <Container>

    </Container>
  )
}

Card.Container = function CardContainer ({ children, ...restProps }){
  return(
    <Container>
      { children }
    </Container>
    )
}

Card.Holder = function CardHolder({ children, ...restProps }){
  return(
    <Holder>
      { children }
    </Holder>
  )
}

Card.Image = function CardImage({ ...restProps })
{
  return(
    <Image src={ restProps.src}/>
  )
}

Card.Row = function CardRow({ children })
{
  return(
    <Row>
      { children }
    </Row>
  )
}

Card.Column = function CardColumn({ children })
{
  return(
    <Column>
      { children }
    </Column>
  )
}
