import { getList } from '@/app/data'
import Card from './serverCard'
import { cropId } from '../utils'

const PageTask2 = async () => {
    const movieIds = await getList()

    return (
        <>
            <h1 className="my-10 text-3xl font-extrabold text-center">
                Top 10 movies on IMDb (from server)
            </h1>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-5">
                {movieIds.slice(0, 10).map((movie) => (
                    <Card
                        key={movie.id}
                        movieId={cropId(movie.id)}
                    />
                ))}
            </div>
        </>
    )
}

export default PageTask2
