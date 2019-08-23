import React, { Component } from 'react'
import axios from 'axios'
import './Home.css'

class Home extends Component {
    constructor() {
        super()
        this.state = {
            products: [],
            loading: true
        }
    }
    componentDidMount() {
        axios
            .get('/api/products')
            .then(res => {
                console.log('res.data products-----------', res.data)
                this.setState({
                    products: res.data,
                    loading: false
                })
            })
            .catch(err => {
                console.log('Read all products Error-------', err)
            })
    }
    render() {
        const { products, loading } = this.state
        if (!loading) {
            return (
                <div className='home container'>
                    <div className='home-products container'>
                        {products.length
                            ? products.map(product => <p>{product.name}</p>)
                            : null}
                    </div>
                </div>
            )
        } else {
            return <Loader />
        }
    }
}

export default Home
