import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import Navbar from '../template/Navbar'
import Routes from './Routes'
export default function App() {
    return (
        <div className="container-fluid">
            <Navbar/>
            <Routes/>
        </div>
    )
}
