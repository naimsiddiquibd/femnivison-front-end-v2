import React from 'react';

import { CheckIcon } from '@heroicons/react/solid';

const Pricing = () => {
  return (
    <div name='pricing' className='w-full text-white my-2'>
      <div className='w-full h-[800px] bg-slate-900 absolute mix-blend-overlay'></div>

      <div className='max-w-[1240px] mx-auto py-2'>

        <div className='text-center md:py-20 py-6 '>
        <h2 className="text-5xl font-bold text-gray-500">PACKAGES WE OFFER</h2>
        </div>

        <div className='grid md:grid-cols-4'>

          <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-md relative hover:bg-blue-50 cursor-pointer'>
            <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-md text-sm'>Standard</span>
            <div>
              <p className='text-2xl font-bold py-2 flex'>$49<span className='text-xl text-slate-500 flex flex-col justify-end'>/mo</span></p>
            </div>
            <p className='text-md py-2 text-slate-500'>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            <div className='text-md'>
                <p className='flex py-1'><CheckIcon className='w-8 mr-5 text-green-600'  />Lorem, ipsum dolor.</p>
                <p className='flex py-1'><CheckIcon className='w-8 mr-5 text-green-600'  />Lorem, ipsum dolor.</p>
                <p className='flex py-1'><CheckIcon className='w-8 mr-5 text-green-600'  />Lorem, ipsum dolor.</p>
                <p className='flex py-1'><CheckIcon className='w-8 mr-5 text-green-600'  />Lorem, ipsum dolor.</p>
                <p className='flex py-1'><CheckIcon className='w-8 mr-5 text-green-600'  />Lorem, ipsum dolor.</p>
                <button className='w-full py-4 my-4'>Get Started</button>
            </div>
          </div>
          <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-md relative hover:bg-blue-50 cursor-pointer'>
            <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-md text-sm'>Premium</span>
            <div>
              <p className='text-2xl font-bold py-2 flex'>$99<span className='text-xl text-slate-500 flex flex-col justify-end'>/mo</span></p>
            </div>
            <p className='text-md py-2 text-slate-500'>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            <div className='text-md'>
                <p className='flex py-1'><CheckIcon className='w-8 mr-5 text-green-600'  />Lorem, ipsum dolor.</p>
                <p className='flex py-1'><CheckIcon className='w-8 mr-5 text-green-600'  />Lorem, ipsum dolor.</p>
                <p className='flex py-1'><CheckIcon className='w-8 mr-5 text-green-600'  />Lorem, ipsum dolor.</p>
                <p className='flex py-1'><CheckIcon className='w-8 mr-5 text-green-600'  />Lorem, ipsum dolor.</p>
                <p className='flex py-1'><CheckIcon className='w-8 mr-5 text-green-600'  />Lorem, ipsum dolor.</p>
                <button className='w-full py-4 my-4'>Get Started</button>
            </div>
          </div>
          <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-md relative hover:bg-blue-50 cursor-pointer'>
            <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-md text-sm'>Premium</span>
            <div>
              <p className='text-2xl font-bold py-2 flex'>$99<span className='text-xl text-slate-500 flex flex-col justify-end'>/mo</span></p>
            </div>
            <p className='text-md py-2 text-slate-500'>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            <div className='text-md'>
                <p className='flex py-1'><CheckIcon className='w-8 mr-5 text-green-600'  />Lorem, ipsum dolor.</p>
                <p className='flex py-1'><CheckIcon className='w-8 mr-5 text-green-600'  />Lorem, ipsum dolor.</p>
                <p className='flex py-1'><CheckIcon className='w-8 mr-5 text-green-600'  />Lorem, ipsum dolor.</p>
                <p className='flex py-1'><CheckIcon className='w-8 mr-5 text-green-600'  />Lorem, ipsum dolor.</p>
                <p className='flex py-1'><CheckIcon className='w-8 mr-5 text-green-600'  />Lorem, ipsum dolor.</p>
                <button className='w-full py-4 my-4'>Get Started</button>
            </div>
          </div>
          <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-md relative hover:bg-blue-50 cursor-pointer'>
            <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-md text-sm'>Premium</span>
            <div>
              <p className='text-2xl font-bold py-2 flex'>$99<span className='text-xl text-slate-500 flex flex-col justify-end'>/mo</span></p>
            </div>
            <p className='text-md py-2 text-slate-500'>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            <div className='text-md'>
                <p className='flex py-1'><CheckIcon className='w-8 mr-5 text-green-600'  />Lorem, ipsum dolor.</p>
                <p className='flex py-1'><CheckIcon className='w-8 mr-5 text-green-600'  />Lorem, ipsum dolor.</p>
                <p className='flex py-1'><CheckIcon className='w-8 mr-5 text-green-600'  />Lorem, ipsum dolor.</p>
                <p className='flex py-1'><CheckIcon className='w-8 mr-5 text-green-600'  />Lorem, ipsum dolor.</p>
                <p className='flex py-1'><CheckIcon className='w-8 mr-5 text-green-600'  />Lorem, ipsum dolor.</p>
                <button className='w-full py-4 my-4'>Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
