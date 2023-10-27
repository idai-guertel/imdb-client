'use client'

import { getDetails } from '@/app/data'
import Details from '@/components/details'
import { useQuery } from '@tanstack/react-query'
import Error from '../error'
import Loading from '../loading'

const MoviePage = ({ params }: { params: { movieId: string } }) => {
    const {
        data: movie,
        isLoading,
        isError,
    } = useQuery({
        queryKey: ['getDetails', params.movieId],
        queryFn: () => getDetails(params.movieId),
    })

    if (isLoading) return <Loading />
    if (isError) return <Error />
    if (!movie?.title) return <p className="mt-10">No movie found</p>

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
