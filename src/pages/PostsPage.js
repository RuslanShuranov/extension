import React, { Component } from 'react'
import Post from '../components/Post'
import { withStyles } from '@material-ui/core/styles'
import { connect } from 'react-redux'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Button from '@material-ui/core/Button'
import Icon from '@material-ui/core/Icon'
import AddNewPostDialogButton from '../forms/AddNewPostDialogButton';
import LinearProgress from '@material-ui/core/LinearProgress'

const styles = theme => ({
    post: {
        width: '100%'
    }
})

class PostsPage extends Component {
    constructor() {
        super()

        this.state = {
            isLoadingPosts: true
        }
    }

    componentDidMount() {
        const { dispatch } = this.props

        setTimeout(() => {
            fetch('/static/posts.json')
                .then(res => res.json())
                .then(data => {
                    dispatch({
                        type: 'SET_POSTS',
                        payload: data
                    })

                    this.setState({
                        isLoadingPosts: false
                    })
                })
        }, 1000);
    }

    onPostDelete(post) {
        const { dispatch, posts } = this.props

        dispatch({
            type: 'SET_POSTS',
            payload: posts.filter(item => post.id !== item.id)
        })
    }

    onPostAdded(post) {
        const { dispatch, posts } = this.props

        // this normally doesn't happen on front-end
        // back-end will add an `id` property automatically
        const lastId = Math.max.apply(null, posts.map(item => item.id))
        post.id = lastId + 1

        dispatch({
            type: 'SET_POSTS',
            payload: [post, ...posts]
        })
    }

    render() {
        const { classes } = this.props
        const { isLoadingPosts } = this.state
        const { posts } = this.props

        return (
            <div className="posts-page">
                <h1>Posts page</h1>

                <AddNewPostDialogButton
                    onPostAdded={(post) => this.onPostAdded(post)}
                />

                {isLoadingPosts ? (
                    <LinearProgress />
                ) : (
                        <List>
                            {posts.map(post => (
                                <ListItem
                                    className={classes.post}
                                    key={post.id}
                                >
                                    <Post
                                        post={post}
                                        onPostDelete={post => this.onPostDelete(post)}
                                    />
                                </ListItem>
                            ))}
                        </List>
                    )}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(withStyles(styles)(PostsPage))
