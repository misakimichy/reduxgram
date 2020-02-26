import React, { Component } from 'react'
import { Link } from 'react-router'
import Photo from './Photo'
import Comments from './Comments'

class Post extends Component {

    render() {
        // Find index of the post'
        const { postId } = this.props.params
        const i = this.props.posts.findIndex(post => post.code === postId)
        // get us the post
        const post = this.props.posts[i]
        const postComments = this.props.comments[postId] || []
        return(
            <div className='single-photo'>
                <Photo i={i} post={post} {...this.props} />
                <Comments postComments={postComments}/>
            </div>
        )
    }
}

export default Post