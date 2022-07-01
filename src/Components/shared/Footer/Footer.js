import React from 'react'
import { FaFacebookF,FaLinkedin } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';
function Footer() {
  return (
    <footer className="footer justify-center items-center p-4 bg-base-100 text-base-100-content">
  <div className="items-center  grid-flow-col">
    <p className='logo'>Darkfam-Todo-App</p>
    <p>Copyright © 2022 - All right reserved</p>
  </div> 
  <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
   <a href="https://www.facebook.com/Mahtab.khannoorkwkw" target="_blank" rel="noopener noreferrer" className='footer_link'><FaFacebookF/></a>
   <a href="https://github.com/Noor-26" target="_blank" rel="noopener noreferrer" className='footer_link'><BsGithub/></a>
   <a href="https://www.linkedin.com/in/mahtab-khan-noor-76b365241/" target="_blank" rel="noopener noreferrer" className='footer_link'><FaLinkedin/></a>
   
  </div>
</footer>
  )
}

export default Footer