export default function AppMain({ actors }) {

    return (
        <main>
            {actors.map(actor => (
                <div key={actor.id}>
                    <img src={actor.image} alt={actor.name} />
                    <h2>{actor.name}</h2>
                    <p>{actor.birth_year}</p>
                    <p>{actor.nationality}</p>
                    <p>{actor.biography}</p>
                    <p>{actor.awards}</p>
                </div>
            ))}
        </main>
    )
}