import React from 'react'
import './Header.css'
import Logo from '../../assets/images/Logo.png'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Header = () => {
  return (
    <div className='header-Wrapper'>
      <div className='Leftside'>
        <ul className='headerlists'>
            <li className='nflogo'><img src={Logo} alt="Netflix Logo" width="100"/></li>
            <li className='gvspace'>Netflix</li>
            <li className='gvspace'>Home</li>
            <li className='gvspace'>TVShows</li>
            <li className='gvspace'>Movies</li>
            <li className='gvspace'>Latest</li>
            <li className='gvspace'>MyList</li>
            <li className='gvspace'>Browse by languages</li>
        </ul>
      </div>

      <div className='Rightside'>
        <ul className='headerlists'>
          <li className='gvspace'><SearchIcon /></li>
          <li className='gvspace'><NotificationsIcon /></li>
          <li className='gvspace'><AccountBoxIcon /></li>
          <li className='gvspace'><ArrowDropDownIcon /></li>
        </ul>
      </div>  
    </div>
  )
}

export default Header