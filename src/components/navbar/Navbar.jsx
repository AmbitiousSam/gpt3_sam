import React from 'react'
import './navbar.css'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logo from '../../assets/logo.svg'

const Navbar = () => {
  return (
    <div className='gpt3_navbar'>
      <div className='gpt3_navbar-links'>
        <div className='gpt3_navbar-links_logo'>
          <img className='gpt3_navbar-links_logo_img' src={logo} />
        </div>
        <div className='gpt3_navbar-links_container'>
          <p><a href="#home">Home</a></p>
          <p><a href="#wgpt3">What is GPT3</a></p>
          <p><a href="#possibilty">Open AI</a></p>
          <p><a href="#features">Case Studies</a></p>
          <p><a href="#blog">Library</a></p>
        </div>
      </div>
    </div>
  )
}

export default Navbar