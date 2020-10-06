import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#91C397'
    },
    title: {
        color: '#fff',
        fontWeight: '400',
        fontSize: 64,
        fontFamily: 'Anton_400Regular'
    },
    main: {
        paddingTop: 32,
    },
    subtitle: {
        color: '#fff',
        fontSize: 24,
        fontFamily: 'Roboto_700Bold'
    },
    button: {
        backgroundColor: '#7EAA83',
        height: 60,
        flexDirection: 'row',
        borderRadius: 10,
        overflow: 'hidden',
        alignItems: 'center',
        marginTop: 8,
    },
    buttonIcon: {
        height: 60,
        width: 60,
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        color: '#FFF',
        fontFamily: 'Roboto_700Bold',
        fontSize: 20,
    }
});

export default styles;