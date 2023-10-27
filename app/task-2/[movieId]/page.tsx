import { getDetails, getList } from '@/app/data'
import { cropId } from '@/app/utils'
import Details from '@/components/details'

export const dynamicParams = false

export const generateStaticParams = async () => {
    const movieIds = await getList()
    return movieIds.map((movie) => ({
        movieId: cropId(movie.id),
    }))
}

const MoviePage = async ({ params }: { params: { movieId: string } }) => {
    const movie = await getDetails(params.movieId)

    return (
        <Details
            title={movie.title.title}
            image={movie.title.image.url}
            year={movie.title.year}
            genres={movie.genres}
            outline={movie.plotOutline.text}
            summary={movie.plotSummary.text}
        />
    )
}

export default MoviePage
