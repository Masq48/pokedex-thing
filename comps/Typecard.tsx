import { NextFunctionComponent } from "next"

import cap from "../public/utils"

//Had to change types to poketypes because of a type error due
//to typecript

const Typecard: NextFunctionComponent = ({ poketypes }) => {

  return (
    <div className="w-1/3 bg-gray-700 rounded-lg m-1 p-4">
      <h1 className="text-4xl text-center">Types</h1>
      <ul className="flex my-5">

        {poketypes.map((poketype, idx) =>(
            <li className="flex-1 text-center" key={idx}>{cap(poketype.type.name)}</li>
        ))}

      </ul>
    </div>
  )
}

export default Typecard
