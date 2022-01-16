import { getSession, useSession } from 'next-auth/react';
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import IdPage from "../../components/IdPage";

function Movie({ result }) {

     const { data: session } = useSession();

     const router = useRouter();

     useEffect(() => {
          if (!session) {
               router.push("/")
          }
          return null;
     }, []);

     return (
          <div>
               <Head>
                    <title>{result.title || result.original_name}</title>
                    <link rel="icon" href="/favicon.ico" />
               </Head>
               <Header />
               {
                    !session ? <Hero /> : <IdPage result={result} />
               }
          </div>
     )
}

export default Movie;

export const getServerSideProps = async (ctx) => {
     const session = await getSession(ctx);
     const { id } = await ctx.query;
     const result = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}&language=en-US&append_to_response=videos`).then(res => res.json());

     return {
          props: {
               result, session
          }
     }
}
