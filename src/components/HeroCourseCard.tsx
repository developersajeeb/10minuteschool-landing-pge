'use client';
import Image from 'next/image';
import React from 'react';

interface Props {
    data: {
        title: string;
        description: string;
    };
}

const HeroCourseCard = ({ data }: Props) => {

    return (
        <section className='min-h-[300px] md:min-h-[300px] bg-cover bg-center bg-no-repeat' style={{ backgroundImage: 'url(/images/herobg.jpeg)' }}>
            <div>
                <div className='container justify-center px-4 relative flex flex-col gap-4 md:flex-row md:gap-12 pb-6 md:py-10 min-h-[300px]'>
                    <div className='order-1 flex flex-col justify-center flex-1 md:order-1  md:max-w-[calc(100%_-_348px)] lg:max-w-[calc(100%_-_448px)]'>
                        <h1 className='text-white mb-2 text-[21px] font-semibold  md:text-4xl'>{data?.title}</h1>
                        <div className='mb-2'>
                            <button className='flex flex-row flex-wrap gap-2 text-white'>
                                <span className='inline-block'>
                                    <Image src='/images/five-star.jpg' alt='flag' width={130} height={23} />
                                </span>
                                <span className='inline-block text-sm md:text-base'>(82.6% শিক্ষার্থী কোর্স শেষে ৫ রেটিং দিয়েছেন)</span>
                            </button>
                        </div>
                        <div className='text-gray-400'>
                            <div
                                className="tenms__paragraph"
                                dir="ltr"
                                dangerouslySetInnerHTML={{ __html: data?.description }}
                            />
                        </div>
                    </div>

                    <div className='w-full md:max-w-[330px] lg:max-w-[400px] order-2 bg-white absolute right-0 md:top-[50px] md:absolute'>
                        <div className='md:sticky md:top-[112px] md:border'>
                            <div className='hidden p-1 md:block'>
                                <div className='relative overflow-hidden bg-black youtube-video aspect-video'>
                                    <div className="thumb-wrap">
                                            <div className="undefined opacity-0 transition-opacity duration-300 ease-in-out">
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroCourseCard;