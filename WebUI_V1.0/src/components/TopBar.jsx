import React from 'react'
import { Link } from 'react-router-dom'
import { TopNavLinks } from '../topbar_db'
import "./Topbar.css"

const Topbar = () => {
  return (
    <>
    <header>
        <div className="container ">
                <div className="logo-brand ">
                    <a href="/">X-Studio</a>
                </div>
                <nav>
                    <ul>
                        {TopNavLinks.map(link => (
                        <li key={link.id}>
                            <Link to={link.url} className='link'>{link.name}</Link>  
                        </li>
                        ))}
                    </ul>
                </nav>
        </div>
    </header>
    </>
  )
}

export default Topbar
