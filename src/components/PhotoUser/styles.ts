import{StyleSheet} from 'react-native';
import { themas } from '../../global/themas';

export const styles = StyleSheet.create({
    box:{
        width:60,
        height:60,
        backgroundColor:'#FFF',
        borderRadius:30,
        overflow: 'hidden',
    },
    container:{
        alignItems:'center',
        justifyContent:'center',
        marginRight:10,
        // backgroundColor:'blue',
        height:100
    },
    text:{
        marginTop:4,
        color:themas.colors.secondary
    }
})