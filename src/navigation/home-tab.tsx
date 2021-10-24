
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { DetailScreen } from '@src/screens/chapter-screen';
import { HomeScreen } from '@src/screens/home-screen';
import { VerseScreen } from '@src/screens/verse-screen';

const Stack = createStackNavigator();

export const HomeStack = () => {
    return (
        <Stack.Navigator
            initialRouteName={"BookList"}
            headerMode={'none'}
        >
            <Stack.Screen name="BookList" component={HomeScreen} />
            <Stack.Screen name="Detail" component={DetailScreen} />
            <Stack.Screen name="Verse" component={VerseScreen} />
        </Stack.Navigator>
    )
}