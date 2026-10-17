import { useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import { styles } from './styles';

export default function Todo() {
    const [todos, setTodos] = useState([
        { id: '1', title: 'Install Expo Go', done: true },
        { id: '2', title: 'Finish Lab 2', done: false },
    ]);

    const [text, setText] = useState('');

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

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>My To-Do List</Text>

            <Text style={styles.muted}>
                {todos.length} tasks
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
                            <Text style={{ flex: 1 }}>
                                {todo.title}
                            </Text>

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