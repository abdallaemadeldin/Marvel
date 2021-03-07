import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default () => {
    const { top, bottom } = useSafeAreaInsets();

    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#000',
            paddingTop: 310
        },
        cover: {
            width: '100%',
            height: 300,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            position: 'absolute',
            top: 0
        },
        heroName: {
            fontSize: 30,
            color: '#fff',
            marginVertical: '4%',
            fontWeight: 'bold'
        },
        backButton: {
            width: 65,
            height: 44,
            borderTopRightRadius: 22,
            borderBottomRightRadius: 22,
            backgroundColor: '#0006',
            position: 'absolute',
            zIndex: 10,
            left: 0,
            top: top + 30,
            justifyContent: 'center',
            alignItems: 'center'
        },
        backIcon: {
            width: 24,
            height: 24,
            tintColor: "#fff"
        },
        sectionTitle: {
            fontSize: 16,
            color: "#eb344c",
            marginTop: '4%',
            fontWeight: '500',
            marginBottom: '2%'
        },
        descriptionText: {
            color: '#fff',
            fontWeight: '300',
            fontSize: 14
        },
        contentContainerStyle: {
            marginHorizontal: '4%',
            paddingBottom: bottom + 20
        },
        card: {
            width: 150,
            height: 260,
            backgroundColor: 'transparent',
            marginEnd: 10
        },
        cardCover: {
            width: 150,
            height: 220,
            borderRadius: 20
        },
        cardTitle: {
            fontSize: 12,
            color: '#fff',
            textAlign: 'center',
            marginVertical: '6%'
        }
    });
}