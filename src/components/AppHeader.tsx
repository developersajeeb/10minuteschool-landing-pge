'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { InputText } from 'primereact/inputtext';
import HeaderSearchIcon from './custom-svg/HeaderSearchIcon';
import { IoIosArrowDown } from 'react-icons/io';
import LangSwitchIcon from './custom-svg/LangSwitchIcon';
import { FaPhone } from "react-icons/fa6";
import { LuPhone } from 'react-icons/lu';
import Hamburger from './custom-svg/Hamburger';
import { usePathname, useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';

const AppHeader = () => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const currentLang = searchParams.get('lang') || 'en';

    const toggleLanguage = () => {
        const newLang = currentLang === 'en' ? 'bn' : 'en';
        const params = new URLSearchParams(searchParams.toString());
        params.set('lang', newLang);
        router.push(`${pathname}?${params.toString()}`);
    };

    return (
        <nav className='mx-auto flex max-w-[1440px] items-center justify-between gap-3 px-4 py-3 md:px-7'>
            <div className='flex items-center gap-3'>
                <span className='md:hidden'><Hamburger /></span>
                <Link href='/' className='h-[27px] w-[100px]'>
                    <Image src='/10mslogo.svg' alt='logo' width={100} height={27} />
                </Link>
            </div>

            <div className='flex-1 hidden w-full pr-4 md:block relative'>
                <HeaderSearchIcon className='absolute left-3 top-1/2 -translate-y-1/2' />
                <InputText className='w-full border border-gray-300 pl-12 px-3 py-2 rounded-full !shadow-none text-sm font-' placeholder='স্কিলস কোর্স, কিংবা স্কুল প্রোগ্রাম সার্চ করুন...' />
            </div>

            <ul className='hidden mr-4 xl:flex items-center gap-4 text-sm text-gray-500'>
                <li className='flex items-center gap-1 cursor-pointer hover:text-green-600 duration-300'>ক্লাস ৬-১২ <IoIosArrowDown size={18} /></li>
                <li className='flex items-center gap-1 cursor-pointer hover:text-green-600 duration-300'>স্কিলস <IoIosArrowDown size={18} /></li>
                <li className='flex items-center gap-1 cursor-pointer hover:text-green-600 duration-300'>ভর্তি পরীক্ষা <IoIosArrowDown size={18} /></li>
                <li className='flex items-center gap-1 cursor-pointer hover:text-green-600 duration-300'>অনলাইন ব্যাচ <IoIosArrowDown size={18} /></li>
                <li className='flex items-center gap-1 cursor-pointer hover:text-green-600 duration-300'>ইংলিশ সেন্টার <IoIosArrowDown size={18} /></li>
                <li className='flex items-center gap-1 cursor-pointer hover:text-green-600 duration-300'>আরো <IoIosArrowDown size={18} /></li>
            </ul>

            <div className='flex items-center gap-3'>
                <button onClick={toggleLanguage} className='hidden cursor-pointer md:flex items-center px-2 py-[2px] gap-1 border border-[#dadada] rounded hover:bg-[#eaf8f0] duration-300'>
                    <span className='hidden md:block'><LangSwitchIcon /></span>
                    <span>{currentLang === 'en' ? 'বাং' : 'EN'}</span>
                </button>

                <Link href='tel:16910' className='items-center gap-1 text-green-600 hidden md:flex'><span><FaPhone /></span> 16910</Link>
            </div>

            <div className='flex items-center gap-4'>
                <span className='md:hidden'><HeaderSearchIcon /></span>
                <Link href='tel:16910' className='text-gray-700 md:hidden'><LuPhone size={20} /></Link>
                <Link href='/login' className='px-3 py-1 text-white rounded-md bg-green-600 md:px-6'>লগ-ইন</Link>
            </div>
        </nav>
    );
};

export default AppHeader;