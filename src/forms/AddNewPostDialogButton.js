import React, { Component, Fragment } from 'react'
import { withStyles } from '@material-ui/core/styles';

import { Field, reduxForm } from 'redux-form'

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Icon from '@material-ui/core/Icon'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';

const validate = values => {
    const errors = {};

    ['title', 'body'].forEach(name => {
        if (!values[name]) {
            errors[name] = `This field is required`
        }

        if (values[name] && values[name].length < 3) {
            errors[name] = `Please type at least 3 characters`
        }
    })

    return errors
}

class TextFieldComponent extends Component {
    constructor() {
        super()
    }

    render() {
        const {
            input,
            label,
            multiline,
            meta: { touched, error, warning }
        } = this.props

        return (
            <FormControl error={touched && !!error}>
                <InputLabel>{label}</InputLabel>
                <Input
                    {...input}
                    multiline={!!multiline}
                />
                {(touched && error) && <FormHelperText>{error}</FormHelperText>}
            </FormControl>
        )
    }
}

const styles = themes => ({
    content: {
        display: 'flex',
        flexDirection: 'column'
    }
})
class AddNewPostDialogButton extends Component {
    constructor() {
        super()

        this.state = {
            open: false
        }

        this.handlePostAdd = this.handlePostAdd.bind(this)
    }

    handleClose() {
        this.setState({ open: false })
    }

    handlePostAdd(values) {
        const { onPostAdded } = this.props

        if (onPostAdded && typeof onPostAdded === 'function') {
            onPostAdded(values)
        }
    }

    render() {
        const { classes, handleSubmit, pristine, submitting, invalid } = this.props
        const { open } = this.state

        return (
            <Fragment>
                <Button onClick={() => this.setState({ open: !open })}>
                    <Icon>add</Icon>
                    Add new post
                </Button>

                <Dialog
                    open={open}
                    onClose={() => this.handleClose()}
                >
                    <form onSubmit={handleSubmit(this.handlePostAdd)}>
                        <DialogTitle>Add new post form</DialogTitle>
                        <DialogContent className={classes.content}>
                            <Field
                                name='title'
                                component={TextFieldComponent}
                                label='Title'
                            />
                            <Field
                                name='body'
                                multiline={true}
                                component={TextFieldComponent}
                                label='Body'
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={() => this.handleClose()} color="primary">
                                Close
                            </Button>
                            <Button type="submit" color="primary" disabled={invalid || submitting || pristine}>
                                Save
                            </Button>
                        </DialogActions>
                    </form>
                </Dialog>
            </Fragment>
        )
    }
}

export default reduxForm({
    form: 'AddNewPostDialogButton',
    validate
})(withStyles(styles)(AddNewPostDialogButton))
