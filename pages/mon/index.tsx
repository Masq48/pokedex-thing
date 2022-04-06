import type { NextPage } from "next"
import { useState } from "react"
import Link from "next/link"

const Hello: NextPage = () => {

  const [val, setVal] = useState('')

  return (
    <div>
      <input type="search" onChange={(e) => setVal(e.target.value)}/>
      <Link href={`./mon/${val.toLowerCase()}`}>
        <a>
          <input type="button" value="search" />
        </a>
      </Link>
    </div>
  )
}

export default Hello
