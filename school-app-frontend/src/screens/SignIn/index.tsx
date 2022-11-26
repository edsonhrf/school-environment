import * as React from 'react';
import { TextInput, Button } from 'react-native-paper';
import { View, Text, Image } from "react-native";
import { styles } from "./styles";


export function SignIn() {
  const [text, setText] = React.useState("");
    return (
      <View style={styles.container}>

        <View>
          <Image
            source={require('../../../assets/logo.png')}
            style={{ width: '100%' }}
            resizeMode='contain'
          />
        </View>

        <Text style={styles.eventSubtitle}>
        Enter your enrollment and password
        </Text>
        
        <TextInput style={styles.inputEmail}
          mode='outlined'
          label='Enrollment'
          selectionColor='#3A96AD'
          activeOutlineColor='#3A96AD'
          value={text}
          onChangeText={text => setText(text)}
          left={<TextInput.Icon icon="account" />}
        /> 

        <TextInput style={styles.inputPassword}
          mode='outlined'
          label='Password'
          selectionColor='#3A96AD'
          activeOutlineColor='#3A96AD'
          value={text}
          onChangeText={text => setText(text)}
          right={<TextInput.Icon icon="eye" />}
          left={<TextInput.Icon icon="lock" />}
        />      

        <Button style={styles.loginButton}
          mode="contained"
          onPress={() => console.log('Clique no botão capturado')}
          buttonColor='#3A96AD'
          >
            Login
        </Button>
      </View>
    );
  }