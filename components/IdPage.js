import { PlusIcon, XIcon } from '@heroicons/react/solid';
import Image from "next/image";
import { useState } from 'react';
import ReactPlayer from 'react-player';


function IdPage({ result }) {
     console.log(result)
     const [showPlayer, setShowPlayer] = useState(false);

     const BASE_URL = "https://image.tmdb.org/t/p/original/";

     const index = result.videos.results.findIndex((element) => element.type === 'Trailer')

     return (
          <section className='relative z-50'>
               <div className='relative min-h-[calc(100vh-72px)]'>
                    <Image src={`${BASE_URL}${result.backdrop_path || result.poster_path}` || `${BASE_URL}${result.poster_path}`} layout="fill" objectFit="cover" />
               </div>
               <div className='absolute inset-y-28 md:inset-y-auto md:bottom-10 inset-x-4 md:inset-x-12 space-y-6 z-50'>
                    <h1 className='font-bold text-3xl sm:text-4xl md:text-5xl'>{result.title || result.original_name}</h1>
                    <div className='flex items-center space-x-3 md:space-x-5'>
                         <button className='text-xs md:text-base bg-[#f9f9f9] text-black hover:bg-[#c9c9c9] flex items-center justify-center py-2.5 px-6 rounded'>
                              <img src='/images/play-icon-black.svg' alt='Play icon' className='h-6 md:h8' />
                              <span className='uppercase font-semibold tracking-wide'>Play</span>
                         </button>
                         <button className='text-xs md:text-base bg-black/30 text-[#f9f9f9] hover:bg-[#c9c9c9] flex items-center justify-content py-2.5 px-6 rounded border border-[#f9f9f9]' onClick={() => setShowPlayer(true)}>
                              <img src='/images/play-icon-white.svg' alt='Play icon' className='h-6 md:h-8' />
                              <span className='uppercase font-semibold tracking-wide'>Trainer</span>
                         </button>
                         <div className='rounded-full border-2 border-white flex items-center justify-center w-11 h-11 bg-black/60 cursor-pointer '>
                              <PlusIcon className='h-6' />
                         </div>
                         <div className='rounded-full border-2 border-white flex items-center justify-center w-11 h-11 bg-black/60 cursor-pointer '>
                              <img src='/images/group-icon.svg' alt='' />
                         </div>
                    </div>
                    <p className='text-xs md:text-sm'>
                         {result.release_date || result.first_release_date} . {" "}
                         {Math.floor(result.runtime / 60)}h {result.runtime % 60}m . {' '}
                         {result.genres.map(gerne => gerne.name + " ")}{" "}
                    </p>
                    <h4 className='text-sm md:text-lg max-w-4xl'>{result.overview}</h4>
               </div>
               {
                    showPlayer && (
                         <div className='absolute inset-0 opacity-50 w-full h-full bg-black z-50' />
                    )
               }
               <div className={`absolute top-3 inset-x-[7%] md:inset-x-[13%] rounded overflow-hidden transition duration-1000 ${showPlayer ? 'opacity-100 z-50' : 'opacity-0'}`}>
                    <div className='flex items-center justify-between bg-black text-[#f9f9f9] p-3.5'>
                         <span className='font-semibold'>Play Trainer</span>
                         <div className='flex w-5 h-5 rounded-lg items-center justify-center cursor-pointer opacity-50 hover:opacity-75 hover:bg-[#0f0f0f]' onClick={() => setShowPlayer(false)}>
                              <XIcon className='h-5' />
                         </div>
                    </div>
                    <div className={`relative ${showPlayer && 'pt-[475px]'} flex items-center justify-center`}>
                         <ReactPlayer
                              url={`https://www.youtube.com/watch?v=${result.videos?.results[index]?.key}`}
                              width={"100%"}
                              height={"100%"}
                              controls={true}
                              playing={showPlayer}
                              style={{ position: "absolute", top: "0", left: "0", }}
                         />
                    </div>
               </div>
          </section>
     )
}

export default IdPage;
