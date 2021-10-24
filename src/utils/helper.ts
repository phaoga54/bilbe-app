import AsyncStorage from "@react-native-async-storage/async-storage"

export { }

export const storeValue = async (key: string, value: string) => {
    try {
        await AsyncStorage.setItem(key, value)
    } catch (e) {
        // saving error
    }
}
export const getValue = async (key:string) => {
    try {
        const value = await AsyncStorage.getItem(key)
        if (value !== null) {
            return value
        }
    } catch (e) {
        // error reading value
        console.log('error at getData: ',e)
        return ''
    }
}