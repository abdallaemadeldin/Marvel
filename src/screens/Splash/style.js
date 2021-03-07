import { StyleSheet, Image, useWindowDimensions } from 'react-native';

export default () => {
    const { width } = useWindowDimensions();

    const logo = Image.resolveAssetSource(require('src/assets/logo.png'));
    const logoWidth = width * 80 / 100;
    const logoHeight = (logo.height * logoWidth) / logo.width;

    return StyleSheet.create({
        container: {
            flex: 1
        },
        subContainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#000000bb'
        },
        logo: {
            width: logoWidth,
            height: logoHeight
        }
    });
}