import React, { Component } from 'react'
import Post from '../components/Post'
import store from '../redux'

class PostsPage extends Component {
    constructor() {
        super()

        this.state = {
            posts: [],
            isLoadingPosts: true,
            user: null
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

        this.unsubscribeFromUser = store.subscribe(() => {
            const state = store.getState()
            this.setState({
                user: state.auth.user
            })
        })
    }

    componentWillUnmount() {
        this.unsubscribeFromUser()
    }

    render() {
        const { posts, isLoadingPosts, user } = this.state

        return (
            <div className="posts-page">
                {user && <h3>User: {user.fullName}</h3>}
                <h1>Posts page</h1>

                {isLoadingPosts ? (
                    <h2>Loading...</h2>
                ) : (
                        <div className="posts-list">
                            {posts.map(post => (
                                <Post
                                    key={post.id} post={post}
                                />
                            ))}
                        </div>
                    )}
            </div>
        )
    }
}

export default PostsPage