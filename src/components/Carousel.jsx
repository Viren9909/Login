import React from 'react'
import "../css/Carousel.css"


const Carousel = () => {
    return (
        <div>
            <div id="carousel" className="relative w-full" data-carousel="slide">
                {/*  Carousel wrapper  */}
                <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                    {/*  Item 1  */}
                    <div className="item-style" data-carousel-item>
                        {/* <img src={img1} className="img-style" alt="..."/> */}
                        <img src="" className="img-style" alt="..."/>
                    </div>
                    {/*  Item 2  */}
                    <div className="item-style" data-carousel-item>
                        <img src="" className="img-style" alt="..."/>
                    </div>
                    {/*  Item 3  */}
                    <div className="item-style" data-carousel-item>
                        <img src="" className="img-style" alt="..."/>
                    </div>
                    {/*  Item 4  */}
                    <div className="item-style" data-carousel-item>
                        <img src="" className="img-style" alt="..."/>
                    </div>
                    {/*  Item 5  */}
                    <div className="item-style" data-carousel-item>
                        <img src="" className="img-style" alt="..."/>
                    </div>
                </div>
                {/*  Slider indicators  */}
                <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
                </div>
                {/*  Slider controls  */}
                <button type="button" className="nav-s-btn focus:outline-none group" data-carousel-prev>
                    <span className="nav-span">
                        <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                        </svg>
                        <span className="sr-only">Previous</span>
                    </span>
                </button>
                <button type="button" className="nav-e-btn group focus:outline-none" data-carousel-next>
                    <span className="nav-span">
                        <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                        </svg>
                        <span className="sr-only">Next</span>
                    </span>
                </button>
            </div>
        </div>
    )
}

export default Carousel
