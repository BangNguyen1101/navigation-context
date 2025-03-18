import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const CustomTextInput = ({ placeholder, secureTextEntry }) => (
  <TextInput style={styles.input} placeholder={placeholder} secureTextEntry={secureTextEntry} />
);

const IconButton = ({ icon, text, color }) => (
  <TouchableOpacity style={[styles.iconButton, { borderColor: color }]}>
    <FontAwesome name={icon} size={20} color={color} />
    <Text style={[styles.iconText, { color }]}>{text}</Text>
  </TouchableOpacity>
);

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>

      <Text style={styles.label}>Email ID</Text>
      <CustomTextInput placeholder="Enter your email here!" />

      <Text style={styles.label}>Password</Text>
      <CustomTextInput placeholder="Enter your password here!" secureTextEntry />

      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={styles.forgotText}>For got password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signInButton} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.signInText}>Sign In</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>Or sign in with</Text>

      <View style={styles.buttonRow}>
        <IconButton icon="google" text="Google" color="black" />
        <IconButton icon="facebook" text="Facebook" color="black"  />
      </View>

      <Text style={styles.signupText}>
        Not yet a member?{' '}
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.signupLink}>Sign Up</Text>
            </TouchableOpacity>
        </Text>

    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F5F5F5', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  label: { alignSelf: 'flex-start', fontSize: 14, fontWeight: 'bold', marginBottom: 5 },
  input: { width: '100%', borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 5, marginBottom: 10, backgroundColor: 'white' },
  forgotText: { color: 'orange', alignSelf: 'flex-end', marginBottom: 15 },
  signInButton: { backgroundColor: 'orange', padding: 15, borderRadius: 5, alignItems: 'center', width: '100%' },
  signInText: { color: 'white', fontWeight: 'bold' },
  orText: { textAlign: 'center', marginVertical: 15 },
  buttonRow: { flexDirection: 'row', justifyContent: 'space-evenly', width: '100%' },
  iconButton: { flexDirection: 'row', alignItems: 'center', padding: 10, borderWidth: 1, borderRadius: 5, flex: 1, justifyContent: 'center', marginHorizontal: 5 },
  iconText: { marginLeft: 10, fontWeight: 'bold' },
  signupText: { textAlign: 'center', marginTop: 15 },
  signupLink: { color: 'orange', fontWeight: 'bold' }
});

export default LoginScreen;
