import type { NextPage } from 'next'
import { GetServerSideProps, GetStaticProps } from 'next'
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import search from "../public/search.svg"

const Home: NextPage = ({ data }) => {

  const [val, setVal] = useState("")

  return (
    <div>
      <h1 className="text-center text-3xl font-bold">Welcome to the Bulbapedia clone</h1>
      <input type="search" onChange={(e) => setVal(e.target.value)}/>
        <Link href={`./mon/${val}`}>
        <a>
          <input type="button" value="search" />
        </a>
        </Link>
    </div>
  )
}

export default Home
