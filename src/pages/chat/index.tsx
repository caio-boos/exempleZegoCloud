import React from "react";
import { styles } from "./styles";
import Arrayuser from "../../global/users";
import CardUser from "../../components/CardUser";
import PhotoUser from "../../components/PhotoUser";
import { useNavigation } from '@react-navigation/native';
import { ScrollView, Text, View,FlatList} from 'react-native'

export default function Chat(){

    const navigation = useNavigation<any>();
    const _renderPhotoUser = () => {
        const Array:any = [];
    
        Arrayuser.slice(-4).map((item, index) => {
            Array.push(
                <PhotoUser 
                    image={item.image}
                    name={item.name}
                    key={index}
                />
            );
        });
    
        return Array;
    };

    const onJoinPress = (callID:string) => {
        navigation.navigate('CallPage', {
            userID: String(Math.floor(Math.random() * 100000)),
            userName: String(Math.floor(Math.random() * 100000)),
            callID:callID
        })
    }
    

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Recents</Text>
            {/* <View style={styles.listUserRecents}>
                <ScrollView 
                    horizontal 
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingHorizontal: 10 }} 
                >
                    {_renderPhotoUser()}
                </ScrollView>
            </View> */}
            <FlatList 
                data={Arrayuser}
                style={{marginTop:10}}
                keyExtractor={(item,index)=>index.toString()}
                showsVerticalScrollIndicator={false}
                renderItem={({item,index})=>{
                    return  (
                        <CardUser 
                            image={item.image} 
                            name={item.name} 
                            onPress={()=>onJoinPress(item.callId)} 
                        />)
                }}
                ItemSeparatorComponent={() => (<View style={styles.itemSeparetor} />)}
            />
        </View>
    )
}
