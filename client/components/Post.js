import React, { Component } from 'react'
import { Link } from 'react-router'
import Photo from './Photo'
import Comments from './Comments'

class Post extends Component {

    render() {
        // Find index of the post
        const i = this.props.posts.findIndex(post => post.code === this.props.params.postId)
        // get us the post
        const post = this.props.posts[i]
        return(
            <div className='single-photo'>
                <Photo i={i} post={post} {...this.props} />
                <Comments />
            </div>
        )
    }
}

export default Post