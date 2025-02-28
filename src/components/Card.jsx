import Image from 'next/image'

const Card = ( { character } ) => {
  return (
    <div className="card">
      <Image
        src={character.image}
        width={300} height={300}
        className="image"
        alt="character"
      />
      <div className="description">
        <p className="name">{character.name}</p>
        <p className="status">{character.status} - {character.species}</p>
        <p className="location">{character.location.name}</p>
      </div>
    </div>
  )
}

export default Card
