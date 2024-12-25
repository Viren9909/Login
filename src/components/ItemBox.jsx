import React from 'react'
import { Link } from 'react-router-dom'

const ItemBox = () => {

    const product = {
        id: 1,
        name: 'Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport',
        price: 599,
        image: '/docs/images/products/apple-watch.png',
        brand: 'Apple',
        description: 'Apple Watch Series 7 lets you take calls and reply to texts, pay with Apple Pay, see your fitness metrics, set a bedtime routine and track your sleep, and more. With an Always-On Retina display, your watch face is always visible. It can be fully customised, so you can choose what information is most important to you. And with the new Contour face, larger font sizes, and two new font options — and up to 50 per cent more text on the display — you can easily see the information you care about most.',
        details: {
            condition: 'New',
            additional: 'Brand new, unused, unopened, undamaged item in its original packaging.'
        },
        seller: {
            name: 'Apple Inc.',
            rating: 3.1,
            feedback: 2000,
            verified: true
        },
        notIntrested: 10,
        intrested: 20,
    }

    return (
        <div>
            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <Link to="/product">
                    <img className="p-8 rounded-t-lg" src={product.image} alt="product image" />
                </Link>
                <div className="px-5 pb-5">
                    <Link to="/product">
                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{product.name}</h5>
                    </Link>
                    <div className='mt-3'>
                        <span className="text-xl font-semibold text-gray-700 dark:text-gray-200">Brand: </span>
                        <span className="text-xl text-gray-800 dark:text-gray-300">{product.brand}</span>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                        <span className="text-3xl font-bold text-gray-900 dark:text-white">${product.price}</span>
                        <Link to="/product" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get More Info</Link>
                    </div>
                    <div className="flex items-center mt-3 mb-5">
                        <div className="flex items-center space-x-1 rtl:space-x-reverse">
                            <svg className={`w-4 h-4 ${product.seller.rating >= 1 ? "text-yellow-300" : "text-gray-200 dark:text-gray-600"}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg className={`w-4 h-4 ${product.seller.rating >= 2 ? "text-yellow-300" : "text-gray-200 dark:text-gray-600"}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg className={`w-4 h-4 ${product.seller.rating >= 3 ? "text-yellow-300" : "text-gray-200 dark:text-gray-600"}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg className={`w-4 h-4 ${product.seller.rating >= 3.5 ? "text-yellow-300" : "text-gray-200 dark:text-gray-600"}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                            <svg className={`w-4 h-4 ${product.seller.rating >= 4.6 ? "text-yellow-300" : "text-gray-200 dark:text-gray-600"} `} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                        </div>
                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">{product.seller.rating}</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ItemBox
