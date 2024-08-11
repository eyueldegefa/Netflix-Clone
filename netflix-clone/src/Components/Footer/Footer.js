import React from 'react'
import './Footer.css'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';


const Footer = () => {
  return (
    <div className='footer-wrapper'>
      <div className=''>
        <ul className='footerlists d-flex '>
          <li className='l g'><FacebookOutlinedIcon /></li>
          <li className='l g'><InstagramIcon /></li>
          <li className='l g'><YouTubeIcon /></li>
        </ul>
        <ul className='footerlists'>
          <li className='l'>Audio Description</li>
          <li className='l'>Investor Relation</li>
          <li className='l'>Legal Notice</li>
          <li className='l secret-code'>Service Code</li>
          <li className='copy-right'>&copy; 1997-2024 Netflix, Inc.</li>
        </ul>
      </div>

      <div>
        <ul className='footerlists'>
          <li className='l'>Help Center</li>
          <li className='l'>Jobs</li>
          <li className='l'>Cookie Preferences</li>
        </ul>
      </div>

      <div>
        <ul className='footerlists'>
          <li className='l'>Gift Cards</li>
          <li className='l'>Terms of Use</li>
          <li className='l'>Corporate Information</li>
        </ul>
      </div>

      <div>
        <ul className='footerlists'>
          <li className='l'>Media Center</li>
          <li className='l'>Privacy</li>
          <li className='l'>Contact Us</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer