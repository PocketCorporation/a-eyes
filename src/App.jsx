import React from 'react'
import './App.css'
import Hero from './components/Hero'
import Demo from './components/Demo'
import Logo from './components/Logo'


const App = () => {
  return (
    <main>
        <div className="main">
            <div className="gradient" />
        </div>
        <div className="app">
            <Hero />
            <Demo />
        </div>
    </main>
  )
}

export default App