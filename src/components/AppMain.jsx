import ActorCard from './ActorCard';
export default function AppMain({ actors }) {

    return (
        <main className="container my-4">
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {actors.map(actor => (
                    <div className="col" key={actor.id}>
                        <ActorCard actor={actor} />
                    </div>
                ))}
            </div>
        </main>
    )
}