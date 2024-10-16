import React from "react";

import {Text, View,ImageBackground, TouchableOpacity, Image,TouchableOpacityProps} from 'react-native'
import { styles } from "./styles";
import PhotoUser from "../PhotoUser";
import Icon from '../../assets/iconCall.png'
type Prop  = TouchableOpacityProps&{
    name?:string,
    image:any,
}

export default function CardUser({...rest}:Prop){
    return (
        <View style={styles.container}> 
           <PhotoUser image={rest?.image}/>
           <Text style={styles.text}>{rest.name}</Text>
           <TouchableOpacity style={styles.btn}
            {...rest}
           >
                <Image 
                    source={Icon}
                    style={styles.icon}
                />
           </TouchableOpacity>
        </View>
    )
}