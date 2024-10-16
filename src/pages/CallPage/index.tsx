import React, { useEffect } from 'react';

import { StyleSheet, View, Text, Button, Image } from 'react-native';
import ZegoUIKitPrebuiltCallService, { ZegoUIKitPrebuiltCall, GROUP_VIDEO_CALL_CONFIG, GROUP_VOICE_CALL_CONFIG } from '@zegocloud/zego-uikit-prebuilt-call-rn';
import KeyCenter from "../../../KeyCenter";
import {styles} from './styles'
export default function CallPage(props:any) {
    const { route } = props;
    const { params } = route;
    const { userID, userName,callID } = params;

    return (
        <View style={styles.container}>
            <ZegoUIKitPrebuiltCall 
                appID={KeyCenter.appID}
                appSign={KeyCenter.appSign}
                userID={userID}
                userName={userName}
                callID={callID}

                config={{
                  ...GROUP_VIDEO_CALL_CONFIG,
                  onCallEnd: () => {
                    props.navigation.navigate('HomePage');
                  },
                  timingConfig: {
                    isDurationVisible: true,
                    onDurationUpdate: (duration:number) => {
                      console.log('########CallWithInvitation onDurationUpdate', duration);
                      if (duration === 10 * 60) {
                        ZegoUIKitPrebuiltCallService.hangUp();
                      }
                    }
                  },
                  avatarBuilder: ({userInfo}:any) => {
                    return <View style={{width: '100%', height: '100%'}}>
                     <Image
                      style={{ width: '100%', height: '100%' }}
                      resizeMode="cover"
                      source={{ uri: `https://robohash.org/${userInfo.userID}.png` }}
                      />
                    </View>
                  },
              }}
            />
        </View>
    );
}
