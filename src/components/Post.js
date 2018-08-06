import React, { Component } from 'react'

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

import { withStyles } from '@material-ui/core/styles';

const styles = themes => ({
    container: {
        width: '100%'
    },
    card: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
})

class Post extends Component {
    render() {
        const { post, classes, onPostDelete } = this.props

        return (
            <Card className={`${classes.card} ${classes.container}`}>
                {post.imageUrl && (
                    <CardMedia
                        className={classes.media}
                        image={post.imageUrl}
                    />
                )}

                <CardContent>
                    {post.title && (
                        <Typography gutterBottom variant="headline" component="h2">
                            {post.title}
                        </Typography>
                    )}

                    {post.title && (
                        <Typography component="p">{post.body}</Typography>
                    )}
                </CardContent>

                <CardActions>
                    <Button size="small" color="secondary" onClick={() => onPostDelete(post)}>
                        Delete
                    </Button>
                </CardActions>
            </Card>
        )
    }
}

export default withStyles(styles)(Post)