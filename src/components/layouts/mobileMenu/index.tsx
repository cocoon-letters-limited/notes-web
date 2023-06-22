"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import LogoImg from "../../../../public/images/svg/logo/logo.svg"

interface NavLinkProps {
    href: string;
    title: string;
}

const NavLink = ({ href, title }: NavLinkProps) => {
    return <div className='flex items-center justify-center'>
        <Link href={href} className='text-default text-base hover:text-primary font-bold'>
            {title}
        </Link>
    </div>
}

const MobileMenu = () => {
    const handleCloseMenu = () => {
        document.querySelector(".mobileMenu")?.classList.remove("showMenu");
        document.querySelector(".mobileMenu")?.classList.add("closeMenu");
    }

    return (
        <div className='mobileMenu fixed top-0 left-0 z-20 px-4 pt-6 pb-8 h-screen w-full bg-white overflow-y-auto'>
            <div className='flex flex-row justify-between'>
                <div className='w-24 md:w-28 lg:w-32'>
                    <Link href={"/"}>
                        <Image src={LogoImg} alt="iNoteOpx Logo" />
                        <span className='sr-only'>iNoteOpx</span>
                    </Link>
                </div>

                <div className=''>
                    <button type='button' onClick={handleCloseMenu}>
                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 1.30929L11.6907 0L6.5 5.19071L1.30929 0L0 1.30929L5.19071 6.5L0 11.6907L1.30929 13L6.5 7.80929L11.6907 13L13 11.6907L7.80929 6.5L13 1.30929Z" fill="#054CD6" />
                        </svg>
                    </button>
                </div>
            </div>

            <div className='mt-16 flex flex-col space-y-10'>
                <NavLink title='Home' href='/' />
                <NavLink title='About us' href='/about' />
                <NavLink title='FAQs' href='/faqs' />
                <NavLink title='Blog' href='/blog' />
                <NavLink title='Contact Us' href='/contact' />
            </div>

            <div className='mt-12 mb-12'>
                <Link
                    href="/try-now"
                    className="w-full block text-center text-white font-bold text-sm-15 lg:text-base py-4 px-6 rounded-[9px] bg-primary focus:outline-none ring-0"
                >
                    Try for free
                </Link>
            </div>
        </div>
    )
}

export default MobileMenu