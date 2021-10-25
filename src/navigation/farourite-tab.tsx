
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { DetailScreen } from '@src/screens/chapter-screen';
import { HomeScreen } from '@src/screens/home-screen';
import { VerseScreen } from '@src/screens/verse-screen';
import { FavouriteScreen } from '@src/screens/setting-screen';

const Stack = createStackNavigator();

export const FavouriteStack = () => {
    return (
        <Stack.Navigator
            initialRouteName={"Favourite"}
            headerMode={'none'}
        >
            <Stack.Screen name="Favourite" component={FavouriteScreen} />
            <Stack.Screen name="Verse" component={VerseScreen} />
        </Stack.Navigator>
    )
}