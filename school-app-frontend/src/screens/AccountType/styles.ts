import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    container: {
        flex: 10,
        backgroundColor: 'white',
    },
    containerLogo: {
        flex: 3.0,
        // backgroundColor: 'yellow',  //BACKGROUND-COLOR TEST
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    containerSubtitle: {
        flex: 0.6,
        // backgroundColor: 'pink', //BACKGROUND-COLOR TEST
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    containerAccountTypeButtons: {
        flex: 2.5,
        // backgroundColor: 'purple', //BACKGROUND-COLOR TEST
        padding: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    teacherButton: {
        width: '45%',
        height: '80%',
        margin: 5,
        backgroundColor: '#fff',
        borderRadius: 20,
        alignContent: 'center',
        alignItems: 'center',
        elevation: 10
    },
    teacherButtonSelected: {
        width: '45%',
        height: '80%',
        margin: 5,
        backgroundColor: '#B0DCE7',
        borderRadius: 20,
        alignContent: 'center',
        alignItems: 'center',
        elevation: 10,
        activeOpacity: 1000,
    },
    imageTeacherButton: {
        width: '60%',
        height: '70%',
        marginTop: 5,
        // marginBottom: 5
    },
    textTeacherButton: {
        fontSize: 15,
        color: '#D0D0D0',
    },
    textTeacherButtonSelected: {
        fontSize: 16,
        color: 'gray',
        marginRight: 2
    },
    containerTextAndIconTeacherButton: {
        flexDirection: 'row',
    },
    checkedIconTeacherButton: {
        display: 'none'
    },
    checkedIconTeacherButtonSelected: {
        display: 'flex'
    },
    studentButton: {
        width: '45%',
        height: '80%',
        margin: 5,
        backgroundColor: '#fff',
        borderRadius: 20,
        alignContent: 'center',
        alignItems: 'center',
        elevation: 10
    },
    studentButtonSelected: {
        width: '45%',
        height: '80%',
        margin: 5,
        backgroundColor: '#B0DCE7',
        borderRadius: 20,
        alignContent: 'center',
        alignItems: 'center',
        elevation: 10
    },
    imageStudentButton: {
        width: '70%',
        height: '70%',
        marginTop: 5,
        // marginBottom: 0
    },
    textStudentButton: {
        fontSize: 15,
        color: '#D0D0D0'
    },
    textStudentButtonSelected: {
        fontSize: 16,
        color: 'gray',
        marginRight: 2
    },
    checkedIconStudentButton: {
        display: 'none'
    },
    checkedIconStudentButtonSelected: {
        display: 'flex'
    },
    containerTextAndIconStudentButton: {
        flexDirection: 'row',
    },
    containerForm: {
        flex: 1.0,
        // backgroundColor: 'orange', //BACKGROUND-COLOR TEST
        padding: 20,
        display: 'flex',
        justifyContent: 'center',      
    },
    containerContinueButton: {
        flex: 1.5,
        // backgroundColor: 'gray', //BACKGROUND-COLOR TEST
        display: 'flex',
        justifyContent: 'center'
    },
    continueButtonEnable: {
        alignItems:'center',
        backgroundColor: '#3A96AD',
        height: 70,
        marginTop:20,
        marginBottom:10,
        padding: 15,
        justifyContent: 'center',
        display: 'flex',
        marginRight: 0,
        marginLeft: 0,
        flexDirection: 'row-reverse',
    },
    continueButtonDisable: {
        alignItems:'center',
        backgroundColor: '#D0D0D0',
        height: 70,
        marginTop:20,
        marginBottom:10,
        padding: 15,
        justifyContent: 'center',
        display: 'flex',
        marginRight: 0,
        marginLeft: 0,
        flexDirection: 'row-reverse',
    },
    buttonText: {
        fontSize: 20,
        color: 'white',
    }
  });