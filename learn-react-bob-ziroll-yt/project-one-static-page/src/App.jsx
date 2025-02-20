import { useState } from 'react'
import MainContent from './components/MainContent.jsx';
import './App.css'

export default function App () {
  return (
    <div className='app'>
      <header>
        <h1>Hello but with React</h1>
        <div className='reactLogo'>
          <img className="logoImage" src="https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png" alt="React Logo" />
        </div>
      </header>
      <MainContent />
    </div>
  )
}