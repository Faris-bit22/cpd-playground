import { Pressable, Text, View } from 'react-native';
import { styles } from './styles';

export default function FilterBar({ filter, onChange }) {
    return (
        <View style={styles.row}>
            {['all', 'active', 'done'].map(item => (
                <Pressable
                    key={item}
                    onPress={() => onChange(item)}
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
    );
}