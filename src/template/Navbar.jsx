import React from 'react'

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">Crud</a>
                    </div>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <li>
                                <a href="#/user">Add User</a>
                            </li>
                            <li>
                                <a href="#/users">Users</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
