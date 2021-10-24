import { decremented, getCounterValue, incremented } from '@src/redux/reducers/config-reducer';
import * as React from 'react';
import { Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

export const HomeScreen = () => {
    const counter = useSelector(getCounterValue)
    const dispatch = useDispatch()

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home!</Text>
            <Text>------------------------</Text>
            <Text>Counter value: {counter}</Text>
            <View style={{ flexDirection: 'row',width:30,justifyContent:'space-between' }}>
                <Text onPress={() => dispatch(incremented({ value: 1 }))}>+</Text>
                <Text onPress={() => dispatch(decremented({ value: 1 }))}>-</Text>
            </View>
        </View>
    );
}