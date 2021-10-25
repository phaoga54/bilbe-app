import AsyncStorage from "@react-native-async-storage/async-storage"
import { IVerse } from "@src/redux/reducers/config-reducer/model"

export { }

export const storeValue = async (key: string, value: string) => {
    try {
        await AsyncStorage.setItem(key, value)
    } catch (e) {
        // saving error
    }
}
export const getValue = async (key: string) => {
    try {
        const value = await AsyncStorage.getItem(key)
        if (value !== null) {
            return value
        }
    } catch (e) {
        // error reading value
        console.log('error at getData: ', e)
        return ''
    }
}

export const groupByKey = (array: any) => {
    let returnedArray: Array<{ title: string, data: Array<any> }> = []
    // console.log('array: ', array)
    Object.keys(array).filter(key => {
        let formatedKey = key.substr(0, key.lastIndexOf('-'))
        let index = returnedArray.findIndex(item => item.title == formatedKey)
        // console.log('object: ', array[key])
        if (index === -1) {
            returnedArray.push({ title: formatedKey, data: [array[key]] })
        } else {
            returnedArray[index].data.push(array[key])
        }
    })
    return returnedArray
}