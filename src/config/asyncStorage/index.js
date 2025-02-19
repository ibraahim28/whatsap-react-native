import AsyncStorage from '@react-native-async-storage/async-storage';


export const uploadStatus = async (statuses) => {
    try {
        const data = Array.isArray(statuses) ? statuses : [];
        await AsyncStorage.setItem('statuses', JSON.stringify(data));
    } catch (error) {
        console.error("Error saving statuses:", error);
    }
};

export const getStatus = async () => {
    try {
        const statuses = await AsyncStorage.getItem('statuses');
        return statuses ? JSON.parse(statuses) : [];
    } catch (error) {
        console.error(error);
        return [];  
    }
};

