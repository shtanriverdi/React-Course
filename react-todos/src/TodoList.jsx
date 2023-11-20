import List from '@mui/material/List';
import { todoItems } from './TodoItems.js';
import TodoItem from './TodoItem.jsx';
import { useState } from 'react';
import AddTodo from './AddTodo.jsx';
import Box from '@mui/material/Box';
import { v4 as uuid } from 'uuid';

export default function TodoList() {
    const [todos, setTodos] = useState(todoItems);

    const removeTodo = (id) => {
        console.log("removeTodo ", id);
        setTodos(prevTodos => {
            return prevTodos.filter(todo => {
                if (todo.id !== id) {
                    return todo
                }
            })
        });
    }

    const toggleTodo = (id) => {
        console.log("toggleTodo ", id);
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

    const editTodo = (id) => {
        console.log("editTodo ", id);
    }

    const rateTodo = (id) => {
        console.log("rateTodo ", id);
    }

    const addTodo = (newItem) => {
        console.log("addTodo ", newItem);
        setTodos(prevTodos => {
            return [ { ...newItem, id: uuid() }, ...prevTodos ]
        });
    }

    return (
        <List sx={{ width: '100%', maxWidth: 560 }}>
            <h1>Todo List!</h1>
            <hr />
            <Box>
                <h3>Add New Todo:</h3>
                <AddTodo onAddItem={addTodo} />
            </Box>
            <hr />
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
        </List>
    );
}
