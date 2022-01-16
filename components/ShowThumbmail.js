import Image from "next/image";
import { useRouter } from "next/router"


function ShowThumbnail({ result }) {
     const BASE_URL = "https://image.tmdb.org/t/p/original/";
     const router = useRouter();
     return (
          <div className='thumbnail' onClick={() => router.push(`/show/${result.id}`)} >
               <Image src={`${BASE_URL}${result.backdrop_path || result.poster_path}` || `${BASE_URL}${result.poster_path}`} width={330} height={210} objectFit="cover" className="rounded-lg" />
          </div>
     )
}

export default ShowThumbnail;
