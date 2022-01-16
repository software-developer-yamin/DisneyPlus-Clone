import { getSession, useSession } from 'next-auth/react';
import Head from 'next/head'
import Brands from '../components/Brands';
import Header from '../components/Header'
import Hero from '../components/Hero';
import MoviesCollection from '../components/MoviesCollection';
import ShowsCollection from '../components/ShowsCollection';
import Slider from '../components/Slider';

export default function Home({popularMovies,popularShows,top_ratedMovies,top_ratedShows}) {
  
  const {data:session} = useSession();

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {
        !session ? (<Hero />) : (
          <main className='background-home'>
            <Slider/>
            <Brands/>
            <MoviesCollection results={popularMovies} title="Popular Movies" />
            <ShowsCollection results={popularShows} title="Popular Shows" />
            <MoviesCollection results={top_ratedMovies} title="Top Rated Movies" />
            <ShowsCollection results={top_ratedShows} title="Top Rated Shows" />
          </main>
        )
      }
    </div>
  )
}

export const getServerSideProps = async (ctx) => {
  const session = await getSession(ctx);

  const [
    popularMoviesRes,
    popularShowsRes,
    top_ratedMoviesRes,
    top_ratedShowsRes,
  ] = await Promise.all([
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`
    ).then(res=> res.json()),
    fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`
    ).then(res=> res.json()),
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1`
    ).then(res=> res.json()),
    fetch(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1`
    ).then(res=> res.json()),
  ]);

  return {
    props: {
      session,
      popularMovies:popularMoviesRes.results,
      popularShows:popularShowsRes.results,
      top_ratedShows:top_ratedShowsRes.results,
      top_ratedMovies:top_ratedMoviesRes.results,
    }
  }
}
