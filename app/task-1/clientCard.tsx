'useClient'

import { getDetails } from '@/app/data'
import Card from '@/components/card'
import { useQuery } from '@tanstack/react-query'

const ClientCard = ({ movieId }: { movieId: string }) => {
    const {
        data: movie,
        isLoading,
        isError,
    } = useQuery({
        queryKey: ['getDetails', movieId],
        queryFn: () => getDetails(movieId),
    })

    if (isLoading || isError || !movie) return null

    return (
        <Card
            href={`/task-1/${movieId}`}
            title={movie.title.title}
            image={movie.title.image.url}
            rating={movie.ratings.rating}
        />
    )
}

export default ClientCard
