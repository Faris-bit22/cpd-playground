import { useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import { styles } from './styles';

export default function Todo() {
    const [todos, setTodos] = useState([
        { id: '1', title: 'Install Expo Go', done: true },
        { id: '2', title: 'Finish Lab 2', done: false },
    ]);

    const [text, setText] = useState('');

    // Broj nezavrsenih zadataka
    const remaining = todos.filter(todo => !todo.done).length;

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

    // Task 6 - Oznacavanje zavrsenih zadataka
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

            {todos.length === 0 ? (
                <Text style={styles.muted}>No tasks yet</Text>
            ) : (
                todos.map(todo => (
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