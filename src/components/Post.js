import React, { Component } from 'react'

class Post extends Component {
    constructor() {
        super()

        this.state = {
            showTitle: true
        }
    }

    toggleTitle() {
        const { showTitle } = this.state

        this.setState({
            showTitle: !showTitle
        })
    }

    render() {
        const { post } = this.props
        const { showTitle } = this.state

        return (
            <article>
                {showTitle && <h3 className="title">{post.title}</h3>}
                <button onClick={() => this.toggleTitle()}>Toggle title</button>                
                <div className="body">{post.body}</div>
            </article>
        )
    }
}

export default Post