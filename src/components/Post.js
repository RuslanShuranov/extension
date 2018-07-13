import React, { Component } from 'react'

class Post extends Component {
    render() {
        const { post } = this.props

        return (
            <article>
                <h3 className="title">{post.title}</h3>
                <div className="body">{post.body}</div>
            </article>
        )
    }
}

export default Post