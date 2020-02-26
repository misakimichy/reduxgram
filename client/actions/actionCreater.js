// Increments likes
export const increment = index => {
    return {
        type: 'INCREMENT_LIKES',
        index
    }
}

// Add comment
export const addComment = (postId, author, comment) => {
    return {
        type: 'ADD_COMMENT',
        postId,
        author,
        comment
    }
}

// Remove comment
// postId: post that we're going to remove a comment from
// id: a comment that we're going to remove from the post
export const removeComment = (postId, i) => {
    return {
        type: 'REMOVE_COMMENT',
        i,
        postId
    }
}