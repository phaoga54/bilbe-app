import { useNavigation } from '@react-navigation/core';
import { Header } from '@src/components/Header';
import { BOOKS, IBook } from '@src/constant/data';
import { decremented, getCounterValue, incremented } from '@src/redux/reducers/config-reducer';
import * as React from 'react';
import { FlatList, SafeAreaView, SectionList, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

export const HomeScreen = ({ }) => {
    const navigation = useNavigation()
    const counter = useSelector(getCounterValue)
    const dispatch = useDispatch()
    // console.log('navigation: ', navigation)
    const _renderItem = ({ item }: { item: IBook }) => {
        return <TouchableOpacity style={{ padding: 20 }}
            onPress={() => { navigation.navigate('Detail', { bookName: item.title, maxChapter: item.maxChapter }) }}
        >
            <Text>{item.title} <Text>({item.maxChapter})</Text></Text>
        </TouchableOpacity>
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <Header header={'Book list'} />
            <SectionList
                sections={BOOKS}
                keyExtractor={(item, index) => item.title}
                renderItem={_renderItem}
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={{ fontWeight: '600' }}>{title}</Text>
                )}
                style={{ marginLeft: 20 }}
                initialNumToRender={15}
            />
        </SafeAreaView>
    );
}