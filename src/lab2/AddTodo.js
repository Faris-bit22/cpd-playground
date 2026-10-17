import { useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import { styles } from './styles';

export default function AddTodo({ onAdd }) {
    const [text, setText] = useState('');

    function handleAdd() {
        const title = text.trim();

        if (title === '') {
            return;
        }

        onAdd(title);
        setText('');
    }

    return (
        <View style={{ gap: 12 }}>
            <TextInput
                style={styles.input}
                placeholder="New task"
                value={text}
                onChangeText={setText}
            />

            <Pressable style={styles.button} onPress={handleAdd}>
                <Text style={styles.buttonText}>Add</Text>
            </Pressable>
        </View>
    );
}