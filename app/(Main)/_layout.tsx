import { Tabs } from 'expo-router';

import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';


export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#ffd33d',
        headerShown:false
      }}
    >
      <Tabs.Screen
        name="temp"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
          ),
          headerShown:false
        }}
      />
      <Tabs.Screen
        name="ToDoList"
        options={{
          title: 'About',
          tabBarIcon: ({ color, focused }) => (
<Entypo name={focused ? 'add-to-list' : 'list'} size={24} color={color} />
          ),
          headerShown:false
        }}
      />
      <Tabs.Screen
        name="CameraApp"
        options={{
          title: 'Camera',
          tabBarIcon: ({ color, focused }) => (
            <AntDesign name={focused ? 'camera' : 'camerao'} color={color} size={24} />
          ),
          headerShown:false
        }}
      />
      <Tabs.Screen
        name="NewsApp"
        options={{
          title: 'News',
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome name="newspaper-o" size={22} color={color} />          
          ),
        }}
      />

    </Tabs>
  );
}
