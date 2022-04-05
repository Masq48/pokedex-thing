import { NextFunctionComponent } from "next"
import { useState } from "react"
import Link from "next/link"

const Navbar: NextFunctionComponent = () => {

  const [val, setVal] = useState("")

  return (
    <nav className="bg-gray-600 mb-10">
      <div className="flex flex-row-reverse space-x-4 items-center">
        <div className="flex-none float-right">
          <Link href={`./mon/${val}`}>
            <a>
              <input type="button" value="search" />
            </a>
          </Link>
          <input type="search" onChange={(e) => setVal(e.target.value)}/>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
