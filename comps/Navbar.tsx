import { NextFunctionComponent } from "next"
import { useState } from "react"
import Link from "next/link"

const Navbar: NextFunctionComponent = () => {

  const [val, setVal] = useState("")

  return (
    <nav className="bg-gray-600 mb-10">
      <div className="flex space-x-4 justify-center">
        <div className="py-3 text-2xl font-bold text-purple-400">
          <Link href="/mon">
            <a>
              Mon
            </a>
          </Link>
          <Link href="/">
            <a>
              Abilities
            </a>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
