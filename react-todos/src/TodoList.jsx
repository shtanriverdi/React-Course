import List from '@mui/material/List';
import { todoItems } from './TodoItems.js';
import TodoItem from './TodoItem.jsx';
import { useState } from 'react';

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

    const editTodo = (id) => {
        console.log("editTodo ", id);
    }

    return (
        <List sx={{ width: '100%', maxWidth: 560 }}>
            {
                todos.map(item =>
                    <TodoItem
                        key={item.id}
                        item={item}
                        onDelete={() => removeTodo(item.id)}
                        onEdit={() => editTodo(item.id)}
                    />
                )
            }
        </List>
    );
}
