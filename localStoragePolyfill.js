import AsyncStorage from '@react-native-async-storage/async-storage';

const localStoragePolyfill = {
  getItem: async (key) => {
    try {
      const value = await AsyncStorage.getItem(key);
      return value;
    } catch (e) {
      console.log(e);
      return null;
    }
  },
  setItem: async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (e) {
      console.log(e);
    }
  },
  removeItem: async (key) => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (e) {
      console.log(e);
    }
  },
  clear: async () => {
    try {
      await AsyncStorage.clear();
    } catch (e) {
      console.log(e);
    }
  },
  // Note: `key` and `length` properties could be added here for full compliance, 
  // but they are often not necessary for basic functionality.
};

window.localStorage = localStoragePolyfill;
