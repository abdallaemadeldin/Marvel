import React, { memo } from 'react';
import { View } from 'react-native';
import style from './style';

const CharactersList = () => {
    const { container } = style();
    return (
        <View style={container}>
        </View>
    );
}

export default memo(CharactersList);