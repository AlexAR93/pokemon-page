import React from 'react'
import log from './../../assets/log.png' 

import './index.css'
import { MuiNav } from './components'
export const Header = () => {
    return (
        <header className='header'>
            <img src={log} alt='logo'/>
            <MuiNav/>
        </header>
    )
}
