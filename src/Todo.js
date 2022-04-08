import React, { Fragment, useState } from 'react';
import {
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Modal,
} from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import db from './firebase';
import './Todo.css';

function Todo(props) {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const updateTodo = () => {
    db.collection('todos').doc(props.todo.id).set(
      {
        todo: input,
      },
      { merge: true }
    );
    handleClose();
  };

  return (
    <Fragment>
      <Modal open={open} onClose={handleClose}>
        <div className='modal-box'>
          <h1>Edit here!</h1>
          <input
            placeholder={props.todo.todo}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Button onClick={updateTodo}>Update Todo</Button>
        </div>
      </Modal>
      <List className='todo__list'>
        <ListItem>
          <ListItemAvatar></ListItemAvatar>
          <ListItemText
            primary={props.todo.todo}
            // secondary='Dummy deadline ⏰'
          />
        </ListItem>
        <Button onClick={handleOpen}>Edit Me!</Button>
        <DeleteForeverIcon
          onClick={(event) =>
            db.collection('todos').doc(props.todo.id).delete()
          }
        />
      </List>
    </Fragment>
  );
}

export default Todo;
