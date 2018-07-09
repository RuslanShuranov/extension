import React, { Component } from 'react'
import Post from '../components/Post'

class PostsPage extends Component {
    constructor() {
        super()

        this.state = {
            posts: [],
            isLoadingPosts: true
        }
    }

    componentWillMount() {
        setTimeout(() => {
            fetch('/static/posts.json')
                .then(res => res.json())
                .then(data => {
                    this.setState({
                        posts: data,
                        isLoadingPosts: false
                    })
                })
        }, 1000);
    }

    render() {
        const { posts, isLoadingPosts } = this.state

        return (
            <div className="posts-page">
                <h1>Posts page</h1>

                {isLoadingPosts ? (
                    <h2>Loading...</h2>
                ) : (
                    <div className="posts-list">
                        {posts.map(post => <Post key={post.id} post={post} />)}
                    </div>
                )}
            </div>
        )
    }
}

export default PostsPage