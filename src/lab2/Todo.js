import { useState } from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

import AddTodo from './AddTodo';
import FilterBar from './FilterBar';
import TodoItem from './TodoItem';

export default function Todo() {
    const [todos, setTodos] = useState([
        { id: '1', title: 'Install Expo Go', done: true },
        { id: '2', title: 'Finish Lab 2', done: false },
    ]);

    const [filter, setFilter] = useState('all');

    const remaining = todos.filter(todo => !todo.done).length;

    const visibleTodos = todos.filter(todo => {
        if (filter === 'active') {
            return !todo.done;
        }

        if (filter === 'done') {
            return todo.done;
        }

        return true;
    });

    function addTodo(title) {
        const newTodo = {
            id: Date.now().toString(),
            title: title,
            done: false,
        };

        setTodos(previous => [...previous, newTodo]);
    }

    function removeTodo(id) {
        setTodos(previous =>
            previous.filter(todo => todo.id !== id)
        );
    }

    function toggleTodo(id) {
        setTodos(previous =>
            previous.map(todo =>
                todo.id === id
                    ? { ...todo, done: !todo.done }
                    : todo
            )
        );
    }

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>My To-Do List</Text>

            <Text style={styles.muted}>
                {remaining} left
            </Text>

            <AddTodo onAdd={addTodo} />

            <FilterBar
                filter={filter}
                onChange={setFilter}
            />

            {todos.length === 0 ? (
                <Text style={styles.muted}>No tasks yet</Text>
            ) : (
                visibleTodos.map(todo => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        onToggle={toggleTodo}
                        onRemove={removeTodo}
                    />
                ))
            )}
        </View>
    );
}