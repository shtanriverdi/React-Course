import List from '@mui/material/List';
import { todoItems } from './TodoItems.js';
import TodoItem from './TodoItem.jsx';
import { useState } from 'react';
import AddTodo from './AddTodo.jsx';
import Box from '@mui/material/Box';
import { v4 as uuid } from 'uuid';
import EditTodo from './EditTodo';

export default function TodoList() {
    const [todos, setTodos] = useState(todoItems);

    const removeTodo = (id) => {
        setTodos(prevTodos => {
            return prevTodos.filter(todo => {
                if (todo.id !== id) {
                    return todo
                }
            })
        });
    }

    const toggleTodo = (id) => {
        setTodos(prevTodos => {
            return prevTodos.map(todo => {
                if (todo.id === id) {
                    return { ...todo, done: !todo.done }
                }
                else {
                    return todo;
                }
            })
        });
    }

    // Model State
    const [isOpen, setOpen] = useState(false);
    const onModalClose = (event) => {
        setOpen(false);
    }

    const editTodo = (id) => {
        console.log("editTodo ", id);
        setOpen(!isOpen);
    }

    const rateTodo = (id) => {
        console.log("rateTodo ", id);
    }

    const addTodo = (newItem) => {
        setTodos(prevTodos => {
            return [{ ...newItem, id: uuid() }, ...prevTodos]
        });
    }

    return (
        <List sx={{ width: '100%', maxWidth: 560 }}>
            <h1>Todo List!</h1>
            <Box sx={{ mb: 2 }}>
                <h3>Add New Todo:</h3>
                <AddTodo onAddItem={addTodo} />
            </Box>
            {
                todos.map(item =>
                    <TodoItem
                        key={item.id}
                        item={item}
                        onDelete={() => removeTodo(item.id)}
                        onEdit={() => editTodo(item.id)}
                        onToggle={() => toggleTodo(item.id)}
                        onRatingChange={() => rateTodo(item.id)}
                    />
                )
            }
            <EditTodo isOpen={isOpen} handleClose={onModalClose} />
        </List>
    );
}
