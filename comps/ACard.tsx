import { NextFunctionComponent } from "next"

const ACard: NextFunctionComponent = ( {name, abilities} ) => {
  return (
    <div className="w-1/4 bg-gray-700 rounded-lg">
      <ul>
        {abilities.map(ability =>
          (<li>Hello: {ability.ability.name}</li>)
        )}
      </ul>
    </div>
  )
}

export default ACard
