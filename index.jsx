import { StyleSheet, Text, View, TextInput, Image, Pressable, Alert, Keyboard, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';

const form = () => {
  const router = useRouter();

  let [username, setusername] = useState('');
  let [password, setpassword] = useState('');

  return (
    <TouchableWithoutFeedback>
      <View style={styles.container}>
        <Text style={styles.header}>English (India) v</Text>
        <View style={styles.main}>
          <Image source={require('@/assets/images/instatext.png')} style={styles.logo} />
          <TextInput
            style={styles.input}
            placeholder="Phone Number, password or username"
            onChangeText={setusername}
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            onChangeText={setpassword}
            secureTextEntry={true}
          />
          <Pressable
            style={styles.btn}
            onPress={() => {
              // if (!username || !password) {
              //   Alert.alert('Error', 'Enter Values');
              // } else {
              //   Alert.alert('Success', `Name is ${username} \n password is ${password}`);
              // }
              router.replace('../(Main)/temp');

            }}
          >
            <Text style={styles.press}>Log In</Text>
          </Pressable>
          <Text style={styles.bottomtext}>
            Forget Your Login Credentials?{' '}
            <Text style={styles.signup}>Get Help Logging In</Text>
          </Text>
          <View style={styles.row}>
            <View style={styles.line}></View>
            <Text style={styles.ortext}>OR</Text>
            <View style={styles.line}></View>
          </View>
          <View style={styles.facebook}>
            <Image source={require('@/assets/images/facebook.jpg')} style={styles.facebookimg} />
            <Text style={{ color: '#31B5FF', fontWeight: '700' }}>Login With FaceBook</Text>
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={styles.bottomtext}>
            Don't Have An Account? <Text style={styles.signup}>Signup</Text>
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default form;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingHorizontal: 20,
    justifyContent: 'space-evenly',
    gap: 30,
  },
  header: {
    paddingVertical: 20,
    color: 'gray',
  },
  logo: {
    resizeMode: 'contain',
    height: 80,
    width: 350,
  },
  main: {
    alignItems: 'center',
    rowGap: 20,
  },
  input: {
    backgroundColor: 'white',
    width: 300,
    height: 45,
    fontWeight: '300',
    color: 'gray',
    fontSize: 12,
    paddingHorizontal: 10,
  },
  btn: {
    width: 300,
    height: 45,
    backgroundColor: '#31B5FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  press: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  bottomtext: {
    fontSize: 12,
    color: 'white',
  },
  signup: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  footer: {
    borderColor: 'gray',
    borderTopWidth: 1,
    width: '100%',
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  line: {
    borderColor: 'gray',
    borderTopWidth: 2,
    width: '40%',
    margin: 10,
  },
  ortext: {
    color: 'white',
    fontWeight: 'bold',
  },
  facebookimg: {
    height: 30,
    width: 30,
    margin: 2,
  },
  facebook: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
  },
});
