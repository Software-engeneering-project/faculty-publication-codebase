import React from 'react'
import Layout from './auth/Layout'
import Title from './auth/Title'
import Login from './auth/Login'

const Home = () => {

    return (
        <Layout Left={Title} Right={Login} />
    )
}


export default Home