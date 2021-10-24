import { Header } from '@src/components/Header';
import { favouriteVerse, getVerses } from '@src/redux/reducers/config-reducer';
import { getVerse } from '@src/services';
import * as React from 'react';
import { useEffect, useState } from 'react'
import { FlatList, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

export const VerseScreen = ({ route }: { route: any }) => {
    const [arrVerse, setArrVerse] = useState<any[]>([])
    const { chapter, bookName } = route.params
    const [currentVerse, setCurrentVerse] = useState(1)
    let shouldLoadmore = React.useRef(true).current
    const dispatch = useDispatch()
    const verses = useSelector(getVerses)

    const _renderItem = ({ item }: { item: any }) => {
        let text = item.text
        return <TouchableOpacity
            style={[{ paddingHorizontal: 20, }, verses[text] && { backgroundColor: 'yellow' }]}
            onPress={() => {
                dispatch(favouriteVerse({ verse: text }))
            }}
        >
            <Text>{item.text}</Text>
        </TouchableOpacity>
    }
    const getVersePaging = async () => {
        let counter = 5;
        if (!shouldLoadmore) return
        while (true) {
            if (counter == 0) {
                shouldLoadmore = false
                break;
            }
            let result = await getVerse(bookName, chapter, currentVerse, currentVerse + counter)
            if (result) {
                setCurrentVerse(currentVerse + counter)
                console.log('currentVerse: ', currentVerse)
                setArrVerse([...arrVerse, ...result?.data?.verses])
                break;
            }
            counter--;
        }
    }
    useEffect(() => {
        getVersePaging()
    }, [])
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <Header header={'Chapter ' + chapter} />
            <FlatList
                data={arrVerse}
                renderItem={_renderItem}
                keyExtractor={(_, index) => index + ''}
                initialNumToRender={15}
                onEndReached={() => {
                    console.log('endReach')
                    getVersePaging()
                }}
                onEndReachedThreshold={0.5}
            />
        </SafeAreaView>
    );
}