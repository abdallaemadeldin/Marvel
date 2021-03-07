import React, { memo } from 'react';
import { View, ImageBackground, Image } from 'react-native';
import { useSplash } from 'src/hooks';
import style from './style';

const Splash = () => {
    const { container, subContainer, logo } = style();
    useSplash();

    return (
        <ImageBackground style={container} source={require('src/assets/background.jpeg')} blurRadius={10}>
            <View style={subContainer}>
                <Image source={require('src/assets/logo.png')} style={logo} />
            </View>
        </ImageBackground>
    );
}

export default memo(Splash);