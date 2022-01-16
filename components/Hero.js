import Head from 'next/head';
import Image from 'next/image';

function Hero() {
     return (
          <section>
               <Head>
                    <title>Login | Disney+</title>
                    <link rel="icon" href="/favicon.ico" />
               </Head>
               <div className=' relative min-h-[calc(100vh-72px)]'>
                    <Image src='/images/hero-background.jpg' layout="fill" objectFit="cover" />
               </div>
               <div className='flex items-center justify-center'>
                    <div className='mx-auto max-w-screen-sm p-8 -mt-16 flex flex-col space-y-3 absolute top-1/4 w-full justify-center items-center'>
                         <Image src='/images/cta-logo-one.svg' width='600' height='150' objectFit='contain' />
                         <button className='bg-blue-600 uppercase text-xl py-4 px-6 tracking-wide w-full font-extrabold rounded hover:bg-[#0485ee]'>get all there</button>
                         <p className="text-xs text-center">
                              Get Premier Access to Raya and the Last Dragon for an additional fee
                              with a Disney+ subscription. As of 03/26/21, the price of Disney+
                              and The Disney Bundle will increase by $
                         </p>
                         <Image src="/images/cta-logo-two.png" width="600" height="70" objectFit="contain"/>
                    </div>
               </div>
          </section>
     )
}

export default Hero;
