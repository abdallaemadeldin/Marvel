import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import Splash from 'src/screens/Splash/Splash';
import CharactersList from 'src/screens/CharactersList/CharactersList';
import CharacterDetails from 'src/screens/CharacterDetails/CharacterDetails';

const Stack = createStackNavigator();

export default WindowStack = () => {
    return (
        <>
            <NavigationContainer>
                <Stack.Navigator mode="card" headerMode="none" initialRouteName={"Splash"} screenOptions={{
                    animationEnabled: true,
                    cardOverlayEnabled: true,
                    cardShadowEnabled: true
                }}>
                    <Stack.Screen name="Splash" component={Splash} />
                    <Stack.Screen name="CharactersList" component={CharactersList} />
                    <Stack.Screen name="CharacterDetails" component={CharacterDetails} options={{ cardStyleInterpolator: CardStyleInterpolators.forRevealFromBottomAndroid }} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}