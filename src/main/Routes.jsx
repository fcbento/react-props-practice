import { BrowserRouter, Route, Redirect, HashRouter } from 'react-router-dom'

import React from 'react'
import User from '../user/User'
import UserList from '../user/UserList'

export default function Routes() {
    return (
        <HashRouter>
            <Route path="/user" component={User} />
            <Route path="/users" component={UserList} />
            <Redirect from="*" to="/users" />
        </HashRouter>
    )
}
