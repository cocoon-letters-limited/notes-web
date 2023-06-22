import React from 'react'
import Link from 'next/link'

const NotFound = () => {
    return (
        <main className="grid min-h-full place-items-center bg-white py-44 px-6 sm:py-52 lg:px-8">
            <div className="text-center">
                <p className="text-base lg:text-lg xl:text-xl font-semibold text-primary">404</p>
                <h1 className="mt-4 text-3xl md:text-5xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-gray-900">
                    Page not found
                </h1>
                <p className="mt-6 text-base leading-7 text-gray-600">
                    Sorry, we couldn’t find the page you’re looking for.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Link
                        href="/"
                        className="rounded-md bg-primary px-6 py-4 text-sm lg:text-base font-semibold text-white focus:outline-none"
                    >
                        Go back home
                    </Link>
                    <Link
                        href="/contact-us"
                        className="text-sm lg:text-base font-semibold text-gray-900"
                    >
                        Contact support <span aria-hidden="true">&rarr;</span>
                    </Link>
                </div>
            </div>
        </main>
    )
}

export default NotFound