import { HomeIcon, PlusIcon, SearchIcon, StarIcon } from '@heroicons/react/solid';
import { signIn, signOut, useSession } from "next-auth/react";
import Image from 'next/image';
import { useRouter } from 'next/router';


function Header() {
     const { data: session } = useSession();
     const router = useRouter();
     
     return (
          <header className='sticky top-0 z-[1000] bg-[#040714] flex items-center h-[72px] px-10 md:px-12'>
               <div className='relative' onClick={() => router.push('/')}>
                    <Image src='/images/logo.svg' width={80} height={80} className='cursor-pointer object-contain' />
               </div>
               {
                    session && (
                         <div className='hidden lg:flex ml-10 space-x-6 items-center'>
                              <a className='header-link group'>
                                   <HomeIcon className='h-4' />
                                   <span className='span'>Home</span>
                              </a>
                              <a className='header-link group'>
                                   <SearchIcon className='h-4' />
                                   <span className='span'>Search</span>
                              </a>
                              <a className='header-link group'>
                                   <PlusIcon className='h-4' />
                                   <span className='span'>Watchlist</span>
                              </a>
                              <a className='header-link group'>
                                   <StarIcon className='h-4' />
                                   <span className='span'>Originals</span>
                              </a>
                              <a className='header-link group'>
                                   <img src='/images/movie-icon.svg' alt='' className='h-5' />
                                   <span className='span'>Movies</span>
                              </a>
                              <a className='header-link group'>
                                   <img src='/images/series-icon.svg' alt='' className='h-5' />
                                   <span className='span'>Series</span>
                              </a>
                         </div>
                    )
               }
               {
                    !session ? (
                         <button className='ml-auto uppercase border px-4 py-1.5 rounded hover:bg-white hover:text-black font-medium tracking-wide transition duration-200' onClick={() => signIn()}>Login</button>
                    ) : (
                         <img src={session.user.image} alt="Login" onClick={() => signOut()} className="h-12 ml-auto object-contain cursor-pointer w-12 rounded-full" />
                    )
               }
          </header>
     )
}

export default Header;


