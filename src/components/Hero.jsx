import React from 'react';
import {
    CloudUploadIcon,
    DatabaseIcon,
    PaperAirplaneIcon,
    ServerIcon,
} from '@heroicons/react/solid';

import HeroLogo1 from '../../src/assets/HeroLogo1.png';
import HeroLogo2 from '../../src/assets/HeroLogo2.png';
import HeroLogo3 from '../../src/assets/HeroLogo3.png';
import bgVideo from '../assets/Famnivision.mp4';

const Hero = () => {
    return (
        <div name='home' className='w-full h-screen relative overflow-hidden bg-slate-500'>
            {/* Video Background */}
            <video
                autoPlay
                loop
                muted
                className='w-full h-full object-cover absolute top-0 left-0 z-0'
            >
                <source src={bgVideo} type='video/mp4' />
                Your browser does not support the video tag.
            </video>

            <div className='w-full h-full flex flex-col justify-between relative z-10'>
                <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
                    <div className='flex flex-col justify-center md:items-start w-full px-2 py-8 text-white'>
                        <p className='text-2xl'>Free Yourself From</p>
                        <h1 className='py-3 text-5xl md:text-7xl font-bold md:whitespace-nowrap'>Limiting Beliefs With Diane!</h1>
                        <p className='text-2xl'>Break free from limiting beliefs</p>
                        <button className='py-3 px-6 sm:w-[60%] my-4'>Free Discovery Call</button>
                    </div>
                    <div className='absolute flex flex-col py-8 md:min-w-[760px] bottom-[5%]
                    mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200
                    border border-slate-300 rounded-xl text-center shadow-xl'>
                        <div className='flex justify-between flex-wrap px-4'>
                            <p className='flex px-4 py-2 text-slate-500'><img src={HeroLogo1} alt="Your Logo" className="w-auto h-12 mr-4 sm:h-12" /></p>
                            <p className='flex px-4 py-2 text-slate-500'><img src={HeroLogo2} alt="Your Logo" className="w-auto h-12 mr-4 sm:h-12" /></p>
                            <p className='flex px-4 py-2 text-slate-500'><img src={HeroLogo3} alt="Your Logo" className="w-auto h-12 mr-4 sm:h-12" /></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
