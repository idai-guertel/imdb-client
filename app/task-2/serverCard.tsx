import { getDetails } from '@/app/data'
import Card from '@/components/card'

const ServerCard = async ({ movieId }: { movieId: string }) => {
    try {
        const movie = await getDetails(movieId)
        return (
            <Card
                href={`/task-2/${movieId}`}
                title={movie.title.title}
                image={movie.title.image.url}
                rating={movie.ratings.rating}
            />
        )
    } catch {
        return null
    }
}

export default ServerCard
