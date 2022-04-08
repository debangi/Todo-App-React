import { Button, FormControl, Input, InputLabel } from '@mui/material';
import { useEffect, useState } from 'react';
import Todo from './Todo';
import './App.css';
import db from './firebase';
import firebase from 'firebase/compat/app';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    db.collection('todos')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) => {
        setTodos(snapshot.docs.map((doc) => doc.data().todo));
      });
  }, []);

  const addTodo = (event) => {
    event.preventDefault();

    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.Timestamp.now(),
    });

    // setTodos([...todos, input]);
    setInput('');
  };

  return (
    <div className='App'>
      <h1>TO DO APP</h1>

      <form>
        <FormControl>
          <InputLabel>✅ Write a todo</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </FormControl>
        <Button
          disabled={!input}
          type='submit'
          onClick={addTodo}
          variant='contained'
          color='primary'
        >
          Add Todo
        </Button>
      </form>

      {todos.map((todo) => (
        <Todo todo={todo} />
      ))}
    </div>
  );
}

export default App;
