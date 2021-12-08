import React from 'react'
import Featured from '../components/featured/index'

export default function FeaturedContainer(props)
{
  return(
    <Featured img={props.img}>
      <Featured.Heading>Create, Buy and Sell NFTs on India's largest NFT market</Featured.Heading>
      <Featured.Search />
      <Featured.ButtonHolder>
        <Featured.Button>Explore</Featured.Button>
        <Featured.Button>Create</Featured.Button>
      </Featured.ButtonHolder>
    </Featured>
  )
}
