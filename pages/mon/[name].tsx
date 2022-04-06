import { NextPage, GetStaticPaths, GetStaticProps } from 'next'

import ACard from "../../comps/ACard"

const Page: NextPage = ({ mon }) => {

  const cap = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

   return (
     <div>
      <h1 className="text-4xl text-center font-bold text-purple-400">{cap(mon.name)}</h1>
      <div>
        <ACard name="Abilities" abilities={mon.abilities} />
      </div>
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
