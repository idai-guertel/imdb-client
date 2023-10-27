import Link from 'next/link'

const Card = ({
    href,
    title,
    image,
    rating,
}: {href: string
    title: string
    image: string
    rating: number
}) => (
    <Link href={href} className="flex-col">
        <img className="h-3/4 max-w-full rounded-lg" src={image} alt={title} />
        <p className="text-sm py-3">
            {title} ({rating.toFixed(1)})
        </p>
    </Link>
)

export default Card
