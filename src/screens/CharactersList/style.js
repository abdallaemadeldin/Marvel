import { StyleSheet, useWindowDimensions } from 'react-native';

export default () => {
    const { width } = useWindowDimensions();

    return StyleSheet.create({
        container: {
            flex: 1
        }
    });
}