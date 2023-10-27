const SECONDS_IN_A_WEEK = 60 * 60 * 24 * 7

const baseUrl = 'https://imdb8.p.rapidapi.com/title/'

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': process.env.NEXT_PUBLIC_API_KEY as string,
        'X-RapidAPI-Host': process.env.NEXT_PUBLIC_API_HOST as string,
    },
}

export const getList = async (): Promise<
    {
        id: string
        chartRating: number
    }[]
> => {
    const res = await fetch(baseUrl + 'get-top-rated-movies', {
        ...options,
        next: { revalidate: SECONDS_IN_A_WEEK },
    })
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}

export const getDetails = async (
    movieId: string
): Promise<{
    title: { title: string; image: { url: string }; year: number }
    ratings: { rating: number }
    genres: string[]
    plotOutline: { text: string }
    plotSummary: { text: string }
}> => {
    const res = await fetch(
        baseUrl + `get-overview-details?tconst=${movieId}`,
        options
    )
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}
