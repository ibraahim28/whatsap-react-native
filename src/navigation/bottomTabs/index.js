import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StatusPage from "../../screens/StatusPage";
import CameraScreen from "../../screens/CameraScreen";
import Chats from "../../screens/Chats";
import MyStack from "../native-stack";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{headerShown : false, tabBarStyle : {backgroundColor : '#0e131c', borderTopColor : '#8f96a1'}}}>
      <Tab.Screen name="Home" component={Chats} />
      <Tab.Screen name="Status" component={StatusPage} />
    </Tab.Navigator>
  );
}

export default MyTabs;
