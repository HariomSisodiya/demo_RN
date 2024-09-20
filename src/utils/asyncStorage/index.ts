import AsyncStorage from '@react-native-async-storage/async-storage';

export const setStorageItem = async (key: string, data: any) => {
  let formattedData = data;
  if (typeof data !== 'string') {
    formattedData = JSON.stringify(data);
  }
  await AsyncStorage.setItem(key, formattedData);
};

export const getStorageItem = async (key: string) => {
  const data: any = await AsyncStorage.getItem(key);
  const formattedData = await JSON.parse(data);
  return formattedData;
};
