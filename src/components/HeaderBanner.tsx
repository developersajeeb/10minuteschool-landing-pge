'use client';
import Image from 'next/image';
import React from 'react';
import { RxCross2 } from 'react-icons/rx';

const HeaderBanner = () => {
    return (
        <section className='bg-[#02090B] relative'>
            <Image src='/images/dasktop_banner.jpg' alt='banner' className='w-full max-w-[1525px] mx-auto' width={1525} height={127} />
            <span className='text-white absolute top-1 right-1 cursor-pointer'><RxCross2 size={20} /></span>
        </section>
    );
};

export default HeaderBanner;