import React, { Component } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import axios from 'axios'

class Navbar extends Component {
    logout = () => {
        axios
            .post('/api/logout', {})
            .then(res => {
                alert(res.data.message)
                //Reload the browser
                this.props.history.go()
            })
            .catch(err => console.log('Logout Axios Error---------', err))
    }

    login = () => {
        //Loaction origin with auth0 proxy which is auth/callback
        const redirectURI = encodeURIComponent(`${window.location.origin}/auth/callback`)
        window.location = `https://${process.env.REACT_APP_AUTH0_DOMAIN}/login?client=${process.env.REACT_APP_AUTH0_CLIENT_ID}&scope=openid%20email&redirect_uri=${redirectURI}`
    }

    render() {
        console.log(this.props.user)
        return (
            <div className='nav container'>
                <div className='desktop-nav'>
                    <Link className='nav-link' to='/'>
                        Home
                    </Link>
                    <Link className='nav-link' to='/about'>
                        About
                    </Link>
                    <Link className='nav-link' to='/cart'>
                        Cart
                    </Link>
                    <div className='nav-link' onClick={() => this.props.user ? this.logout() : this.login()}>
                        {this.props.user ? (
                            <div>
                                <p>Logout</p>
                                <img
                                    className='user-image'
                                    src={this.props.user.profile_picture}
                                    alt={this.props.user.nickname}
                                />
                            </div>
                        ) : (
                            <p>Login</p>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default withRouter(connect(mapStateToProps)(Navbar))
