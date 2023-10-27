// Takes an id returned from 'get-top-rated-movies' and extracts the relevant part
// example: "/title/tt0944947/" -> "tt0944947"
export const cropId = (id:string) => id.split('/')[2]