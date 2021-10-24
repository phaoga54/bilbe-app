import * as React from 'react';
import { Text, useWindowDimensions, View } from 'react-native';

export const Header = ({ header }: { header: string }) => {
    const { width } = useWindowDimensions()
    return (
        <View style={{ width, flexDirection: 'row', justifyContent: 'center', paddingBottom: 20 }}>
            <Text style={{ fontWeight: '600' }}>{header}</Text>
        </View>
    );
}