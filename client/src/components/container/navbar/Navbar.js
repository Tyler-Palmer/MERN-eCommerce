import React, { Component } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'

class Navbar extends Component {
    render() {
        return (
            <div className='nav container'>
                <div className='desktop-nav'>
                    <Link className="nav-link" to='/'>Home</Link>
                    <Link className="nav-link" to='/about'>About</Link>
                    <Link className="nav-link" to='/cart'>Cart</Link>
                    <Link className='nav-link'>Login</Link>
                </div>
            </div>
        )
    }
}

export default Navbar
