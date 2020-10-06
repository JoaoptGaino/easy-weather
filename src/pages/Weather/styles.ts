import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#91C397'
    },
    inputBlock:{
        marginBottom:32
    },
    label:{
        fontFamily:'Roboto_700Bold',
        fontSize:24,
        color:'#fff'
    },
    block:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    input: {
        height: 60,
        width:300,
        backgroundColor: '#FFF',
        borderRadius: 10,
        marginBottom: 8,
        paddingHorizontal:12,
        fontSize: 16,
        color:'#000',
        fontFamily:'Roboto_700Bold'
    },
    button: {   
        height: 60,
        borderRadius: 10,
        marginBottom: 8,
        paddingHorizontal:12,
        overflow: 'hidden',
        alignItems: 'center',
    },
    buttonIcon: {
        height:60,
        width:60,
        borderRadius: 10,
        marginBottom: 8,
        backgroundColor: '#7EAA83',
        justifyContent: 'center',
        alignItems: 'center'
    },
});
export default styles;