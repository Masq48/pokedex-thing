import { NextFunctionComponent } from "next"

const ACard: NextFunctionComponent = ({ abilities }) => {

  const cap = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <div className="w-1/4 bg-gray-700 rounded-lg m-1 p-4">
      <h1 className="text-4xl text-center">Abilities</h1>
      <ul>
        {abilities.map(ability =>
          (<li>Hello: {ability.is_hidden ?  <abbr title="Hidden">{cap(ability.ability.name)}</abbr> : cap(ability.ability.name)}</li>)
        )}
      </ul>
    </div>
  )
}

export default ACard
