import React from 'react'
import LogoImg from "../../../../public/images/svg/logo/logo.svg"
import Link from 'next/link'
import Image from 'next/image'

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

interface NavGroupProps {
    title: string;
    data: NavLinkProps[];
}

const NavGroup = ({
    title,
    data
}: NavGroupProps) => {
    return <div className='w-6/12 lg:w-auto mb-12'>
        <p className='font-bold text-base lg:text-lg text-default'>{title}</p>
        <ul className='mt-6 text-sm-15 lg:text-base space-y-4 lg:space-y-5'>
            {
                data?.map(datum => <NavLink
                    key={datum?.title}
                    title={datum?.title}
                    href={datum?.href}
                />)
            }
        </ul>
    </div>
}

const Footer = () => {
    const companyData: Array<NavLinkProps> = [
        {
            title: 'About Us',
            href: '/about',
        },
        {
            title: 'Blog',
            href: '/blog',
        },
        {
            title: 'Contact Us',
            href: '/contact',
        },
    ]

    const supportData: Array<NavLinkProps> = [
        {
            title: 'FAQs',
            href: '/faqs',
        },
        {
            title: 'Try Now',
            href: '/try-now',
        },
        {
            title: 'Privacy Policy',
            href: '/policy',
        },
    ]
    const worksData: Array<NavLinkProps> = [
        {
            title: 'Pricing',
            href: '/',
        },
        {
            title: 'Customer',
            href: '/',
        },
        {
            title: 'Product',
            href: '/',
        },
    ]
    return (
        <footer className='relative bg-[#F9F9F9]'>
            <div className='container px-4 md:px-8 xl:px-4 mx-auto pt-16 md:pt-20 pb-16 md:pb-20'>
                <div className='w-full flex flex-wrap flex-col md:flex-row'>
                    <div className='w-8/12 md:w-6/12 lg:w-4/12'>
                        <div className='w-24 md:w-28 lg:w-32'>
                            <Link href={"/"}>
                                <Image src={LogoImg} alt="iNoteOpx Logo" />
                                <span className='sr-only'>iNoteOpx</span>
                            </Link>
                        </div>
                        <p className='mt-4 text-textColor text-base lg:text-lg'>
                            Manage file easily. <br />Everywhere, everytime.
                        </p>
                    </div>
                    <div className='mt-6 lg:mt-0 md:flex-1'>
                        <div className='lg:w-8/12 xl:w-7/12 mx-auto flex flex-wrap flex-row justify-between'>
                            <NavGroup
                                title='Company'
                                data={companyData}
                            />
                            <NavGroup
                                title='Support'
                                data={supportData}
                            />
                             <NavGroup
                                title='Our Works'
                                data={worksData}
                            />
                        </div>
                    </div>
                </div>
                <div className='mt-12 md:mt-16 text-center text-textColor text-sm md:text-sm-15 lg:text-base'>
                    <p>&copy;2022 iNoteOPX. All Right Reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer