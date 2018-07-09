import React, {Component} from 'react'
import Post from '../components/Post'

const posts = [
    {
        id: 1,
        title: 'First post',
        body: 'First post text'
    },
    {
        id: 2,
        title: 'Second post',
        body: 'Second post text'
    },
    {
        id: 3,
        title: 'Third post',
        body: 'Just a text'
    },
];

class PostsPage extends Component {
    render() {
        return (
            <div className="posts-page">
                <h1>Posts page</h1>

                <div className="posts-list">
                    {posts.map(post => <Post key={post.id} post={post} />)}
                </div>
            </div>
        )
    }
}

export default PostsPage