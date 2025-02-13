// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import DiscountOrderrStack from '../routes/DiscountOrderrStack';
// import MessageChatStack from '../routes/MessageChatStack';
// import Notification from '../pages/Notification';
// import SubscriptionStack from '../routes/SubscriptionStack';
// import ProfilePage from '../pages/ProfilePage';
// import Icon from 'react-native-vector-icons/Ionicons';
// import HomeOrderrStack from '../routes/HomeOrderrStack';
// import HomeOrderrStack1 from '../routes/HomeOrderrStack1';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DiscountOrderrStack from '../routes/DiscountOrderrStack';
import MessageChatStack from '../routes/MessageChatStack';
import Notification from '../pages/Notification';
import SubscriptionStack from '../routes/SubscriptionStack';
import ProfilePage from '../pages/ProfilePage';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeOrderrStack from '../routes/HomeOrderrStack';
import HomeOrderrStack1 from '../routes/HomeOrderrStack1'

const Tab = createBottomTabNavigator();

export default function Navigation({navigation}) {
  return (
    <Tab.Navigator
      screenOptions={
       
        ({ route }) => ({

        tabBarActiveTintColor: '#28B41E',
        tabBarInactiveTintColor: 'black',
        tabBarStyle: [
          {
            display: "flex",
            backgroundColor: '#EFFAEE',
            borderRadius: 30,
            // width: 300,
            width: '95%',
            // paddingTop:50,
            height: 60,
            borderRadius: 20,
            width: '97%',
            alignSelf: 'center',
            justifyContent: 'center',
          },
          null
        ],

        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "HomeOrderrStack" ) {
            iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'MessageChatStack') {
            iconName = focused ? 'chatbubble-ellipses' : 'chatbubble-ellipses-outline';
            // } else if (route.name === 'DiscountOrderrStack') {
            } else if (route.name === 'CartStack') {
                iconName = focused ? 'today' : 'today-outline';
            } else if (route.name === 'Notification') {
                iconName = focused ? 'notifications' : 'notifications-outline';
            } else if (route.name === 'SubscriptionStack') {
                iconName = focused ? 'person' : 'person-outline';
            }

          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}>

      <Tab.Screen 
      name="HomeOrderrStack" 
      component={HomeOrderrStack} 
      options={{
        tabBarLabel: () => null, // remove the label for the Home screen
        header: () => null,   //remove the default header
      }}/>

      <Tab.Screen 
      name="MessageChatStack" 
      component={MessageChatStack}
      options={{
        tabBarLabel: () => null, // remove the label for the Home screen
        header: () => null,   //remove the default header
        tabBarStyle: { display: "none" },
      }}/>

      <Tab.Screen 
          name="CartStack" 
          component={HomeOrderrStack1}
      options={{
        tabBarLabel: () => null, // remove the label for the Home screen
        header: () => null,   //remove the default header
      }}/>

      <Tab.Screen 
      name="Notification" 
      component={Notification} 
      options={{
        tabBarLabel: () => null, // remove the label for the Home screen
        header: () => null,   //remove the default header
      }}/>

      <Tab.Screen 
      name="SubscriptionStack" 
      component={SubscriptionStack} 
      options={{
        tabBarLabel: () => null, // remove the label for the Home screen
        header: () => null,   //remove the default header
        tabBarStyle: { display: "none" },
      }}/>

    </Tab.Navigator>
  );
}