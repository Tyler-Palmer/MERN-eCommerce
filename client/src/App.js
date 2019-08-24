import React, { Component } from 'react'
import Navbar from './components/container/Navbar/Navbar'
import routes from './routes/routes'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { login, logout } from './redux/reducer'
import axios from 'axios'
import './App.css'

class App extends Component {
    componentDidMount(){
      axios.get('/api/user-data')
        .then(res => {
          const { dispatch } = this.props
          if(res.data.user) {
            dispatch(login(res.data.user))
          } else {
            dispatch(logout())
          }
        }).catch(err => console.log('login/logout componentDidMount error--------', err))
    }
    render() {
        return (
            <div className='App'>
                <Navbar />
                {routes}
            </div>
        )
    }
}

export default withRouter(connect()(App))
