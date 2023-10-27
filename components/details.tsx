const Details = ({
    title,
    image,
    year,
    genres,
    outline,
    summary,
}: {
    title: string
    image: string
    year: number
    genres: string[]
    outline: string
    summary: string
}) => (
    <>
        <div className="bg-black bg-opacity-90 p-10 max-w-2xl rounded-lg">
            <h1 className="text-3xl mb-4 font-extrabold text-center">
                {title} ({year.toString()})
            </h1>
            <div className="flex mb-8 gap-3 text-slate-400 justify-center">
                {genres.map((name) => (
                    <p key={name}>{name}</p>
                ))}
            </div>
            <p className="text-lg mb-8">{outline}</p>
            <p className="text-sm">{summary}</p>
        </div>
        <img className="h-auto" src={image} alt={title} />
    </>
)

export default Details
