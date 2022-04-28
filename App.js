import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './src/screens/home.screen';

const Tab = createBottomTabNavigator();

const Saved = () => {
  return(
    <View>
      <Text></Text>
    </View>
  )
}

export default function App() {
  return (
  <>
    <NavigationContainer>
      <Tab.Navigator 
        screenOptions={({route}) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName 
            if (route.name == 'Home') {
              iconName = 'md-home'
              
            } else if (route.name == 'Saved') {
              iconName = 'md-heart';
            }
            return<Ionicons name={iconName}  size={size} color={color} />
          },
          tabBarActiveTintColor: '#FC5252',
          tabBarInactiveTintColor: '#898989',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
        <Tab.Screen name="Saved" component={Saved} options={{headerShown: false}} />
      </Tab.Navigator>
    </NavigationContainer>
    <StatusBar style='auto' />
  </>
    

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
