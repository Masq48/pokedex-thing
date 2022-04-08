import { NextFunctionComponent } from "next"

import cap from "../public/utils"

type props = {
  abilities: object
}

const Abilitycard: NextFunctionComponent<props> = ({ abilities }) => {

  return (
    <div className="w-1/3 bg-gray-700 rounded-lg m-1 p-4">
      <h1 className="text-4xl text-center">Abilities</h1>
      <ul className="flex my-5">

        {abilities.map(ability =>(
          <li className="flex-1 text-center">{ability.is_hidden ?  <abbr title="Hidden">{cap(ability.ability.name)}</abbr> : cap(ability.ability.name)}</li>
        ))}

      </ul>
    </div>
  )
}

export default Abilitycard
