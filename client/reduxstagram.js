import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute } from 'react-router'
import { Provider } from 'react-redux'
import css from './styles/style.styl'
import Main from './components/Main'
import PhotoGrid from './components/PhotoGrid'
import Post from './components/Post'
import store, { history } from './store'

const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path='/' component={Main}>
                <IndexRoute component={PhotoGrid} />
                <Route path='/view/:postId' component={Post} />
            </Route>
        </Router>
    </Provider>
)

render(router, document.getElementById('root'))