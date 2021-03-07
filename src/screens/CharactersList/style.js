import { StyleSheet, useWindowDimensions, Image, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default () => {
    const { width } = useWindowDimensions();
    const { top, bottom } = useSafeAreaInsets();

    const logo = Image.resolveAssetSource(require('src/assets/logo.png'));
    const logoWidth = width * 40 / 100;
    const logoHeight = (logo.height * logoWidth) / logo.width;

    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: "#000"
        },
        toolbar: {
            width: '100%',
            height: top + logoHeight + 10,
            backgroundColor: '#111',
            borderBottomLeftRadius: 40,
            borderBottomRightRadius: 40,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: '6%'
        },
        logo: {
            width: logoWidth,
            height: logoHeight
        },
        searchButton: {
            width: 44,
            height: 44,
            backgroundColor: 'transparent',
            position: 'absolute',
            top: '60%',
            right: '2%',
            borderRadius: 22
        },
        searchIcon: {
            tintColor: "red",
            width: 20,
            height: 20
        },
        contentContainerStyle: {
            paddingTop: 10,
            paddingBottom: bottom + 10
        },
        heroCard: {
            width: '90%',
            height: 200,
            backgroundColor: 'transparent',
            alignSelf: 'center',
            marginVertical: '2%',
            borderRadius: 20,
            overflow: 'hidden'
        },
        cover: {
            width: '100%',
            height: '100%'
        },
        footerView: {
            width: '100%',
            height: 40,
            position: 'absolute',
            bottom: 0,
            justifyContent: 'center',
            alignItems: 'center'
        },
        cardTitle: {
            fontSize: 16,
            color: '#fff',
            fontWeight: "bold"
        },
        indicator: {
            marginTop: '30%'
        }
    });
}