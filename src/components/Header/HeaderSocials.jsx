import React from 'react'
import {BsLinkedin, BsInstagram, BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/bilalhanifkhatri/" target="_blank"><BsLinkedin /></a>
        <a href="https://www.instagram.com/bilalhanifkhatri/" target="_blank"><BsInstagram /></a>
        <a href="https://github.com/bilalhanifkhatri/" target="_blank"><BsGithub /></a>
    </div>
  )
}

export default HeaderSocials