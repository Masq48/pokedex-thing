import { NextPage, GetStaticPaths, GetStaticProps } from 'next'

import ACard from "../../comps/ACard"

const Page: NextPage = ({ mon }) => {
   return (
     <div>
      <h1 className="text-4xl text-center font-bold text-purple-400">{mon.name}</h1>
      <div>
        <ACard name={mon.name} abilities={mon.abilities} />
      </div>

      {console.log(mon.name)}
      {console.log(mon.abilities)}
     </div>
   )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${context.params.name}`)
  const mon = await res.json()

  return {
    props: {
      mon,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=1126`)
  const pages = await res.json()

  const names = pages.results.map(page => page.name)
  const paths = names.map(name => ({params: {name: name.toString()}}))

  return {
    paths,
    fallback: false,
  }
}

export default Page
