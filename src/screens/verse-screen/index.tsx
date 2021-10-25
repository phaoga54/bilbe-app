import { Header } from '@src/components/Header';
import { favouriteVerse, getVerses } from '@src/redux/reducers/config-reducer';
import { IVerse } from '@src/redux/reducers/config-reducer/model';
import { getVerse } from '@src/services';
import * as React from 'react';
import { useEffect, useState } from 'react'
import { FlatList, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

export const VerseScreen = ({ route }: { route: any }) => {
    const [arrVerse, setArrVerse] = useState<any[]>([])
    const [initScroll, setInitScroll] = useState(true)
    const { chapter, book_name, verse } = route.params
    const [currentVerse, setCurrentVerse] = useState(1)
    const flatlistRef = React.useRef()
    let shouldLoadmore = React.useRef(true).current
    const dispatch = useDispatch()
    const verses = useSelector(getVerses)

    const _renderItem = ({ item }: { item: IVerse }) => {
        let verse_id = item.book_name + '- Chapter ' + item.chapter + '-' + item.verse
        return <TouchableOpacity
            style={[{ paddingHorizontal: 20, }, verses[verse_id]?.text && { backgroundColor: 'yellow' }]}
            onPress={() => {
                dispatch(favouriteVerse({ ...item, verse_id }))
            }}
        >
            <Text>{item.text}</Text>
        </TouchableOpacity>
    }
    const getVersePaging = async () => {
        let counter = verse || 15;
        if (!shouldLoadmore) return
        while (true) {
            if (counter == 0) {
                shouldLoadmore = false
                break;
            }
            let result = await getVerse(book_name, chapter, currentVerse, currentVerse + counter)
            if (result) {
                setCurrentVerse(currentVerse + counter)
                setArrVerse([...arrVerse, ...result?.data?.verses])
                break;
            }
            if (counter == 15)
                counter = 5
            else counter--;
        }
    }

    useEffect(() => {
        // console.log('123123123', initScroll, verse, verse && initScroll)
        if (verse && initScroll && arrVerse?.length > 0) {
            // console.log('verse: ', verses)
            flatlistRef.current.scrollToIndex({ index: verse })
            setInitScroll(false)
        }
    }, [arrVerse?.length])

    useEffect(() => {
        getVersePaging()
    }, [])
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <Header header={'Chapter ' + chapter} />
            <FlatList
                ref={ref => flatlistRef.current = ref}
                data={arrVerse}
                renderItem={_renderItem}
                keyExtractor={(_, index) => index + ''}
                initialNumToRender={15}
                onEndReached={() => {
                    console.log('endReach')
                    getVersePaging()
                }}
                onEndReachedThreshold={0.5}

                onScrollToIndexFailed={info => {
                    const wait = new Promise(resolve => setTimeout(resolve, 500));
                    wait.then(() => {
                        flatlistRef.current?.scrollToIndex({ index: verse });
                    });
                }}
            />
        </SafeAreaView>
    );
}