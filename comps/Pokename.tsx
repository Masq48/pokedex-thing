import { NextPage } from 'next'

const Pokename: NextPage = ({ name }) => {
  return (
    <h1 className="text-center text-5xl">{name}</h1>
  )
}

export default Pokename
