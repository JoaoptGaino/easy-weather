import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#7EAA83',
        padding: 20
    },
    topBar: {
        paddingTop: 10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    header: {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    title: {
        fontFamily:'Anton_400Regular',
        color:'#fff',
        fontSize:24,
        lineHeight:32,
        maxWidth:160,
        marginVertical:40,
        textAlign:'center'
    }
})
export default styles;