export default function ActorCard({ actor }) {

    return (
        <div className="card h-100 bg-dark text-white rounded-4">
            <h3 className="text-center pt-3 fw-bold">{actor.name}</h3>
            <img
                src={actor.image}
                alt={actor.name}
                className="mx-auto d-block"
            />
            <div className="card-body text-center">
                <p>
                    {actor.birth_year} {actor.nationality}
                </p>
                <p>{actor.biography}</p>
                <p className="text-danger fw-bold mb-1">Known For:</p>
                <p className="text-danger">{actor.known_for.join(', ')}</p>
                <p className="text-warning fw-bold mb-1">Awards:</p>
                <p className="text-warning">{actor.awards.join(', ')}</p>
            </div>
        </div>
    )
}