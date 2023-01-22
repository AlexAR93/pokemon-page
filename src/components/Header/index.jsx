import React from 'react'
import log from './../../assets/log.png' 

import './index.css'
const Header = () => {
    return (
        <header className='header'>
            <img src={log} alt='logo'/>
        </header>
    )
}

export default Header