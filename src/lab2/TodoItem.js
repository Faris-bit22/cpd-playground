import { Pressable, Text, View } from 'react-native';
import { styles } from './styles';

export default function TodoItem({ todo, onToggle, onRemove }) {
    return (
        <View style={styles.card}>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <Pressable
                    onPress={() => onToggle(todo.id)}
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

                <Pressable onPress={() => onRemove(todo.id)}>
                    <Text style={{ color: 'red' }}>Delete</Text>
                </Pressable>
            </View>
        </View>
    );
}