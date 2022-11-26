import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 24
    },
    eventTitle: {
      color: '#6B6B6B',
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 48
    },
    eventSubtitle: {
      color: '#6B6B6B',
      fontSize: 20,
      // top: 0,
      textAlign: 'center'
    },
    inputEmail: {
      fontSize: 16,
      top: 30
    },
    inputPassword: {
      top: 60,
      fontSize: 16
    },
    loginButton: {
      padding: 3,
      top: 100,
      borderRadius: 8
    },
    logo: {
       alignItems: 'center',
       justifyContent: 'center'
    }
  });