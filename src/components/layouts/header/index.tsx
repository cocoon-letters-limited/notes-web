"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import LogoImg from "../../../../public/images/svg/logo/logo.svg"
import MobileMenu from '../mobileMenu';

interface NavLinkProps {
    href: string;
    title: string;
}

const NavLink = ({ href, title }: NavLinkProps) => {
    return <div className='flex items-center'>
        <Link href={href} className='text-default md:text-sm-15 lg:text-base hover:text-primary hover:font-medium'>
            {title}
        </Link>
    </div>
}

const Header = () => {
    const handleShowMenu = () => {
        document.querySelector(".mobileMenu")?.classList.remove("closeMenu");
        document.querySelector(".mobileMenu")?.classList.add("showMenu");
    }

    return (
        <>
            <header className='relative bg-white'>
                <nav className='container px-4 md:px-6 lg:px-8 xl:px-4 mx-auto py-6 md:py-7'>
                    <div className='w-full flex flex-row justify-between items-center'>
                        <div className='w-24 md:w-28 lg:w-32'>
                            <Link href={"/"}>
                                <Image src={LogoImg} alt="iNoteOpx Logo" />
                                <span className='sr-only'>iNoteOpx</span>
                            </Link>
                        </div>

                        <div className='hidden md:block flex-1'>
                            <div className='flex justify-center items-center space-x-6 lg:space-x-12'>
                                <NavLink title='Home' href='/' />
                                <NavLink title='About us' href='/about' />
                                <NavLink title='FAQs' href='/faqs' />
                                <NavLink title='Contact Us' href='/contact' />
                            </div>
                        </div>

                        <div className='hidden md:block'>
                            <Link
                                href="/try-now"
                                className="text-white font-semibold text-sm-15 lg:text-base py-3 px-6 rounded-[9px] bg-primary focus:outline-none ring-0"
                            >
                                Try for free
                            </Link>
                        </div>

                        <div className='block md:hidden'>
                            <button type='button' onClick={handleShowMenu}>
                                <svg width="25" height="14" viewBox="0 0 25 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="25" height="2" rx="1" fill="#054CD6" />
                                    <rect x="3" y="6" width="22" height="2" rx="1" fill="#054CD6" />
                                    <rect x="5" y="12" width="20" height="2" rx="1" fill="#054CD6" />
                                </svg>

                            </button>
                        </div>
                    </div>
                </nav>
            </header>

            <MobileMenu />
        </>
    )
}

export default Header