'use client'

import { useQuery } from '@tanstack/react-query'
import { cropId } from '../utils'
import { getList } from '../data'
import Error from './error'
import Card from './clientCard'
import Loading from './loading'

const PageTask1 = () => {
    const {
        data: movieIds,
        isLoading,
        isError,
    } = useQuery({
        queryKey: ['getList'],
        queryFn: getList,
    })

    if (isLoading) return <Loading />
    if (isError) return <Error />
    if (!movieIds || !movieIds.length) return null

    return (
        <>
            <h1 className="my-10 text-3xl font-extrabold text-center">
                Top 10 movies on IMDb
            </h1>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-5">
                {movieIds.slice(0, 10).map((movie) => (
                    <Card key={movie.id} movieId={cropId(movie.id)} />
                ))}
            </div>
        </>
    )
}

export default PageTask1
