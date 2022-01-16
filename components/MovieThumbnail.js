import Image from "next/image";
import { useRouter } from "next/router"


function MovieThumbnail({ result }) {
     const BASE_URL = "https://image.tmdb.org/t/p/original/";
     const router = useRouter();
     return (
          <div className='thumbnail' onClick={() => router.push(`/movie/${result.id}`)} >
               <Image src={`${BASE_URL}${result.backdrop_path || result.poster_path}` || `${BASE_URL}${result.poster_path}`} width={330} height={210} objectFit="cover" className="rounded-lg" />
          </div>
     )
}

export default MovieThumbnail;

{
     /*
     {
    "adult": false,
    "backdrop_path": "/l5K9elugftlcyIHHm4nylvsn26X.jpg",
    "genre_ids": [
        18
    ],
    "id": 255709,
    "original_language": "ko",
    "original_title": "소원",
    "overview": "After 8-year-old So-won narrowly survives a brutal sexual assault, her family labors to help her heal while coping with their own rage and grief.",
    "popularity": 10.103,
    "poster_path": "/x9yjkm9gIz5qI5fJMUTfBnWiB2o.jpg",
    "release_date": "2013-10-02",
    "title": "Hope",
    "video": false,
    "vote_average": 8.6,
    "vote_count": 237
}
     */
}
