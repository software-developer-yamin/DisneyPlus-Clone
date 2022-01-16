import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


function Slider() {
     return (
          <section className='mt-7 relative shadow-2xl max-w-screen-2xl mx-auto' >
               <Carousel
                    autoPlay
                    showStatus={false}
                    showThumbs={false}
                    showIndicators={false}
                    infiniteLoop
                    interval={5000}
               >
                    <div>
                         <img loading='lazy' src='/images/slider-1.jpg' alt='Slider' />
                    </div>
                    <div>
                         <img loading='lazy' src='/images/slider-2.jpg' alt='Slider' />
                    </div>
                    <div>
                         <img loading='lazy' src='/images/slider-3.jpg' alt='Slider' />
                    </div>
                    <div>
                         <img loading='lazy' src='/images/slider-4.jpeg' alt='Slider' />
                    </div>
               </Carousel>
          </section>
     )
}

export default Slider;
