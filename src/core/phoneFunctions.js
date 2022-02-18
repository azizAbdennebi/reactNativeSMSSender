import AsyncStorage from "@react-native-async-storage/async-storage";

const setPhoneNumber = (num) => {
  try {
    AsyncStorage.setItem("PhoneNumber", num);
  } catch (e) {
    console.error(e);
    // saving error
  }
};

const getPhoneNumber = async () => {
  try {
    const value = await AsyncStorage.getItem("PhoneNumber");
    if (value !== null) {
      // value previously stored
      return value;
    }
    return "";
  } catch (e) {
    // error reading value
    console.log("err:", e);
  }
};

export default { setPhoneNumber, getPhoneNumber };
