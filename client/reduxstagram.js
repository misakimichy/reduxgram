import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import css from './styles/style.styl'
import Main from './components/Main'
import PhotoGrid from './components/PhotoGrid'
import Post from './components/Post'

const router = (
    <Router history={browserHistory}>
        <Route path='/' component={Main}>
            <IndexRoute component={PhotoGrid} />
            <Route path='/view/:postId' component={Post} />
        </Route>
    </Router>
)

render(router, document.getElementById('root'))