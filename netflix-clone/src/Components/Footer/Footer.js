import React from 'react'
import './Footer.css'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';


const Footer = () => {
  return (
    <div className='footer-wrapper'>
      <div>
        <ul className='footerlists footer-wrapper'>
          <li><FacebookOutlinedIcon /></li>
          <li><InstagramIcon /></li>
          <li><YouTubeIcon /></li>
        </ul>
        <ul className='footerlists'>
          <li>Audio Description</li>
          <li>Investor Relation</li>
          <li>Legal Notice</li>
          <li className='secret-code'>Service Code</li>
          <li className='copy-right'>&copy; 1997-2024 Netflix, Inc.</li>
        </ul>
      </div>

      <div>
        <ul className='footerlists'>
          <li>Help Center</li>
          <li>Jobs</li>
          <li>Cookie Preferences</li>
        </ul>
      </div>

      <div>
        <ul className='footerlists'>
          <li>Gift Cards</li>
          <li>Terms of Use</li>
          <li>Corporate Information</li>
        </ul>
      </div>

      <div>
        <ul className='footerlists'>
          <li>Media Center</li>
          <li>Privacy</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer