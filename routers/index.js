import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/Login/index';
import SignInScreen from '../screens/SignIn/index';
import SignUpScreen from '../screens/SignUp/index';
import ForgotPasswordScreen from '../screens/ForgotPassword/index';
import HomeScreen from '../screens/Home/index';  

const Stack = createStackNavigator();

const AuthStack = () => (
  <Stack.Navigator initialRouteName="Login">
    <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
    <Stack.Screen name="SignIn" component={SignInScreen} />
    <Stack.Screen name="SignUp" component={SignUpScreen} />
    <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
    <Stack.Screen name="Home" component={HomeScreen} />  
  </Stack.Navigator>
);

export default AuthStack;
