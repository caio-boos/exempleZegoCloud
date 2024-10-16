import{StyleSheet} from 'react-native';
import { themas } from '../../global/themas';

export const styles = StyleSheet.create({
    container:{
        backgroundColor:themas.colors.primary,
        flex:1,
        padding:20
    },
    title:{
        color:themas.colors.secondary,
        fontSize:20
    },
    listUserRecents:{
        marginTop:20,
        height:100
    },
    itemSeparetor:{ 
        borderWidth: 0.2, 
        borderColor: themas.colors.primaryLigth 
    }
})