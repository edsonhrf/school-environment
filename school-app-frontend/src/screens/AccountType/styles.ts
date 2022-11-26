import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    container: {
        flex: 10,
        backgroundColor: 'white'
    },
    containerLogo: {
        flex: 2.0,
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    containerSubtitle: {
        flex: 0.5,
        // backgroundColor: 'pink',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    containerAccountTypeButtons: {
        flex: 2.5,
        // backgroundColor: 'purple',
        padding: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    teacherButton: {
        width: '45%',
        height: '70%',
        margin: 5
    },
    imageTeacherButton: {
        
    },
    studentButton: {
        width: '45%',
        height: '70%',
        margin: 5
    },
    imageStudentButton: {
        
    },
    containerForm: {
        flex: 1.0,
        // backgroundColor: 'orange',
        padding: 15,
        display: 'flex',
        justifyContent: 'center'
    },
    containerContinueButton: {
        flex: 2,
        // backgroundColor: 'gray',
        padding: 15,
        display: 'flex',
        justifyContent: 'center'
    },
    continueButton: {
        borderRadius: 8,
        padding: 10
    },
    buttonText: {
        fontSize: 20
    }
  });