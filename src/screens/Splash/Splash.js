import React, { memo } from 'react';
import { View } from 'react-native';
import style from './style';

const Splash = () => {
    const { container } = style;
    return (
        <View style={container}>

        </View>
    );
}

export default memo(Splash);