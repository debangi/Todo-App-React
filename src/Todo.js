import { List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import React from 'react';
import './Todo.css';

function Todo(props) {
  return (
    <List className='todo__list'>
      <ListItem>
        <ListItemAvatar></ListItemAvatar>
        <ListItemText primary={props.todo} secondary='Dummy deadline ⏰' />
      </ListItem>
    </List>
  );
}

export default Todo;
