import { NextFunctionComponent } from "next"

const ACard: NextFunctionComponent = ( {name, abilities} ) => {
  return (
    <div className="w-1/4 bg-gray-700 rounded-lg">
      <h1 className="text-4xl text-center">{name}</h1>
      <ul>
        {abilities.map(ability =>
          (<li>Hello: {ability.is_hidden ?  <abbr title="Hidden">{ability.ability.name}</abbr> :ability.ability.name}</li>)
        )}
      </ul>
    </div>
  )
}

export default ACard
