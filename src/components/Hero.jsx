import React from 'react'

import {logo} from '../assets';


const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
        <nav className='flex justify-between items-center w-full mb-10 pt-3'>
            {/* <img src={logo} alt="sumz_logo" className=' w-28 object-contain'/> */}
            <h2 className=' text-2xl font-extrabold  text-black sm:text-3xl'>Article Summarizer</h2>
            <button type=' button' className=' black_btn' onClick={() => window.open('https://github.com/isurueranga-98')}>
                GitHub
            </button>
        </nav>

        <h1 className=' head_text'>
            ArticleSsummarizer Using  
            <br className=' max-md:hidden'/> <span className=' orange_gradient'>OpenAI GPT-4</span>
        </h1>
        <h2 className=' desc'>
            Simplify your reading with Summize, an open-source article summarixer that transforms lengthy article into clear and concise summaries
        </h2>
    </header>
  )
}

export default Hero