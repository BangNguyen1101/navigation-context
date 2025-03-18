import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthStack from './routers/index';
import HomeScreen from './screens/Home/index';

const Stack = createStackNavigator();

const MainStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Auth" component={AuthStack} />
    <Stack.Screen name="Home" component={HomeScreen} />
  </Stack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}
