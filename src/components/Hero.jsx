import React from 'react';
import {logo} from'../assets';

const Hero = () => {
  return (
    <header className="w-full flex flex-col justify-center items-center">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt='sumz_logo' />
        <button 
          type='button' 
          onClick={()=>window.open('https://github.pocketcorporation')}
          className='black_btn'  
        >
          Github
        </button>
      </nav>
      
      <h1 className="head_text">
        Summarize Articles with <br className='max-md:hidden' />
        <span className='orange_gradient'>OpenAi GPT-4</span>
      </h1>
      <h2 className="desc">
        Simplify your reading with A-eyes, an open-souce article summarizer that transforms lengthy articles into clear concise summaries.
      </h2>
      https://www.jsmastery.pro/ultimate-next-course
    </header>
  )
}

export default Hero