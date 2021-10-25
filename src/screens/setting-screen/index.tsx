import { useNavigation } from '@react-navigation/core';
import { Header } from '@src/components/Header';
import { favouriteVerse, getVerses } from '@src/redux/reducers/config-reducer';
import { IVerse } from '@src/redux/reducers/config-reducer/model';
import { getVerse } from '@src/services';
import { groupByKey } from '@src/utils/helper';
import * as React from 'react';
import { useEffect, useState } from 'react'
import { FlatList, SafeAreaView, SectionList, Text, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

export const FavouriteScreen = ({ route }: { route: any }) => {
    const navigation = useNavigation()
    const verses = useSelector(getVerses)

    const _renderItem = ({ item }: { item: IVerse }) => {
        return <TouchableOpacity
            style={[{ paddingHorizontal: 20, }]}
            onPress={() => {
                console.log('item: ', { ...item })
                navigation.navigate("Verse", { ...item })
            }}
        >
            <Text>{item.text}</Text>
        </TouchableOpacity>
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <Header header={'Favourited Verse'} />
            <SectionList
                sections={groupByKey(verses)}
                style={{ paddingHorizontal: 20 }}
                renderItem={_renderItem}
                keyExtractor={(_, index) => index + ''}
                initialNumToRender={15}
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={{ fontWeight: '600', backgroundColor: 'white' }}>{title}</Text>
                )}
            />
        </SafeAreaView>
    );
}