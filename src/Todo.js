import React, { Fragment, useState } from 'react';
import { Button, ListItem, ListItemText, Modal, Box } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import db from './firebase';
import './Todo.css';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

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
      <ListItem className='todolist__item'>
        <Modal open={open} onClose={handleClose}>
          <Box sx={style}>
            <h1>Edit here!</h1>
            <input
              placeholder={props.todo.todo}
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <Button variant='outlined' color='secondary' onClick={updateTodo}>
              Update Todo
            </Button>
          </Box>
        </Modal>
        <ListItemText
          primary={props.todo.todo}
          // secondary='Dummy deadline ⏰'
        />
        <Button onClick={handleOpen}>Edit Me!</Button>
        <DeleteForeverIcon
          onClick={(event) =>
            db.collection('todos').doc(props.todo.id).delete()
          }
        />
      </ListItem>
    </Fragment>
  );
}

export default Todo;
