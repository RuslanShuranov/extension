import React, { Component } from 'react'
import store from '../redux'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import { withStyles } from '@material-ui/core/styles'

const styles = (theme) => ({
})

class TopBar extends Component {
    constructor() {
        super()

        this.state = {
            user: null
        }
    }

    componentWillMount() {
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
        const { user } = this.state

        return (
            <AppBar position="static">
                <Toolbar>
                    {user && (
                        <Typography
                            variant="title"
                            color="inherit"
                        >
                            {user.fullName}
                        </Typography>
                    )}
                </Toolbar>
            </AppBar>
        )
    }
}

export default withStyles(styles)(TopBar)