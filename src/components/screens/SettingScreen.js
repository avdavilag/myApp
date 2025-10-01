import React from 'react';
import { View, Text,Button} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function SettingScreen(props) {
    const {navigation} = props;

    const goToHome= (pageName) =>{
        navigation.navigate(pageName);
    }
    return (
          <SafeAreaView>
            <Text>Estamos en SettingScreen</Text>
            <Text>Estamos en SettingScreen</Text>
            <Text>Estamos en SettingScreen</Text>
            <Text>Estamos en SettingScreen</Text>
            <Text>Estamos en SettingScreen</Text>
            <Text>Estamos en SettingScreen</Text>
            <Text>Estamos en SettingScreen</Text>
            <Button onPress={() => goToHome("Home")} title="Ir a Home" />
        </SafeAreaView>
    );
}