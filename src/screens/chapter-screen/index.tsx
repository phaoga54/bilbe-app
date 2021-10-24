import { useNavigation } from '@react-navigation/core';
import { Header } from '@src/components/Header';
import * as React from 'react';
import { useEffect, useState } from 'react'
import { FlatList, SafeAreaView, Text, TouchableOpacity } from 'react-native';

export const DetailScreen = ({ route }: { route: any }) => {
    const { bookName, maxChapter } = route.params
    const navigation = useNavigation()
    const [arrChapter, setArrChapter] = useState<any[]>([])

    const _renderItem = ({ index }: { index: number }) => {
        return <TouchableOpacity style={{ padding: 20 }}
            onPress={() => {
                navigation.navigate('Verse', { chapter: index + 1, bookName })
            }}
        >
            <Text>Chapter {index + 1}</Text>
        </TouchableOpacity>
    }
    useEffect(() => {
        let array = new Array(maxChapter || 0).fill('book')
        setArrChapter(array)
    }, [])
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <Header header={bookName} />
            <FlatList
                data={arrChapter}
                renderItem={_renderItem}
                keyExtractor={(_, index) => index + ''}
                initialNumToRender={15}
            />
        </SafeAreaView>
    );
}