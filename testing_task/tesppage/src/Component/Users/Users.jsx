import React from 'react'
import { Link } from 'react-router-dom'
import UserInfo from '../UserInfo'

import './Users.css'

const Users = ({props}) => {
    
    return <div className='Users'>
          <p> <span className='form'>ФИО:</span> {props.name}</p>
          <p> <span className='form'>город:</span> {props.address.city}</p>
          <p> <span className='form'>компания:</span> {props.company.name}</p>
        <nav className='link'>
            <Link  to={ `/UserInfo`}>Подробнее</Link>
        </nav>
    </div>
}   

export default Users