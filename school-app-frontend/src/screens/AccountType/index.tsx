import * as React from 'react';
import { TextInput } from 'react-native-paper';
import { Text, Image, TouchableOpacity, SafeAreaView} from "react-native";
import { styles } from './styles';
import { Ionicons } from '@expo/vector-icons'; 


export function AccountType() {
    const [text, setText] = React.useState("");
    const [teacher, setTeacher] = React.useState(false);
    const [student, setStudent] = React.useState(false);

    return (
        <SafeAreaView style={styles.container}>
            
            <SafeAreaView style={styles.containerLogo}>
                <Image
                    source={require('../../../assets/logo.png')}
                    style={{ width: '60%' }}
                    resizeMode='contain'
                />
            </SafeAreaView>

            <SafeAreaView style={styles.containerSubtitle}>
                <Text
                    style={{ fontSize: 22, color: 'gray' }}
                >
                    Choose your access type
                </Text>
            </SafeAreaView>
 
            <SafeAreaView style={styles.containerAccountTypeButtons}>

                <TouchableOpacity 
                    style={teacher ? styles.teacherButtonSelected : styles.teacherButton}
                    onPress={() => {setTeacher(!teacher); setStudent(false)}}>

                        <Image
                            blurRadius={teacher ? 0 : 2}
                            style={styles.imageTeacherButton}
                            source={require('../../../assets/teacher.png')}
                            resizeMode='contain'
                        />   

                        <SafeAreaView style={styles.containerTextAndIconTeacherButton}>
                            <Text 
                                style={teacher ? styles.textTeacherButtonSelected : styles.textTeacherButton}>
                                    Teacher 
                            </Text>
                            <Ionicons
                                style={teacher ? styles.checkedIconTeacherButtonSelected : styles.checkedIconTeacherButton}
                                name="checkmark-circle-sharp"
                                size={24}
                                color="green"
                            />
                        </SafeAreaView>
                </TouchableOpacity> 

                <TouchableOpacity
                    style={student ? styles.studentButtonSelected : styles.studentButton}
                    onPress={() => {setStudent(!student); setTeacher(false)}}>

                        <Image
                            blurRadius={student ? 0 : 2}
                            style={styles.imageStudentButton}
                            source={require('../../../assets/person.png')}
                            resizeMode='contain'
                        />   

                        <SafeAreaView style={styles.containerTextAndIconStudentButton}>
                            <Text
                                style={student ? styles.textStudentButtonSelected : styles.textStudentButton}>
                                    Student 
                            </Text>   
                            <Ionicons
                                style={student ? styles.checkedIconStudentButtonSelected : styles.checkedIconStudentButton}
                                name="checkmark-circle-sharp"
                                size={24}
                                color="green"
                            /> 

                        </SafeAreaView>
                </TouchableOpacity> 
            </SafeAreaView>

            <SafeAreaView style={styles.containerForm}>
                <TextInput
                    keyboardType='decimal-pad'
                    mode='outlined'
                    label='Enrollment number'
                    selectionColor='#3A96AD'
                    activeOutlineColor='#3A96AD'
                    // backgroundColor='white'
                    // value={text}
                    onChangeText={text => setText(text)}
                    left={<TextInput.Icon icon="account" />}
                />
            </SafeAreaView>

            <SafeAreaView style={styles.containerContinueButton}>
                <TouchableOpacity
                    style={styles.continueButton}
                    onPress={() => console.log('Clique no botão para continuar')}>
                        <Text style={styles.buttonText}>
                            Continue   
                        </Text>
                </TouchableOpacity>    
            </SafeAreaView>

        </SafeAreaView>
    )
}