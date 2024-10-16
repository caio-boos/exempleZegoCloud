import{StyleSheet} from 'react-native';
import { themas } from '../../global/themas';

export const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:100,
        flexDirection:'row',
        alignItems:'flex-start',
        justifyContent:'flex-start',
    },
    text:{
        color:themas.colors.secondary
    },
    btn:{
        width:40,
        height:40,
        position:'absolute',
        right:20,
        top:20,
        // backgroundColor:'red',
        alignItems:'center',
        justifyContent:'center'
    },
    icon:{
        width:30,
        height:30,
    }
})