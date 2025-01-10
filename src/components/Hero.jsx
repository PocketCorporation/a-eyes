import React,{useState} from 'react';
import {logo} from'../assets';
// import Logo from './Logo'

const Hero = () => {
  return (
    <header className="w-full flex flex-col justify-center items-center">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
      <img src={logo} alt='sumz_logo' className='w-28 object-contain' />
      {/*<Logo />*/}
        <button 
          type='button' 
          onClick={()=>window.open('https://github.com/PocketCorporation')}
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
    </header>
  )
}

export default Hero