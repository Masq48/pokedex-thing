import type { NextPage } from 'next'
import { GetServerSideProps, GetStaticProps } from 'next'
import { Image } from "next/image"
import Pokename from "../comps/Pokename"

const Home: NextPage = ({ data }) => {
  return (
    <div>
      <Pokename name={data.name}/>
      {console.log(data)}
      {data.abilities.map(ability => (
        <a href={ability.ability.url}>Ability: {ability.ability.name}</a>
      ))}
      <p className="text-green-700 text-4xl">{data.abilities[0].ability.name}</p>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/ditto`)
  const data = await res.json()

  return {
    props: {
      data,
    },
  }
}


export default Home
