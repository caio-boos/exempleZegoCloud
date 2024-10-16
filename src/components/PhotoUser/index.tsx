import React from "react";

import {Text, View,ImageBackground} from 'react-native'
import { styles } from "./styles";

type Prop = {
    name?:string,
    image:any
}

export default function PhotoUser({...rest}:Prop){
    return (
        <View style={styles.container}>
            <ImageBackground  
                style={styles.box} 
                source={rest.image}
                resizeMode="cover"
            >

            </ImageBackground >
            <Text style={styles.text}>{rest?.name||''}</Text>
        </View>
    )
}