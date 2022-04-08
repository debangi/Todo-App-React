import { List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import React from 'react';
import './Todo.css';

function Todo(props) {
  return (
    <List className='todo__list'>
      <ListItem className='todo__list-item'>
        <ListItemAvatar></ListItemAvatar>
        <ListItemText primary={props.todo} secondary='Dummy deadline ⏰' />
      </ListItem>
    </List>
  );
}

export default Todo;
