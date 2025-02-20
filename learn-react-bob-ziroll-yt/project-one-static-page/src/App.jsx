import { useState } from 'react'
import MainContent from './components/MainContent.jsx';
import './App.css'

export default function App () {
  return (
    <div className='app'>
      <header>
        <h1>Hello but with React</h1>
        <div className='underline'></div>
      </header>
      <MainContent />
    </div>
  )
}