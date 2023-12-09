import React from 'react'
import { ListItem, ListItemText, ListItemAvatar, Avatar, TextField, Button } from '@material-ui/core'
import './Post.css';
const Post = () => {
    return (
        <div className='post'>
            <div className='post_header'>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar className='post_avatar' src="https://source.unsplash.com/random/900×700/?person" alt='user'></Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="username" ></ListItemText>
                </ListItem>
                <img className='post_image' src='https://source.unsplash.com/random'>
                </img>
                <ListItem className='post_caption'><strong>username:</strong>caption</ListItem>
            </div>
        </div>
    )
}

export default Post
