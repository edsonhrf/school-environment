import * as React from 'react';
import { TextInput, Button } from 'react-native-paper';
import { View, Text, Image, } from "react-native";
import { styles } from './styles';

export function AccountType() {
    const [text, setText] = React.useState("");
    return (
        <View style={styles.container}>
            
            <View style={styles.containerLogo}>
                <Image
                    source={require('../../../assets/logo.png')}
                    style={{ width: '60%' }}
                    resizeMode='contain'
                />
            </View>

            <View style={styles.containerSubtitle}>
                <Text
                    style={{ fontSize: 22, color: 'gray' }}
                >
                    Choose your access type
                </Text>
            </View>
 
            <View style={styles.containerAccountTypeButtons}>

                <Button style={styles.teacherButton}
                    mode="elevated"
                    onPress={() => console.log('Pressed')}
                >  
                    {/* <Image style={styles.imageTeacherButton}
                        source={require('../../../assets/teacher.png')}
                        resizeMode='contain'
                    />     */}
                </Button>

                <Button style={styles.studentButton}
                    mode="elevated"
                    onPress={() => console.log('Pressed')}
                >
                    {/* <Image style={styles.imageStudentButton}
                        source={require('../../../assets/person.png')}
                        resizeMode='contain'
                    /> */}
                </Button>
            </View>

            <View style={styles.containerForm}>
                <TextInput
                    keyboardType='decimal-pad'
                    mode='outlined'
                    label='Enrollment number'
                    selectionColor='#3A96AD'
                    activeOutlineColor='#3A96AD'
                    // value={text}
                    onChangeText={text => setText(text)}
                    left={<TextInput.Icon icon="account" />}
                />
            </View>

            <View style={styles.containerContinueButton}>
                <Button style={styles.continueButton}
                    mode="contained"
                    onPress={() => console.log('Clique no botão capturado')}
                    buttonColor='#3A96AD'
                    icon={'page-next-outline'}
                    labelStyle={{fontSize: 30}}
                    contentStyle={{flexDirection: 'row-reverse'}}
                >
                        <Text style={styles.buttonText}>
                            Continue   
                        </Text>
                </Button>
            </View>

        </View>
    )
}