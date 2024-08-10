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
            <li className='gvspace d-none d-md-block'>Netflix</li>
            <li className='gvspace d-none d-md-block'>Home</li>
            <li className='gvspace d-none d-md-block'>TVShows</li>
            <li className='gvspace d-none d-md-block'>Movies</li>
            <li className='gvspace d-none d-md-block'>Latest</li>
            <li className='gvspace d-none d-md-block'>MyList</li>
            <li className='gvspace d-none d-md-block'>Browse by languages</li>
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