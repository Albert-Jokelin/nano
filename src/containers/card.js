import React from 'react'
import Card from '../components/card'
import objects from '../fixtures/example.json'

export function CardContainer() {
  return (
    <Card.Container>
          {objects["data"].map(function (object, i) {
            return (
              <Card.Holder key={i} props={object}>
                <Card.Image src={object.image} />
                </Card.Holder>
            )
          })}
    </Card.Container>
  )
}
