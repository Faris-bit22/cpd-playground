import { useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import { styles } from './styles';

export default function Todo() {
    const [todos, setTodos] = useState([
        { id: '1', title: 'Install Expo Go', done: true },
        { id: '2', title: 'Finish Lab 2', done: false },
    ]);

    const [text, setText] = useState('');

    // Task 7 - Trenutno odabrani filter
    const [filter, setFilter] = useState('all');

    // Task 6 - Broj nezavrsenih zadataka
    const remaining = todos.filter(todo => !todo.done).length;

    // Task 7 - Filtriranje zadataka
    const visibleTodos = todos.filter(todo => {
        if (filter === 'active') {
            return !todo.done;
        }

        if (filter === 'done') {
            return todo.done;
        }

        return true;
    });

    function addTodo() {
        const title = text.trim();

        if (title === '') {
            return;
        }

        const newTodo = {
            id: Date.now().toString(),
            title: title,
            done: false,
        };

        setTodos(previous => [...previous, newTodo]);
        setText('');
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

            <TextInput
                style={styles.input}
                placeholder="New task"
                value={text}
                onChangeText={setText}
            />

            <Pressable style={styles.button} onPress={addTodo}>
                <Text style={styles.buttonText}>Add</Text>
            </Pressable>

            {/* Task 7 - Filter dugmad */}
            <View style={styles.row}>
                {['all', 'active', 'done'].map(item => (
                    <Pressable
                        key={item}
                        onPress={() => setFilter(item)}
                        style={[
                            styles.button,
                            {
                                backgroundColor:
                                    filter === item ? '#003A6D' : '#9AA6B5',
                                flex: 1,
                            },
                        ]}
                    >
                        <Text style={styles.buttonText}>
                            {item === 'all'
                                ? 'All'
                                : item === 'active'
                                    ? 'Active'
                                    : 'Done'}
                        </Text>
                    </Pressable>
                ))}
            </View>

            {/* Lista zadataka */}
            {todos.length === 0 ? (
                <Text style={styles.muted}>No tasks yet</Text>
            ) : (
                visibleTodos.map(todo => (
                    <View key={todo.id} style={styles.card}>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}
                        >
                            <Pressable
                                onPress={() => toggleTodo(todo.id)}
                                style={{ flex: 1 }}
                            >
                                <Text
                                    style={{
                                        textDecorationLine: todo.done
                                            ? 'line-through'
                                            : 'none',
                                        color: todo.done ? '#777777' : '#000000',
                                    }}
                                >
                                    {todo.title}
                                </Text>
                            </Pressable>

                            <Pressable onPress={() => removeTodo(todo.id)}>
                                <Text style={{ color: 'red' }}>Delete</Text>
                            </Pressable>
                        </View>
                    </View>
                ))
            )}
        </View>
    );
}